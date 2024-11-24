import { getCurrent } from "@/features/auth/actions";
import { redirect } from "next/navigation";

export const WorkspageIdPage = async () => {
    const user = await getCurrent();
    if (!user) redirect("/sign-in")

    return(
        <div>
            Workspace ID
        </div>
    )

}
export default WorkspageIdPage;