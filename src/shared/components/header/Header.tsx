"use client"; // to using hooks, must be CSR

import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";

const navLinks = [
    {name: "About", link: "/about"},
    {name: "Product", link: "/products"},
    {name: "Gallery", link: "/galleries"},
    {name: "Contact", link: "/contact"},
]

const HeaderComponent = () => {
    const pathname: string = usePathname();
    console.log("---- " + pathname);

    return (
        <>
            <div className="py-4 px-8 flex justify-between">
                <Link href={"/"} className="text-xl font-head">. Learn Next</Link>
                <div className="flex justify-end items-center gap-4 ">
                    {navLinks.map((nav) => {
                        return (
                            <Link key={nav.link} href={nav.link} className={`${pathname.startsWith(nav.link) ? "w-24" : "w-10 hover:w-16"} h-4 rounded-2xl bg-black animation`}></Link>
                        )
                    })}
                </div>
            </div>
            <div className={"px-8"}>
                <div className="w-full h-[0.5px] bg-gray-300"></div>
            </div>
        </>
    );
};

export default HeaderComponent;