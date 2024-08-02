import { setLayout } from "@/entities/resume"
import { LAYOUT_DATA } from "@/shared/lib"
import { useAppDispatch } from "@/shared/lib/store"
import { cn } from "@/shared/lib/utils"
import { Button } from "@/shared/ui"

const CustomizeLayout = () => {
  const dispatch = useAppDispatch()

  return (
    <div>
      <h2 className="mb-2 text-2xl font-bold">Layout</h2>
      <div className="flex gap-6">
        {LAYOUT_DATA.map((layout) => (
          <div key={layout.position} className="flex flex-col gap-2">
            <Button
              variant={"outline"}
              onClick={() => dispatch(setLayout(layout))}
              className={cn(
                "flex h-16 w-16 rounded-full border-2 border-primary p-1 shadow-none transition-all hover:opacity-70",
                layout.class
              )}
            >
              <div
                className={cn("h-full w-1/2 bg-primary", {
                  "h-1/2 w-full rounded-t-full": layout.position === "top",
                  "rounded-l-full": layout.position === "left",
                  "rounded-r-full": layout.position === "right"
                })}
              />
              <div
                className={cn("h-full w-1/2 bg-white", {
                  "h-1/2 w-full rounded-b-full": layout.position === "top",
                  "rounded-r-full": layout.position === "left",
                  "rounded-l-full": layout.position === "right"
                })}
              />
            </Button>
            <p className="text-center text-xs capitalize">{layout.position}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export { CustomizeLayout }
