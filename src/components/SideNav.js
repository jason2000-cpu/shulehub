"use client";

import { useState } from "react";
import { Nav } from "./ui/nav";

import {
  ShoppingCart,
  LayoutDashboard,
  UsersRound,
  GraduationCap,
  Settings,
  ChevronRight
} from "lucide-react";
import { Button } from "./ui/button";

import { useWindowWidth } from "@react-hook/window-size";

export default function SideNav({}) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div className="relative min-w-[80px] border-r px-3  pb-10 pt-24 bg-[#F4FBFA] ">
      {!mobileWidth && (
        <div className="absolute right-[-20px] top-7">
          <Button
            onClick={toggleSidebar}
            variant="secondary"
            className=" rounded-full p-2 border bg-gray-100"
          >
            <ChevronRight />
          </Button>
        </div>
      )}
      <Nav
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={[
          {
            title: "Dashboard",
            href: "/",
            icon: LayoutDashboard,
          },
          {
            title: "Schools",
            href: "/schools",
            icon: GraduationCap,
          },
          {
            title: "Orders",
            href: "/orders",
            icon: ShoppingCart,
          },
          {
            title: "Settings",
            href: "/settings",
            icon: Settings,
          }
        ]}
      />
    </div>
  );
}
