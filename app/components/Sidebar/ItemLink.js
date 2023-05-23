"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { SidebarContext } from "./Sidebar";

export default function ItemLink({ href, icon, children }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  const sidebarIsActive = useContext(SidebarContext)
  return (
    <li className="h-6">
      <Link
        href={href}
        className={`flex gap-8 font-medium text-base ${
          isActive ? "text-black" : "text-black-100"
        } transition-colors`}
      >
        <svg width="20" height="20">
          <use href={`/icon/${icon}.svg#${icon}`} />
        </svg>
        {/* <Image
          className={isActive ? "grayscale-0" : "grayscale"}
          src={`/icon/${icon}.svg`}
          width={20}
          height={20}
          alt="Icon Dashboard"
          priority
        /> */}
        <p className={`${sidebarIsActive ? "visible" : "invisible scale-0"} transition-all`}>{children}</p>
      </Link>
    </li>
  );
}
