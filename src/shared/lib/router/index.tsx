import { NotepadTextIcon, PencilRulerIcon } from "lucide-react"
import { Link, Outlet, createBrowserRouter } from "react-router-dom"

import Home from "@/app/home/page"
import { ResumeDocument } from "@/widgets"

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="min-h-screen w-full bg-zinc-100 font-primary">
        <header className="flex gap-4 p-5">
          <Link to="about">About</Link>
          <Link to="/">Home</Link>
        </header>
        <Outlet />
      </div>
    ),
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "about",
        // Single route in lazy file
        lazy: () => import("@/app/about/page").then((m) => ({ Component: m.default }))
      }
    ]
  },
  {
    path: "/resume",
    // Single route in lazy file
    element: (
      <div className="flex h-screen max-h-screen w-full gap-8 bg-zinc-100 px-10 font-primary">
        <header className="mt-8 flex h-fit flex-col items-center gap-4 rounded-xl bg-white p-4 text-sm">
          <Link to="/">
            <img src="/logo.webp" width={70} height={70} className="rounded-full" alt="logo" />
          </Link>
          <Link
            className="flex w-full flex-col items-center gap-2 rounded-xl p-2 transition-all hover:bg-zinc-50"
            to="content"
          >
            <NotepadTextIcon size={26} />
            Content
          </Link>
          <Link
            className="flex w-full flex-col items-center gap-2 rounded-xl p-2 transition-all hover:bg-zinc-50"
            to="costumize"
          >
            <PencilRulerIcon size={26} />
            Costumize
          </Link>
        </header>
        <div className="flex w-full gap-8">
          <div className="relative w-1/2 overflow-hidden scroll-smooth pb-8 pt-8">
            <Outlet />
          </div>
          <ResumeDocument />
        </div>
      </div>
    ),
    children: [
      {
        path: "content",
        // Single route in lazy file
        lazy: () =>
          import("@/app/resume/content/page").then((m) => ({
            Component: m.default
          }))
      },
      {
        path: "costumize",
        // Single route in lazy file
        lazy: () =>
          import("@/app/resume/costumize/page").then((m) => ({
            Component: m.default
          }))
      }
    ]
  }
])
