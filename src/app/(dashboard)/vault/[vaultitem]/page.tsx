import { getCurrent } from "@/features/auth/actions";
import { redirect } from "next/navigation";

export default async function VaultItemPage() {
  const user = await getCurrent();
  if (!user) redirect("/sign-in")


  return(
    <div className="bg-neutral-300 p-4 h-full flex">
        <div className="bg-neutral-500">
          <ul>
            This is an item
          </ul>
        </div>
        <div className="bg-neutral-700">

        </div>
    </div>
  )
}
