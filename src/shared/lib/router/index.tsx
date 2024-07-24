import Home from "@/app/home/page"
import { NotepadTextIcon, PencilRulerIcon } from "lucide-react"
import { Link, Outlet, createBrowserRouter } from "react-router-dom"

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
        <header className="mt-8 flex h-fit flex-col items-center gap-4 rounded-xl bg-white p-2 text-xs">
          <Link to="/">
            <img src="/logo.png" width={60} className="rounded-full" alt="logo" height={60} />
          </Link>
          <Link
            className="flex w-full flex-col items-center gap-1 rounded-xl p-2 transition-all hover:bg-zinc-50"
            to="content"
          >
            <NotepadTextIcon size={26} />
            Content
          </Link>
          <Link
            className="flex w-full flex-col items-center gap-1 rounded-xl p-2 transition-all hover:bg-zinc-50"
            to="costumize"
          >
            <PencilRulerIcon size={26} />
            Costumize
          </Link>
        </header>
        <Outlet />
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
