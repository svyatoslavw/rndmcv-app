import React from "react"

export const SpinnerIcon = React.forwardRef<SVGSVGElement, React.ComponentProps<"svg">>(
  (props, ref) => (
    <svg
      ref={ref}
      fill="currentColor"
      height={60}
      width={60}
      viewBox="0 0 24 24"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="0">
        <animate
          attributeName="r"
          begin="0;spinner_ITag.begin+0.4s"
          calcMode="spline"
          dur="1.2s"
          fill="freeze"
          id="spinner_0Nme"
          keySplines=".52,.6,.25,.99"
          values="0;11"
        />
        <animate
          attributeName="opacity"
          begin="0;spinner_ITag.begin+0.4s"
          calcMode="spline"
          dur="1.2s"
          fill="freeze"
          keySplines=".52,.6,.25,.99"
          values="1;0"
        />
      </circle>
      <circle cx="12" cy="12" r="0">
        <animate
          attributeName="r"
          begin="spinner_0Nme.begin+0.4s"
          calcMode="spline"
          dur="1.2s"
          fill="freeze"
          id="spinner_f83A"
          keySplines=".52,.6,.25,.99"
          values="0;11"
        />
        <animate
          attributeName="opacity"
          begin="spinner_0Nme.begin+0.4s"
          calcMode="spline"
          dur="1.2s"
          fill="freeze"
          keySplines=".52,.6,.25,.99"
          values="1;0"
        />
      </circle>
      <circle cx="12" cy="12" r="0">
        <animate
          attributeName="r"
          begin="spinner_0Nme.begin+0.8s"
          calcMode="spline"
          dur="1.2s"
          fill="freeze"
          id="spinner_ITag"
          keySplines=".52,.6,.25,.99"
          values="0;11"
        />
        <animate
          attributeName="opacity"
          begin="spinner_0Nme.begin+0.8s"
          calcMode="spline"
          dur="1.2s"
          fill="freeze"
          keySplines=".52,.6,.25,.99"
          values="1;0"
        />
      </circle>
    </svg>
  )
)

SpinnerIcon.displayName = "SunIcon"
