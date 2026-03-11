import Link from "next/link";

import type { NavigationItem } from "@/types";

interface SubnavProps {
  items: NavigationItem[];
  currentHref: string;
}

export default function Subnav({ items, currentHref }: SubnavProps) {
  return (
    <nav className="flex flex-wrap gap-3">
      {items.map((item) => {
        const isActive = item.href === currentHref;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`subnav-link px-4 py-2 text-sm font-medium transition ${
              isActive ? "subnav-link-active" : ""
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
