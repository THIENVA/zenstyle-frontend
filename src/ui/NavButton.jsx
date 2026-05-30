import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function NavButton({ item }) {
  return (
    <NavLink to={item.path}>
      {({ isActive }) => (
        <Button
          variant="secondary"
          className={`font-[var(--font-logo)] text-base tracking-wide px-3 bg-[var(--color-zen-accent)] text-[var(--color-zen-text-light)] ${isActive ? " text-[var(--color-zen-text-light)] " : " hover:text-[var(--color-zen-primary)] hover:bg-[var(--color-zen-button-1)] "}`}
        >
          {item.label}
        </Button>
      )}
    </NavLink>
  );
}
