"use client"
import { FaFireAlt, FaGrinAlt } from "react-icons/fa";
import { GrGamepad } from "react-icons/gr";
import { IoMdMusicalNote } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineSportsCricket, MdSubscriptions } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import sidebarIconsInfo from "../../utils/sideBarIcon.json";
import Link from "next/link";
import { IconType } from "react-icons";

const icons: Record<string, IconType> = {
    FaFireAlt,
    GrGamepad,
    IoHomeOutline,
    IoMdMusicalNote,
    MdOutlineSportsCricket,
    SiYoutubeshorts,
    MdSubscriptions
};

const Sidebar = () => {
    return (
        <div className="w-[240px] max-h-[calc(100vh-56px)] overflow-hidden hover:overflow-y-auto p-4">
            {sidebarIconsInfo.map((iconsDetails, index) => (
                <div key={index}>
                    {index !== 0 && (
                        <div>
                            <hr className="w-[240px] my-5 bg-gray-500 h-[1.5px] block" />
                        </div>
                    )}
                    {iconsDetails.map((icon, index) => {
                        const IconComponent = icons[icon.icon];
                        return (
                            <Link href="/" key={index} className="mb-6 gap-3 block p-3 duration-200 transition-all rounded hover:bg-gray-400">
                                <div className="flex items-center gap-3">
                                    <IconComponent />
                                    <p>{icon.name}</p>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            ))}
        </div>
    );
};

export default Sidebar;
