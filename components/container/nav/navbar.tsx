import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";
import shoppingcart from "../../../public/img/shoppingcart.svg";
import { Image } from "lucide-react";

interface Props {}
const linkData = [
  { name: "Shop", path: "/shop" },
  { name: "Men", path: "/men" },
  { name: "Women", path: "/women" },
  { name: "Combos", path: "/combos" },
  { name: "Joggers", path: "/joggers" },
];

const Navbar = (props: Props) => {
  return (
    <div className="container ">
      <div className="flex  items-center justify-between">
        <span>Euphoria</span>
        <ul className="flex border-red basis-1/2 justify-between">
          {linkData.map((link) => (
            <li key={link.name}>
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <div>
          <Input />
        </div>
      </div>
      <div className="icons">
        <Button size={"icon"} className="bg-gray-100">
          <Image
            src="/img/heart.svg"
            height={30}
            width={30}
            alt="shopping cart logo"
          />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
