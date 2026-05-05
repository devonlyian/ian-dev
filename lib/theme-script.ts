export const initialThemeScript = `
(function(){
  try {
    var storedTheme = localStorage.getItem("theme");
    var hasStoredTheme = storedTheme === "dark" || storedTheme === "light";
    var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    var theme = hasStoredTheme ? storedTheme : (prefersDark ? "dark" : "light");

    document.documentElement.classList.toggle("dark", theme === "dark");
  } catch (e) {
    document.documentElement.classList.remove("dark");
  }
})();
`;
