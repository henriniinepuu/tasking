import { getCurrent } from "@/features/auth/queries";
import { redirect } from "next/navigation";

export default async function SettingsPage() {
  const user = await getCurrent();
  if (!user) redirect("/sign-in")


  return(
    <div className="bg-neutral-300 p-4 h-full">
      Settings page
    </div>
  )
}
