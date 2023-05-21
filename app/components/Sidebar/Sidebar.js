import Image from "next/image";
import ListLinks from "./ListLinks";

export default function Sidebar() {
  return (
    <aside className="bg-white px-8 w-[256px] min-h-screen rounded-xl">
      <nav>
        <div className="py-5 flex gap-8">
          <Image
            src="/logo.svg"
            width={15}
            height={21}
            alt="Picture of the author"
            priority
          />
          <p className="font-semibold text-lg text-primary">
            Shop.<span className="text-secondary">View</span>
          </p>
        </div>
        <div>
          <ListLinks/>
        </div>
      </nav>
    </aside>
  );
}
