"use client"
import VoiceSearch from "@/components/VoiceSearch";
import useSearchTest from "@/hooks/useSearchTest";
import useSearchVideo from "@/hooks/useSearchVideo";
import { useEffect, useRef, useState } from "react";
import { FaYoutube } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { MdVideoCameraFront } from "react-icons/md";
import SearchBtn from "./SearchBtn";
import Link from "next/link";
import { IoNotifications } from "react-icons/io5";
import Avatar from "./Avatar";
import Loading from "../Loading";

const Header = () => {
    const [focus, setFocus] = useState(false)
    useSearchVideo()
    const { onSubmit, test, setTest } = useSearchTest()
    return (
        <>
            <Loading />
            <div className="h-[56px] px-6 flex items-center justify-between bg-red-600">
                <div className="flex items-center">
                    <IoMdMenu className="mr-4 test-white w-10" size={25} />
                    <div className="flex items-center">
                        <Link href={"/"}>
                            <FaYoutube className="test-red-800 w-10 h-10 dark:text-red-400 mr-1" />
                        </Link>
                        <h3>YOUTUBE</h3>
                    </div>
                </div>
                <div className="flex items-center h-full">
                    <form className="flex items-center relative h-full" onSubmit={onSubmit}>
                        <div className={` flex border rounded-xl border-r-0 h-[34px] 
                        items-center
                         ${focus ? "border-blue-400" : " border-gray-700"}`}>
                            <label htmlFor="search" className="w-[550px] relative h-full flex items-center">
                                <input type="test" onChange={(e) => setTest(e.target.value)} placeholder="Search" name="search" id="search" className="outline-none border border-transparent w-full
                            bg-transparent pl-3" onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} />
                            </label>
                            <div className="h-full group">
                                <SearchBtn bg={true} />
                                <div className="absolute top-full -translate-x-2 text-nowrap rounded-sm invisible opacity-0 scale-x-0 duration-500 transform transition-all origin-center bg-gray-400 text-[14px] p-1 group-hover:scale-x-100 group-hover:visible group-hover:opacity-100">
                                    <p>notification</p>
                                </div>
                            </div>
                        </div>
                        <div className="group">
                            <VoiceSearch />
                            <div className="absolute top-full -translate-x-10 text-nowrap rounded-sm invisible opacity-0 scale-x-0 duration-500 transform transition-all origin-center bg-gray-400 text-[14px] p-1 group-hover:scale-x-100 group-hover:visible group-hover:opacity-100">
                                <p>Search with your voice</p>
                            </div>
                        </div>

                    </form>
                </div>
                <div className="flex items-center relative gap-4 h-full">
                    <div className="group">
                        <MdVideoCameraFront className="w-10" width={50} size={30} />
                        <div className="absolute top-full -translate-x-2 text-nowrap rounded-sm invisible opacity-0 scale-x-0 duration-500 transform transition-all origin-center bg-gray-400 text-[14px] p-1 group-hover:scale-x-100 group-hover:visible group-hover:opacity-100">
                            <p>Create</p>
                        </div>
                    </div>
                    <div className="group">
                        <IoNotifications className="w-10" width={50} size={30} />
                        <div className="absolute top-full -translate-x-2 text-nowrap rounded-sm invisible opacity-0 scale-x-0 duration-500 transform transition-all origin-center bg-gray-400 text-[14px] p-1 group-hover:scale-x-100 group-hover:visible group-hover:opacity-100">
                            <>notification</>
                        </div>
                    </div>
                    <div>
                        <Avatar />
                    </div>
                </div>
            </div >
        </>
    );
};

export default Header;