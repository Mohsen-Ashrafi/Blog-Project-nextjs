"use client";

import { useAuth } from "@/context/AuthContext";
import {
  ArrowLeftStartOnRectangleIcon,
  HomeIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import SideBarNavs from "./SideBarNavs";
import ButtonIcon from "@/ui/ButtonIcon";
import toast from "react-hot-toast";

interface SideBarProps {
  onClose?: () => void;
}

function SideBar({ onClose }: SideBarProps) {
  const { logout } = useAuth();

  const logoutHandler = async () => {
    await logout();
    toast.success("Logout was successful");
  };

  return (
    <div className="overflow-y-auto flex flex-col p-5 h-screen pt-10 lg:pt-8">
      {/* Drawer header */}
      <div className="flex items-center justify-between w-full mb-5 pb-2 border-b border-b-secondary-200">
        <Link
          href="/"
          className="flex items-center gap-x-4 justify-center text-secondary-700 ml-4"
        >
          <HomeIcon className="w-6 h-6" />
          <span>Next Blog</span>
        </Link>

        <ButtonIcon
          onClick={onClose}
          className="block lg:hidden border-none"
          variant="outline"
        >
          <XMarkIcon />
        </ButtonIcon>
      </div>
      {/* Drawer content */}
      <div className="overflow-y-auto flex-auto">
        <SideBarNavs />
        <div
          onClick={logoutHandler}
          className="flex items-center gap-x-2 rounded-2xl font-medium transition-all duration-200 text-secondary-700 py-3 px-4 hover:text-red-400 cursor-pointer"
        >
          <ArrowLeftStartOnRectangleIcon className="h-5 w-5" />
          <span>Exit</span>
        </div>
      </div>
    </div>
  );
}
export default SideBar;
