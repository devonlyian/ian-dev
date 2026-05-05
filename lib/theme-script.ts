export const initialThemeScript = `
(function(){
  function stripInjectedUserSelect(root) {
    if (!root || root.nodeType !== 1) {
      return;
    }

    var nodes = [root];
    if (root.querySelectorAll) {
      var styledNodes = root.querySelectorAll("[style]");
      for (var i = 0; i < styledNodes.length; i += 1) {
        nodes.push(styledNodes[i]);
      }
    }

    for (var j = 0; j < nodes.length; j += 1) {
      var node = nodes[j];
      if (!node.style) {
        continue;
      }

      if (node.style.userSelect === "auto" || node.style.getPropertyValue("user-select") === "auto") {
        node.style.removeProperty("user-select");
      }

      if (node.style.getPropertyValue("-webkit-user-select") === "auto") {
        node.style.removeProperty("-webkit-user-select");
      }

      var styleAttribute = node.getAttribute("style");
      if (styleAttribute !== null && styleAttribute.trim() === "") {
        node.removeAttribute("style");
      }
    }
  }

  stripInjectedUserSelect(document.documentElement);

  if (window.MutationObserver && document.documentElement) {
    var observer = new MutationObserver(function(mutations) {
      for (var i = 0; i < mutations.length; i += 1) {
        var mutation = mutations[i];

        if (mutation.type === "attributes") {
          stripInjectedUserSelect(mutation.target);
          continue;
        }

        for (var j = 0; j < mutation.addedNodes.length; j += 1) {
          stripInjectedUserSelect(mutation.addedNodes[j]);
        }
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["style"],
      childList: true,
      subtree: true
    });

    window.addEventListener("load", function() {
      window.setTimeout(function() {
        observer.disconnect();
      }, 3000);
    }, { once: true });
  }

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
