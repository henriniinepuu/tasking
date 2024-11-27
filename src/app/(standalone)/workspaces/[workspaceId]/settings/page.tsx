import { getCurrent } from "@/features/auth/queries";
import { getWorkspace } from "@/features/workspaces/queries";
import { EditWorkspaceForm } from "@/features/workspaces/components/edit-workspace-form";
import { redirect } from "next/navigation";

interface WorkspaceIdSettingsPageProps {
    params: {
        workspaceId: string;
    }
}


export const WorkspaceIdSettingsPage = async ({params}: WorkspaceIdSettingsPageProps) => {
    const user = await getCurrent();
    if(!user){
        redirect("/sign-in");
    }

    const initalValues = await getWorkspace({workspaceId: params.workspaceId});
    if (!initalValues) {
        redirect(`/workspaces/${params.workspaceId}`);
    }


    return (
        <div className="w-full lg:max-w-xl">
            <EditWorkspaceForm initalValues={initalValues} />
        </div>
    )
}
export default WorkspaceIdSettingsPage;