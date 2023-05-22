"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ItemLink({ href, icon, children }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <li>
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
        {children}
      </Link>
    </li>
  );
}
