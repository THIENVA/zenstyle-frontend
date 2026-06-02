import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function ServiceCard({ item, moreInfoLink }) {
  return (
    <div className="flex flex-col border-2 border-[var(--color-zen-accent)] overflow-hidden hover:shadow-xl hover:shadow-black/20 transition-all duration-300 group">
      {/* Image */}
      <div className="w-full h-52 overflow-hidden">
        <img
          src={item.image}
          alt={item.image}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col flex-1 p-4 gap-3 bg-white">
        <h3
          className="
                  font-[var(--font-logo)] text-lg font-semibold text-[var(--color-zen-primary)] tracking-wide
            "
        >
          {item.name}
        </h3>
        <p
          className="
            font-[var(--font-sans)] text-sm text-[var(--color-zen-primary)]/70 flex-1 "
        >
          {item.description}
        </p>
        <div className="flex items-center justify-between mt-auto pt-2 border-t border-[var(--color-zen-accent)]/30">
          <span
            className="
        font-[var(--font-logo)] text-base font-semibold text-[var(--color-zen-accent)]
        "
          >
            {item.price.toLocaleString("vi-VN")}đ
          </span>
          <Button
            asChild
            className="rounded-none px-4 h-8 text-xs bg-[var(--color-zen-accent)] text-[var(--local-zen-primary)] hover:bg-[var(--color-zen-accent-hover)] font-[var(--font-logo)] tracking-widest uppercase border-none  "
          >
            <Link to={moreInfoLink}>Xem thêm</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
