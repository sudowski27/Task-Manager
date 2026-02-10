import type { Theme } from "./themes"

export const applyTheme = (theme:Theme) => {
    const root = document.documentElement;

    root.style.setProperty("--bg-color", theme.background);
    root.style.setProperty("--text-color", theme.text);
};
