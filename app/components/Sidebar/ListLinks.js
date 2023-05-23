"use client";
import { useEffect, useRef } from "react";
import ItemLink from "./ItemLink";
import { usePathname } from "next/navigation";

const NavList = [
  { href: "/", icon: "dashboard", label: "Dashboard" },
  { href: "/product", icon: "product", label: "Product" },
  { href: "/payment", icon: "payment", label: "Payment" },
  { href: "/order", icon: "order", label: "Order" },
  { href: "/customer", icon: "customer", label: "Customer" },
  { href: "/analythic", icon: "analythic", label: "Analythic" },
];

export default function ListLinks() {
  const pathname = usePathname();
  const markRef = useRef(null);
  const listRef = useRef(null);
  

  function indexNodeList() {
    let index;
    NavList.map((data, i) => {
      if (pathname === data.href) {
        index = i;
      }
    });
    return index;
  }

  useEffect(() => {
    moveMark()
  })
  
  function moveMark() {
    const markNode = markRef.current;
    const pos = listRef.current.children[indexNodeList()].offsetTop;
    markNode.style.top=(pos-4)+"px"
  }

  return (
    <div className="relative px-8">
      <div
        ref={markRef}
        className="absolute w-1 h-7 left-0 top-[25px] bg-primary rounded transition-all"
      ></div>
      <ul
        ref={listRef}
        className="py-7 space-y-7 border-t border-black-[#C2C2C2]"
      >
        {/* {console.log(listRef)} */}
        {NavList?.map(({ href, icon, label }, i) => (
          <ItemLink key={i} href={href} icon={icon}>
            {label}
          </ItemLink>
        ))}

        <hr />
        <ItemLink href="/settings" icon="settings">
          Settings
        </ItemLink>
        <ItemLink href="/logout" icon="logout">
          {"Log'out"}
        </ItemLink>
      </ul>
    </div>
  );
}
