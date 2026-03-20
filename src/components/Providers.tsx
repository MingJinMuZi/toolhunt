"use client";

import { ReactNode } from "react";
import { LocaleProvider } from "@/contexts/LocaleContext";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LocaleProvider>
      {children}
    </LocaleProvider>
  );
}