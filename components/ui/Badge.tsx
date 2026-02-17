import { HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
  {
    variants: {
      variant: {
        default: "bg-slate-100 text-slate-700",
        success: "bg-success-light text-green-800",
        warning: "bg-warning-light text-amber-800",
        error: "bg-error-light text-red-800",
        info: "bg-info-light text-blue-800"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant, className }))} {...props} />;
}

const statusVariantMap: Record<string, "success" | "warning" | "error" | "info" | "default"> = {
  confirmed: "success",
  active: "success",
  pending: "warning",
  cancelled: "error",
  inactive: "error",
  admin: "info",
  member: "default"
};

export function StatusBadge({ status, className, ...props }: { status: string } & HTMLAttributes<HTMLSpanElement>) {
  const variant = statusVariantMap[status.toLowerCase()] ?? "default";
  return <Badge variant={variant} className={className} {...props}>{status}</Badge>;
}
