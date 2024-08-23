"use client"
import { FaFireAlt, FaGrinAlt } from "react-icons/fa";
import { GrGamepad } from "react-icons/gr";
import { IoMdMusicalNote } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineSportsCricket, MdSubscriptions } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import sidebarIconsInfo from "../../utils/sideBarIcon.json"
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
}
const Sidebar = () => {
    return (
        <div className=" min-w-[240px] relative overflow-y-scroll">
            {
                sidebarIconsInfo.map((iconsDetails, index) => (
                    <div key={index} className="">
                        {
                            index !== 0 &&
                            <div className="">
                                <hr className=" w-[240px] my-5 bg-gray-500 h-[1.5px] block" />
                            </div>

                        }
                        {
                            iconsDetails.map((icon, index) => {
                                const IconComponent = icons[icon.icon]
                                return (
                                    <Link href={"/"} key={index} className="flex mb-10 gap-3  p-6  items-center">
                                        <IconComponent />
                                        <p>
                                            {icon.name}
                                        </p>

                                    </Link>
                                )
                            })
                        }
                    </div>
                ))
            }
        </div >
    );
};

export default Sidebar;