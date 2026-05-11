import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { useLocation } from "react-router-dom";

const clickableSelector = [
  "article",
  "div[class*='shadow']",
  "div[class*='rounded-[']",
  "img",
].join(",");

const ignoredSelector = [
  "a",
  "button",
  "input",
  "textarea",
  "select",
  "label",
  "iframe",
  "table",
  "thead",
  "tbody",
  "tr",
  "td",
  "th",
  "header",
  "footer",
  "nav",
  "#mobile-navigation",
  ".mobile-overview-backdrop",
].join(",");

function MobileOverview() {
  const [overviewHtml, setOverviewHtml] = useState("");
  const location = useLocation();

  const closeOverview = () => setOverviewHtml("");

  useEffect(() => {
    const timeoutId = window.setTimeout(() => closeOverview(), 0);

    return () => window.clearTimeout(timeoutId);
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle("mobile-overview-open", Boolean(overviewHtml));

    return () => {
      document.body.classList.remove("mobile-overview-open");
    };
  }, [overviewHtml]);

  useEffect(() => {
    const isMobileOverviewDevice = () =>
      window.matchMedia("(max-width: 767px) and (pointer: coarse)").matches;

    const getOverviewTarget = (startNode) => {
      if (!(startNode instanceof Element)) return null;
      if (startNode.closest(ignoredSelector)) return null;

      const target = startNode.closest(clickableSelector);
      if (!target || target.closest("header, footer, nav, #mobile-navigation")) {
        return null;
      }

      const rect = target.getBoundingClientRect();
      if (rect.width < 80 || rect.height < 80) return null;

      return target;
    };

    const openOverview = (event) => {
      if (!isMobileOverviewDevice()) return;

      const target = getOverviewTarget(event.target);
      if (!target) return;

      const clone = target.cloneNode(true);
      clone.classList.add("mobile-overview-clone");
      clone.querySelectorAll("a, button, input, textarea, select, iframe").forEach((node) => {
        node.setAttribute("tabindex", "-1");
      });

      event.preventDefault();
      setOverviewHtml(clone.outerHTML);
    };

    const closeOnEscape = (event) => {
      if (event.key === "Escape") closeOverview();
    };

    document.addEventListener("click", openOverview);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("click", openOverview);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  if (!overviewHtml) return null;

  return (
    <div
      className="mobile-overview-backdrop"
      role="dialog"
      aria-modal="true"
      onClick={closeOverview}
    >
      <div className="mobile-overview-shell" onClick={(event) => event.stopPropagation()}>
        <button
          type="button"
          className="mobile-overview-close"
          aria-label="Close overview"
          onClick={closeOverview}
        >
          <X className="h-5 w-5" />
        </button>

        <div
          className="mobile-overview-panel"
          dangerouslySetInnerHTML={{ __html: overviewHtml }}
        />
      </div>
    </div>
  );
}

export default MobileOverview;
