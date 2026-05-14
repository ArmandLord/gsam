'use client'

import { NavbarProps } from "@/types"

const Navbar = ({ navRef, navigation }: NavbarProps) => {
  return (
    <nav
        ref={navRef}
        className="fixed top-15 left-1/2 -translate-x-1/2 z-50 w-[83%] rounded-4xl px-7 py-4 flex items-center justify-between text-white/65"
        style={{
          color: "rgba(255, 255, 255, 0.7)",
          backgroundColor: "transparent",
          boxShadow: "none",
        }}
      >
        <span className="text-2xl">S.&.A</span>
        <ul className="flex items-center justify-around w-1/4">
          {navigation.map((nav) => (
            <li key={nav.href} className="text-xl">
              {nav.label}
            </li>
          ))}
        </ul>
      </nav>
  )
}

export default Navbar