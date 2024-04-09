"use client"

import { useState } from "react";
import Navbar from "../(home-sections)/Navbar";
import Sidebar from "./Sidebar";

export default function NavigationWrapper() {
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);

  const closeSidebar = () => setIsSideBarOpen(false);
  const openSidebar = () => setIsSideBarOpen(true);

  return (
    <>
      <Navbar isSideBarOpen={isSideBarOpen} onOpenSidebar={openSidebar} />
      <Sidebar isSideBarOpen={isSideBarOpen} onCloseSidebar={closeSidebar} />
    </>
  )
}
