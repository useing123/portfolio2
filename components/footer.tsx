import { GitHubLogoIcon, InstagramLogoIcon } from "@radix-ui/react-icons"
import { buttonVariants } from "./ui/button"
import XLogoIcon from "./icons/x"
import { socialLinks } from "@/lib/constants"
import Link from "next/link"

export const Footer = () => {
  return (
    <footer className="relative bg-indigo-900 py-12">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="flex justify-center items-center gap-6 mb-6">
          <Link target="_blank" className={buttonVariants({ size: "icon-xl" })} href={socialLinks.instagram}>
            <InstagramLogoIcon className="size-6" />
          </Link>
          <Link target="_blank" className={buttonVariants({ size: "icon-xl" })} href={socialLinks.x}>
            <XLogoIcon className="size-6" />
          </Link>
          <Link target="_blank" className={buttonVariants({ size: "icon-xl" })} href={socialLinks.github}>
            <GitHubLogoIcon className="size-6" />
          </Link>
        </div>

        <div className="text-white/60 text-sm">
          <p className="mb-2">Ossein® 2024</p>
          <p className="italic">Built with curiosity</p>
        </div>
      </div>
    </footer>
  )
}
