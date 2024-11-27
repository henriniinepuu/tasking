import { getCurrent } from "@/features/auth/queries";
import { redirect } from "next/navigation";

export default async function MembersPage() {
  const user = await getCurrent();
  if (!user) redirect("/sign-in")


  return(
    <div className="bg-neutral-300 p-4 h-full">
      Members page
    </div>
  )
}
