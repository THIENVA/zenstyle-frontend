import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function LoginButton() {
  return (
    <Button
      asChild
      variant="secondary"
      className="rounded-none w-32 h-10 border-[var(--color-zen-accent)]
      text-[var(--color-zen-accent)]
      bg-transparent
      hover:bg-[var(--color-zen-accent)]
      hover:text-[var(--color-zen-primary)]
      font-[var(--font-logo)] text-sm tracking-wide"
    >
      <Link to="/dang-nhap">ĐĂNG NHẬP</Link>
    </Button>
  );
}
