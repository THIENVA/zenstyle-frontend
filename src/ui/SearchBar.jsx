import { useState } from "react";

export default function SearchBar() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      console.log("search:", value);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex items-center overflow-hidden border border-[var(--color-primary-light)] rounded-[var(--radius-xl)] transition-all duration-300 ${open ? "w-48 px-3" : "w-9 px-0 justify-center"} h-9 bg-[var(--over-surface)]`}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors shrink-0"
        aria-label="Tìm kiếm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
          />
        </svg>
      </button>

      {open && (
        <input
          autoFocus
          value={value}
          onChange={() => setValue(e.target.value)}
          placeholder="Tìm kiếm..."
          type="text"
          className="ml-2 flex-1 btg-transparent outline-none text-sm text-[var(--color-text-light)] placeholder:text-[var(--color-text-muted)] font-[var(--font-sans)]"
        />
      )}
    </form>
  );
}
