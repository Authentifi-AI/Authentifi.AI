import Image from "next/image"

interface LogoProps {
  size?: "sm" | "md" | "lg"
  showText?: boolean
}

export function Logo({ size = "md", showText = true }: LogoProps) {
  const sizeValues = {
    sm: 24,
    md: 32,
    lg: 40,
  }

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  }

  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <Image
          src="/images/authentifi-logo.png"
          alt="Authentifi Logo"
          width={sizeValues[size]}
          height={sizeValues[size]}
          className="object-contain"
        />
      </div>
      {showText && (
        <span className={`font-bold ${textSizeClasses[size]} text-white`}>
          Authentifi<span className="text-white">AI</span>
        </span>
      )}
    </div>
  )
}
