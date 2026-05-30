export default function Footer() {
  return (
    <footer
      className="
      bg-[var(--color-primary)]
      border-t border-[var(--color-primary-light)]
      py-6 text-center
      text-[var(--color-text-muted)] text-sm
      font-[var(--font-sans)]
    "
    >
      © {new Date().getFullYear()} ZenStyle. All rights reserved.
    </footer>
  );
}
