import { NavLink } from "react-router-dom";

export default function NavButton({ item }) {
  return (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        ` font-[var(--font-logo)] text-base tracking-wide transition-colors duration-200 ${isActive ? "text-[var(--color-accent)]" : "text-[var(--color-text-light)] hover:text-[var(--color-accent)]"} `
      }
    >
      {item.label}
    </NavLink>
  );
}
