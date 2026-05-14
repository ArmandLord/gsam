'use client'

import { NavbarProps } from "@/types"

const Navbar = ({ navRef, navigation }: NavbarProps) => {
  // styles for the link number 3, this links has button styles, and the rest of the links have text styles, this is to make the contact link more visible and attractive
  const buttonStyles = (id: number) => {
    if (id === 3) {
      return "nav-button-3 text-xl rounded-2xl";
    }
    return "text-xl";
  }

  return (
    <nav
        ref={navRef}
        className="fixed top-15 left-1/2 -translate-x-1/2 z-50 w-[83%] rounded-4xl px-7 py-2 flex items-center justify-between text-white/65"
        style={{
          color: "rgba(255, 255, 255, 0.7)",
          backgroundColor: "transparent",
          boxShadow: "none",
        }}
      >
        <span className="text-2xl">S&A</span>
        <ul className="flex items-center justify-around w-1/4">
          {navigation.map(({ id, href, label }) => (
            <li key={id} className={buttonStyles(id)}>
              {label}
            </li>
          ))}
        </ul>
      </nav>
  )
}

export default Navbar