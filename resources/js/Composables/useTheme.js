import { ref } from "vue";

const lightTheme = import.meta.env.VITE_LIGHT_THEME || "aura-light-blue";
const darkTheme = import.meta.env.VITE_DARK_THEME || "aura-dark-blue";
const currentTheme = ref(getSavedThemePreference());

/**
 * Set the theme of the site, save the users preference in localStorage
 * Alternatively use: https://v3.primevue.org/theming/#switchthemes
 */
function setTheme(theme) {
    const themeLink =
        document.getElementById("theme-css") || document.createElement("link");

    if (theme == "dark") {
        document.documentElement.classList.add("dark-mode");
    } else {
        document.documentElement.classList.remove("dark-mode");
    }

    var themeName = theme == "light" ? lightTheme : darkTheme;
    themeLink.id = "theme-css";
    themeLink.rel = "stylesheet";
    themeLink.href = `/themes/${themeName}/theme.css`;

    if (!document.getElementById("theme-css")) {
        document.head.appendChild(themeLink);
    }

    saveThemePreference(theme);
}

function saveThemePreference(theme) {
    localStorage.setItem("selectedTheme", theme);
    currentTheme.value = theme;
}

function getSavedThemePreference() {
    return localStorage.getItem("selectedTheme") || 'light';
}

export function useTheme() {
    return { currentTheme, setTheme, getSavedThemePreference };
}
