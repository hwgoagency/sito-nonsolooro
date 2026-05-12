"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-notte-profonda/95 backdrop-blur-sm shadow-md py-2" : "bg-notte-profonda py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo-v3.png" 
            alt="Non Solo Oro" 
            width={120} 
            height={120} 
            className="h-16 w-auto object-contain"
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className={`uppercase tracking-widest text-sm transition-colors ${isActive('/') ? 'text-oro-antico' : 'text-avorio-caldo hover:text-oro-antico'}`}>
            Home
          </Link>
          <Link href="/chi-siamo" className={`uppercase tracking-widest text-sm transition-colors ${isActive('/chi-siamo') ? 'text-oro-antico' : 'text-avorio-caldo hover:text-oro-antico'}`}>
            Chi Siamo
          </Link>
          <Link href="/compro-oro" className={`uppercase tracking-widest text-sm transition-colors ${isActive('/compro-oro') ? 'text-oro-antico' : 'text-avorio-caldo hover:text-oro-antico'}`}>
            Compro Oro
          </Link>
          <Link href="/gioielleria" className={`uppercase tracking-widest text-sm transition-colors ${isActive('/gioielleria') ? 'text-oro-antico' : 'text-avorio-caldo hover:text-oro-antico'}`}>
            Gioielleria
          </Link>
          <Link href="/faq" className={`uppercase tracking-widest text-sm transition-colors ${isActive('/faq') ? 'text-oro-antico' : 'text-avorio-caldo hover:text-oro-antico'}`}>
            FAQ
          </Link>
          <Link href="/contatti" className="btn-secondary text-sm">
            Contatti
          </Link>
        </div>
      </div>
    </nav>
  );
}
