import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-body",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 rounded-md",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-md",
        outline: "border border-border bg-transparent text-foreground hover:bg-secondary hover:border-primary rounded-md",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-md",
        ghost: "hover:bg-secondary hover:text-foreground rounded-md",
        link: "text-primary underline-offset-4 hover:underline",
        // Luxury Hero Variants
        hero: "bg-primary text-primary-foreground hover:shadow-glow hover:scale-[1.02] active:scale-[0.98] rounded-none uppercase tracking-widest font-display text-lg border-2 border-primary hover-shine",
        heroOutline: "bg-transparent border-2 border-foreground/30 text-foreground hover:border-primary hover:text-primary hover:shadow-glow rounded-none uppercase tracking-widest font-display text-lg hover-shine",
        // Glass Variants
        glass: "bg-foreground/5 backdrop-blur-md border border-foreground/10 text-foreground hover:bg-foreground/10 hover:border-primary/50 rounded-lg",
        glassPrimary: "bg-primary/20 backdrop-blur-md border border-primary/30 text-foreground hover:bg-primary/30 hover:shadow-glow rounded-lg",
        // Premium CTA
        premium: "bg-gradient-primary text-primary-foreground hover:shadow-glow-lg hover:scale-[1.02] active:scale-[0.98] rounded-lg uppercase tracking-wider font-semibold hover-shine",
        // Minimal
        minimal: "text-foreground hover:text-primary border-b-2 border-transparent hover:border-primary rounded-none pb-1",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3 text-xs",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-lg",
        icon: "h-10 w-10",
        iconLg: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
