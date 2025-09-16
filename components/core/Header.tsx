"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { PopupButton } from "react-calendly";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ArrowRight, User, Menu } from "lucide-react";

type NavLink = {
  name: string;
  href: string;
};

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Contact Us", href: "/contact-us" },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof document !== "undefined") {
      setRootElement(document.body);
    }
  }, []);

  useEffect(() => {
    if (pathname !== "/") {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const getHeaderClasses = () => {
    return isScrolled
      ? "bg-black/90 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-lg border border-white/10 box-border"
      : "bg-transparent p-4 sm:p-6 box-border";
  };

  return (
    <header className="w-full max-w-full fixed top-0 z-50 transition-all duration-300 ease-in-out px-4 sm:px-6 mt-4 overflow-x-hidden">
      <div
        className={`container mx-auto flex items-center justify-between transition-all duration-300 ease-in-out ${getHeaderClasses()}`}
      >
        {/* Left Section: Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/icons/logoWhite.png"
              alt="Company Logo"
              width={160}
              height={160}
              sizes="(max-width: 640px) 120px, 140px"
              className="rounded-full w-28 sm:w-32 md:w-36 max-w-full"
            />
          </Link>
        </div>

        {/* Center Section: Desktop Navigation */}
        <nav className="hidden md:flex flex-grow items-center justify-center">
          <ul className="flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="font-medium text-white text-sm lg:text-base hover:text-blue-400 transition-colors duration-300 ease-in-out"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Section: Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-3 lg:space-x-4 flex-shrink-0">
          <Link
            href="https://app.twinninglabs.com/"
            className="inline-flex ubuntu items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95"
          >
            <User height={18} width={18} />
            Login
          </Link>
          <Link
            href="https://calendly.com/twinningaiteam/30min"
            target="_blank"
            className="inline-flex font-montserrat items-center gap-2 rounded-full bg-gradient-to-r from-[#a259ff] to-[#6f29ff] border border-purple-400/30 px-3 py-2 text-sm font-semibold text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:scale-105 hover:from-[#b366ff] hover:to-[#7d3dff] active:scale-95"
          >
            Book A Demo
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className={
                  isScrolled
                    ? "bg-white/20 text-white border-white/20"
                    : "bg-black/80 text-white border-black/80"
                }
                aria-label="Open menu"
              >
                <Menu className="h-12 w-12" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-black/95 text-white border-none w-[300px] sm:w-[340px] p-6 sm:p-2"
            >
              <SheetHeader className="hidden">
                <SheetTitle className="text-white text-lg font-semibold">
                </SheetTitle>
                <SheetDescription className="sr-only">
                </SheetDescription>
              </SheetHeader>
              <Link href="/" className="flex items-center">
                <Image
                  src="/icons/logoWhite.png"
                  alt="Company Logo"
                  width={140}
                  height={140}
                  sizes="100px"
                  className="rounded-full w-32 max-w-full"
                />
              </Link>
              <nav className="mt-10 flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-white hover:text-blue-400 transition-colors duration-300 ease-in-out text-base sm:text-lg font-medium"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-6 border-t border-gray-700 flex flex-col space-y-4">
                  <Link
                    href="https://app.twinninglabs.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center px-4 py-2 rounded-lg font-medium bg-white text-black hover:bg-gray-200 transition-colors duration-300 text-sm sm:text-base"
                  >
                    Login
                  </Link>
                  {rootElement && (
                    <PopupButton
                      url="https://calendly.com/twinningaiteam/30min"
                      text="Book A Demo"
                      className="w-full text-center px-4 py-2 rounded-lg font-medium bg-gradient-to-r from-[#a259ff] to-[#6f29ff] text-white hover:from-[#b366ff] hover:to-[#7d3dff] transition-all duration-300 text-sm sm:text-base"
                      rootElement={rootElement}
                    />
                  )}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;