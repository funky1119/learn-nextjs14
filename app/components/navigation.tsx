"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import steyls from "../../styles/navigation.module.css";

export default function Navigation() {
  const path = usePathname();
  return (
    <nav className={steyls.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
          {path === "/" && "👈"}
        </li>
        <li>
          <Link href="/about-us">AboutUs</Link>
          {path === "/about-us" && "👈"}
        </li>
      </ul>
    </nav>
  );
}
