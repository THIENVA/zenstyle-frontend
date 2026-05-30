export default function LoginButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-4 rounded-[var(--radius-xl)] border border-[var(--color-accent)] text-[var(--color-accent)] font-[var(--font-logo)] text-sm tracking-wide hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] transition-all duration-200 shrink-0"
    >
      Đăng nhập
    </button>
  );
}
