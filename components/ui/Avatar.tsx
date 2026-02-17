import { cn } from "@/lib/utils";

const sizeMap = {
  sm: "h-8 w-8 text-xs",
  md: "h-10 w-10 text-sm",
  lg: "h-12 w-12 text-base"
};

export function Avatar({
  name,
  size = "md",
  className
}: {
  name: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div
      className={cn(
        "inline-flex items-center justify-center rounded-full bg-brand-100 font-medium text-brand-700",
        sizeMap[size],
        className
      )}
    >
      {initials}
    </div>
  );
}
