import React, { useEffect, useState } from "react";
import cn from "../lib/utils"; // assure-toi que ce helper fonctionne comme classnames
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleNav = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={cn(
            "fixed top-0 left-0 w-full z-40 text-white transition duration-300 md:bg-black/95 bg-neutral-800"
        )}>
            <div className="max-w-[1240px] mx-auto h-20 flex justify-between items-center px-4">
                {/* Logo */}
                <p className="text-3xl font-bold">CRISTIANO</p>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-5 font-semibold">
                    <li className="cursor-pointer hover:text-gray-300">Carrière</li>
                    <li className="cursor-pointer hover:text-gray-300">Palmares</li>
                    <li className="cursor-pointer hover:text-gray-300">Statistiques</li>
                    <li className="cursor-pointer hover:text-gray-300">Vie sociale</li>
                </ul>

                {/* Mobile Menu Toggle */}
                <div className="block md:hidden cursor-pointer" onClick={handleNav}>
                    {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
                </div>

                {/* Mobile Menu */}
                <div className={cn(
                    "md:hidden fixed top-0 left-0 h-full w-[60%] backdrop-blur-2xl z-50 p-6 transition-all duration-300",
                    isOpen ? "translate-x-0" : "-translate-x-full"
                )}>
                    <p className="text-3xl font-bold mb-6">CRISTIANO</p>
                    <ul className="space-y-6 font-semibold" onClick={handleNav}>
                        <li className="border-b pb-2 cursor-pointer">Carrière</li>
                        <li className="border-b pb-2 cursor-pointer">Palmares</li>
                        <li className="border-b pb-2 cursor-pointer">Statistiques</li>
                        <li className="border-b pb-2 cursor-pointer">Vie sociale</li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
