import type { Theme } from "./themes"

export const applyTheme = (theme:Theme) => {
    const root = document.documentElement;

    root.style.setProperty("--bg-color", theme.background);
    root.style.setProperty("--text-color", theme.text);
    root.style.setProperty("--button-bg", theme.buttonBackground);
    root.style.setProperty("--button-hover", theme.buttonHover);
};
