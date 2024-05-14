"use client";

import { cn } from "@/lib/utils";

import { LucideIcon } from "lucide-react";

import { usePathname, useRouter } from "next/navigation";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

export const SidebarItem = ({ icon: Icon, label, href }: SidebarItemProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname?.startsWith(`${href}/`)

  const onClick = () => {
    router.push(href);
  };

  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        "flex items-center gap-x-2 text-amber-500 text-sm font-[500] pl-6 transition-all hover: text-amber-600 hover:bg-amber-300/20",
        isActive && "text-amber-700 bg-amber-200/20 hover:bg-amber-200/20 hover:text-amber-700"
    )}
    >
        <div className="flex items-center gap-x-2 py-4">
            <Icon
            size={22}
            className={cn(
                "text-amber-500",
                isActive && "text-amber-700"
            )}
            />
            {label}
        </div>
    <div
    className={cn(
        "ml-auto opacity-0 border-2 border-amber-700 h-full transition-all",
        isActive && "opacity-100"
    )}
    />
    </button>
  );
};
