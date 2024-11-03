import "server-only";

import {
    Client,
    Account
} from "node-appwrite";

export async function CreateAdminClient(){
    const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_EDNPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!)
    .setKey(process.env.NEXT_APPWRITE_KEY!)

    return{
        get account(){
            return new Account(client);
        },
    };
};