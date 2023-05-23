'use client'
import Image from "next/image";
import ListLinks from "./ListLinks";
import { createContext, useState } from "react";

export const SidebarContext = createContext();
export default function Sidebar() {
  const [isActive, setIsActive] = useState(false);

  function handleMouseOver() {
    setIsActive(true);
  }
  function handleMouseOut() {
    setIsActive(false);
  }
  return (
    <SidebarContext.Provider value={isActive}>
      <aside
        className={`bg-white ${
          isActive ? "w-[256px]" : "w-[86px]"
        } min-h-screen rounded-xl transition-all overflow-hidden`}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <nav>
          <div className="py-5 px-8 flex gap-8">
            <Image
              src="/logo.svg"
              width={15}
              height={21}
              alt="Picture of the author"
              priority
            />
            <p
              className={`font-semibold text-lg text-primary ${
                isActive ? "" : "invisible"
              }`}
            >
              Shop.<span className="text-secondary">View</span>
            </p>
          </div>
          <ListLinks />
        </nav>
      </aside>
    </SidebarContext.Provider>
  );
}
