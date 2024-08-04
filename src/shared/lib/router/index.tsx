import { NotepadTextIcon, PencilRulerIcon } from "lucide-react"
import { Link, Outlet, createBrowserRouter } from "react-router-dom"

import Home from "@/app/home/page"
import { ResumeDocument } from "@/widgets"

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="min-h-screen w-full bg-zinc-100 font-primary">
        <header className="flex w-full justify-between p-5">
          <img src="/logo.webp" width={80} height={80} alt="logo" className="rounded-3xl" />
          <div className="flex gap-4">
            <Link to="about">About</Link>
            <Link to="/">Home</Link>
          </div>
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
        lazy: () => import("@/app/about/page").then((m) => ({ Component: m.default }))
      }
    ]
  },
  {
    path: "/resume",
    element: (
      <div className="max-w-screen flex h-screen max-h-screen w-screen place-items-center bg-zinc-100">
        <div className="mx-auto flex h-full w-fit gap-8 bg-zinc-100 px-10 font-primary">
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
              to="customize"
            >
              <PencilRulerIcon size={26} />
              Costumize
            </Link>
          </header>
          <div className="flex gap-8 lg:w-[900px] xl:w-[1100px] 2xl:w-[1300px]">
            <div className="relative w-1/2 overflow-hidden scroll-smooth pb-8 pt-8">
              <Outlet />
            </div>
            <ResumeDocument />
          </div>
        </div>
      </div>
    ),
    children: [
      {
        path: "content",
        lazy: () =>
          import("@/app/resume/content/page").then((m) => ({
            Component: m.default
          }))
      },
      {
        path: "customize",
        lazy: () =>
          import("@/app/resume/customize/page").then((m) => ({
            Component: m.default
          }))
      }
    ]
  }
])
