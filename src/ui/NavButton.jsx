import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function NavButton({ item }) {
  return (
    <NavLink to={item.path}>
      {({ isActive }) => (
        <Button
          variant="secondary"
          className={`rounded-none w-32 h-10 border-r font-[var(--font-logo)] text-base tracking-wide px-3 border-[var(--color-zen-primary)]  text-[var(--color-zen-text-light)] bg-[var(--color-zen-accent)] ${isActive ? " text-[var(--color-zen-text-light)] " : " hover:text-[var(--color-zen-primary)] hover:bg-[var(--color-zen-accent)] "}`}
        >
          {item.label}
        </Button>
      )}
    </NavLink>
  );
}
