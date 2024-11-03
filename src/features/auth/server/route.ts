import { Hono } from "hono";
import { zValidator} from "@hono/zod-validator";
import { loginSchema, registerSchema } from "../schemas";
import { CreateAdminClient } from "@/lib/appwrite";
import { ID } from "node-appwrite";
import { setCookie } from "hono/cookie";
import { AUTH_COOKIE } from "../constants";

const app = new Hono()
    .post(
        "/login", 
        zValidator("json",loginSchema),
        (c) => {
            const { email, password} = c.req.valid("json");

            console.log({email , password});

            return c.json({ email, password})
    })
    .post(
        "/register",
        zValidator("json", registerSchema),
        async (c) => {
            const {name, email, password} = c.req.valid("json");
            
            const {account} = await CreateAdminClient();

            const user = await account.create(
                ID.unique(),
                email,
                password,
                name,
            );

            const session = await account.createEmailPasswordSession(
                email,
                password,
            );

            setCookie(c, AUTH_COOKIE, session.secret, {
                path: "/",
                httpOnly: true,
                secure: true,
                sameSite: "strict",
                maxAge: 60 * 60 * 24 * 30
            })

            return c.json({ hello : "word"});
        }

    )
    
export default app;