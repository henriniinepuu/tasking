import { getCurrent } from "@/features/auth/actions";
import { redirect } from "next/navigation";

export default async function VaultPage() {
  const user = await getCurrent();
  if (!user) redirect("/sign-in")


  return(
    <div className="bg-neutral-500 p-4 h-full">
        Valt page
    </div>
  )
}
