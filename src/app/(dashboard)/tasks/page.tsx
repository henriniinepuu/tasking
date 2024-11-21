import { getCurrent } from "@/features/auth/actions";
import { redirect } from "next/navigation";

export default async function TasksPage() {
  const user = await getCurrent();
  if (!user) redirect("/sign-in")


  return(
    <div className="bg-neutral-300 p-4 h-full">
      Tasks page
    </div>
  )
}
