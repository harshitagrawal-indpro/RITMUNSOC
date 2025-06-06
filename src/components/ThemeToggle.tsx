
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="w-9 px-0 hover:bg-munsoc-teal-100 dark:hover:bg-munsoc-teal-900 transition-all duration-300 transform hover:scale-110"
    >
      {theme === "light" ? "🌙" : "☀️"}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
