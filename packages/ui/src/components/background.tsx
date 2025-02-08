"use client"

import React, { CSSProperties, forwardRef, useEffect, useRef, useState } from "react"

type StaticSpacingToken =
  | "0"
  | "1"
  | "2"
  | "4"
  | "8"
  | "12"
  | "16"
  | "20"
  | "24"
  | "32"
  | "40"
  | "48"
  | "56"
  | "64"
  | "80"
  | "104"
  | "128"
  | "160"

type TShirtSizes = "xs" | "s" | "m" | "l" | "xl"

type ResponsiveSpacingToken = TShirtSizes

type SpacingToken = StaticSpacingToken | ResponsiveSpacingToken

function setRef<T>(ref: React.Ref<T> | undefined, value: T | null) {
  if (typeof ref === "function") {
    ref(value)
  } else if (ref && "current" in ref) {
    ;(ref as React.MutableRefObject<T | null>).current = value
  }
}

interface MaskOptions {
  none: "none"
  cursor: "cursor"
  topLeft: "topLeft"
  topRight: "topRight"
  bottomLeft: "bottomLeft"
  bottomRight: "bottomRight"
}

type MaskType = keyof MaskOptions

interface BackgroundProps {
  position?: CSSProperties["position"]
  gradient?: GradientProps
  dots?: DotsProps
  mask?: MaskType
  className?: string
  style?: React.CSSProperties
}

interface GradientProps {
  display?: boolean
  opacity?: number
}

interface DotsProps {
  display?: boolean
  opacity?: number
  color?: string
  size?: SpacingToken
}

const Background = forwardRef<HTMLDivElement, BackgroundProps>(
  (
    { position = "fixed", gradient = {}, dots = {}, mask = "none", className, style },
    forwardedRef
  ) => {
    const dotsColor = dots.color ?? "#000"
    const dotsSize = dots.size ?? "16"

    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
    const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 })
    // const maskSize = 1200
    const maskSize = 600
    const backgroundRef = useRef<HTMLDivElement>(null)
    let lastCall = 0

    useEffect(() => {
      setRef(forwardedRef, backgroundRef.current)
    }, [forwardedRef])

    useEffect(() => {
      const handleMouseMove = (event: MouseEvent) => {
        const now = Date.now()

        if (now - lastCall < 16) return
        lastCall = now

        if (backgroundRef.current) {
          const rect = backgroundRef.current.getBoundingClientRect()

          setCursorPosition({
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
          })
        }
      }

      document.addEventListener("mousemove", handleMouseMove)

      return () => {
        document.removeEventListener("mousemove", handleMouseMove)
      }
    }, [])

    useEffect(() => {
      let animationFrameId: number

      const updateSmoothPosition = () => {
        setSmoothPosition((prev) => {
          const dx = cursorPosition.x - prev.x
          const dy = cursorPosition.y - prev.y
          const easingFactor = 0.05

          return {
            x: Math.round(prev.x + dx * easingFactor),
            y: Math.round(prev.y + dy * easingFactor)
          }
        })
        animationFrameId = requestAnimationFrame(updateSmoothPosition)
      }

      if (mask === "cursor") {
        animationFrameId = requestAnimationFrame(updateSmoothPosition)
      }

      return () => {
        cancelAnimationFrame(animationFrameId)
      }
    }, [cursorPosition, mask])

    const commonStyles: CSSProperties = {
      position,
      top: "0",
      left: "0",
      zIndex: "0",
      width: "100%",
      height: "100%",
      pointerEvents: "none",
      ...style
    }

    const maskStyle = (): CSSProperties => {
      switch (mask) {
        case "none":
          return { maskImage: "none" }
        case "cursor":
          return {
            maskImage: `radial-gradient(circle ${maskSize / 2}px at ${smoothPosition.x}px ${smoothPosition.y}px, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 100%)`,
            maskSize: "100% 100%"
          }
        case "topLeft":
          return {
            maskImage: `radial-gradient(circle ${maskSize / 2}px at 0% 0%, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 100%)`,
            maskSize: "100% 100%"
          }
        case "topRight":
          return {
            maskImage: `radial-gradient(circle ${maskSize / 2}px at 100% 0%, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 100%)`,
            maskSize: "100% 100%"
          }
        case "bottomLeft":
          return {
            maskImage: `radial-gradient(circle ${maskSize / 2}px at 0% 100%, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 100%)`,
            maskSize: "100% 100%"
          }
        case "bottomRight":
          return {
            maskImage: `radial-gradient(circle ${maskSize / 2}px at 100% 100%, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 100%)`,
            maskSize: "100% 100%"
          }
        default:
          return {}
      }
    }

    return (
      <>
        {gradient.display && (
          <div
            ref={backgroundRef}
            className={className}
            style={{
              ...commonStyles,
              opacity: gradient.opacity,
              background:
                "radial-gradient(100% 100% at 49.99% 0%, rgba(255, 255, 255, 0) 0%, #a78bfa 100%), radial-gradient(87.4% 84.04% at 6.82% 16.24%, #8b5cf6 0%, rgba(255, 255, 255, 0) 100%), radial-gradient(217.89% 126.62% at 48.04% 0%, #c3b2ff 0%, rgba(255, 255, 255, 0) 100%)",
              ...maskStyle()
            }}
          />
        )}
        {dots.display && (
          <div
            ref={backgroundRef}
            className={className}
            style={{
              ...commonStyles,
              opacity: dots.opacity,
              backgroundImage: `radial-gradient(${dotsColor} 1px, transparent 1px)`,
              backgroundSize: `${dotsSize}px ${dotsSize}px`,
              ...maskStyle()
            }}
          />
        )}
      </>
    )
  }
)

Background.displayName = "Background"
export { Background }
