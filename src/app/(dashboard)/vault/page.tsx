import { getCurrent } from "@/features/auth/queries";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function VaultPage() {
  const user = await getCurrent();
  if (!user) redirect("/sign-in")


  return(
    <div className="bg-neutral-300 p-4 h-full">
      <ul>
        <li><Link href="/vault/10">10</Link></li>
        <li>11</li>
        <li>12</li>
        <li>13</li>
      </ul>
    </div>
  )
}
