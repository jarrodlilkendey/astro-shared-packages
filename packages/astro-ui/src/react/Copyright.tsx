import { cn } from "../utils/cn";

export interface CopyrightProps {
  className?: string;
}

const year = new Date().getFullYear();

export function Copyright({ className }: CopyrightProps) {
  return (
    <p className={cn("text-center", className)}>
      Copyright {year} - All Rights Reserved
    </p>
  );
}
