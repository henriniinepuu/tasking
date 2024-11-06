import Image from "next/image"
import Link from "next/link"
import { DottedSeparator } from "./dotted-separator"
import { Navigation } from "./navigation"

export const Sidebar = () => {
    return(
        <aside className="h-full p-4 w-full bg-neutral-100">
            <Link href="/">
                <Image src="logo.svg" alt="logo" width={164} height={48}></Image>
            </Link>
            <DottedSeparator className="my-4"/>
            <Navigation></Navigation>
        </aside>
    )
}