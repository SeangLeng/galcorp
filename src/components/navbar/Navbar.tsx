'use client';

import React from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarContent, NavbarItem, Link, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { IoIosArrowDown } from "react-icons/io";

import { Services } from "@/constants/services";
import logo from '@public/assets/images/logo.png';
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { ABOUT, CONTACTUS, HOME, QRCODE, SERVICES } from "@/utils/Routes";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <Navbar
      className="p-3"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Link href="/" className="max-w-32">
            <Image src={logo} alt="logo-galcorp" />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-10 p-3" justify="end">
        <NavbarBrand>
          <Link href="/" className="max-w-48">
            <Image src={logo} alt="logo-galcorp" />
          </Link>
        </NavbarBrand>
        <NavbarItem>
          <Link color={pathname === HOME ? 'primary' : 'foreground'} href={HOME} className="text-lg font-medium">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href={ABOUT} color={pathname === ABOUT ? 'primary' : 'foreground'} className="text-lg font-medium">
            About
          </Link>
        </NavbarItem>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className={`p-0 bg-transparent data-[hover=true]:bg-transparent text-lg font-medium ${pathname === SERVICES ? 'text-primary' : 'text-foreground'}`}
                radius="sm"
                variant="light"
                startContent={<IoIosArrowDown />}
              >
                Services
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[540px] p-4"
            classNames={{
              list: 'grid grid-cols-3 gap-5'
            }}
          >
            {
              Services.map((item) => (
                <DropdownItem
                  href={`#`}
                  key={item.label}
                  className="grid justify-center items-center p-5 hover:ring-1 ring-black hover:bg-transparent"
                >
                  <div className="grid justify-center items-center mb-1">
                    <item.icon size={30} />
                  </div>
                  <p className="text-medium font-normal">{item.label}</p>
                </DropdownItem>
              ))
            }
          </DropdownMenu>
        </Dropdown>
        <NavbarItem >
          <Link
            href={CONTACTUS}
            color={(pathname === CONTACTUS || pathname === QRCODE) ? 'primary' : 'foreground'}
            className="text-lg font-medium"
          >
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="center">
        <NavbarMenuToggle icon={<FaBars />} aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarMenu className="flex flex-col gap-5">
        <NavbarItem className="mt-10">
          <Link color={pathname === HOME ? 'primary' : 'foreground'} href="#" className="text-lg font-medium">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href={ABOUT} color={pathname === ABOUT ? 'primary' : 'foreground'} className="text-lg font-medium">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" color={pathname === SERVICES ? 'primary' : 'foreground'} className="text-lg font-medium">
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href={CONTACTUS} color={(pathname === CONTACTUS || pathname === QRCODE) ? 'primary' : 'foreground'} className="text-lg font-medium">
            Contact
          </Link>
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
}
