import { useDarkMode } from "./store/theme";

export const ThemeProvider = ({ children }) => {
    const { darkMode } = useDarkMode();

    return (
        <div className={darkMode ? "dark" : ""}>
            {children}
        </div>
    );
};
