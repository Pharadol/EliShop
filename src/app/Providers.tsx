"use client";
import { useRef, useState, useEffect } from "react";
import { Provider } from "react-redux";
import { store, AppStore } from "../redux/store";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider } from "next-themes";

export default function Providers({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<AppStore>();
  const [mounted, setMounted] = useState(false);

  if (!storeRef.current) {
    storeRef.current = store();
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Provider store={storeRef.current}>{children}</Provider>;
  }

  return (
    <Provider store={storeRef.current}>
      <NextUIProvider>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </NextUIProvider>
    </Provider>
  );
}
