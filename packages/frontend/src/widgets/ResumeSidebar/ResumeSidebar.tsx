import { NotepadTextIcon, PencilRulerIcon } from "lucide-react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"

import { cn } from "@/shared/lib/utils"

const ResumeSidebar = ({ className }: { className?: string }) => {
  const t = useTranslations("resume.sidebar")
  return (
    <header
      className={cn(
        "mt-8 hidden h-fit flex-col items-center gap-4 rounded-xl bg-white p-4 text-sm sm:hidden md:hidden lg:flex xl:flex 2xl:flex",
        className
      )}
    >
      <Link href="/">
        <Image src="/logo.webp" width={70} height={70} className="rounded-full" alt="logo" />
      </Link>
      <Link
        className="flex w-full flex-col items-center gap-2 rounded-xl p-2 transition-all hover:bg-zinc-50"
        href="/resume/content"
      >
        <NotepadTextIcon size={26} />
        {t("content")}
      </Link>
      <Link
        className="flex w-full flex-col items-center gap-2 rounded-xl p-2 transition-all hover:bg-zinc-50"
        href="/resume/customize"
      >
        <PencilRulerIcon size={26} />
        {t("customize")}
      </Link>
    </header>
  )
}

export { ResumeSidebar }
