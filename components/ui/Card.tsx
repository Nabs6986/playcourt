import { HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva("transition-all duration-200", {
  variants: {
    variant: {
      standard:
        "rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md",
      feature:
        "rounded-2xl border border-slate-100 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm group hover:border-brand-200 hover:shadow-md"
    }
  },
  defaultVariants: {
    variant: "standard"
  }
});

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

export function Card({ className, variant, ...props }: CardProps) {
  return <div className={cn(cardVariants({ variant, className }))} {...props} />;
}
