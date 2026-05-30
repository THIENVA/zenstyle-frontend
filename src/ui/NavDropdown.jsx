import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

export default function NavDropdown({ item }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1 font-[var(--font-logo)] text-base tracking-wide transition-colors duration-200 ${open ? "text-[var(--color-accent)]" : "text-[var(--color-text-light)] hover:text-[var(--color-accent)]"}`}
      >
        {item.label}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-3.52 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 91-7 7-7-7"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 min-w-48 py-2 rounded-[var(--radius-md)] bg-[var(--color-surface)] border border-[var(--color-primary-light)] shadow-lg shadow-black/30 z-50">
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-[var(--color-primary-light)]">
            {item.children.map((child) => (
              <NavLink
                key={child.path}
                to={child.path}
                onClick={() => setOpen()}
                className={({ isActive }) =>
                  `block px-4 py-2.5 font-[var(--font-logo)] text-sm tracking-wide transition-colors duration-150 ${
                    isActive
                      ? "text-[var(--color-accent)] bg-[var(--color-primary-light)]"
                      : "text-[var(--color-text-light)] hover:text-[var(--color-accent)] hover:bg-[var(--color-primary-light)]"
                  }`
                }
              >
                {child.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
