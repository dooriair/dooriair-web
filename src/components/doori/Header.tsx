"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Wind, Menu, X, ChevronRight } from "lucide-react";

const NAV = [
  { label: "회사소개", href: "/about" },
  { label: "제품소개", href: "/products" },
  { label: "실적",     href: "/projects" },
];

export default function Header() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname                = usePathname();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  /* 페이지 이동 시 모바일 메뉴 닫기 */
  useEffect(() => { setOpen(false); }, [pathname]);

  const isHome = pathname === "/";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? "bg-[#060f2a]/96 backdrop-blur-xl border-b border-sky-900/30 shadow-2xl shadow-blue-950/50"
          : "bg-transparent"
      }`}
    >
      {(scrolled || !isHome) && (
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />
      )}

      <div className="max-w-7xl mx-auto px-6 h-[70px] flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="홈">
          <div className="relative w-9 h-9 flex items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-sky-400/10 ring-1 ring-sky-400/25
              group-hover:scale-110 group-hover:bg-sky-400/20 transition-all duration-500" />
            <span className="absolute inset-0 rounded-full bg-sky-400/5 scale-150
              opacity-0 group-hover:opacity-100 group-hover:scale-[2] transition-all duration-700" />
            <Wind className="w-5 h-5 text-sky-300 relative z-10" strokeWidth={2.5} />
          </div>
          <div className="flex flex-col leading-none">
            <span className="eng text-[9px] text-sky-400/60 tracking-[0.25em] font-semibold uppercase">
              Dooriair Engineering
            </span>
            <span className="text-white font-black text-[17px] eng tracking-tight">
              주식회사 <span className="text-sky-300">두리</span>
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV.map(i => (
            <Link
              key={i.href}
              href={i.href}
              className={`nav-ul text-sm font-medium tracking-wide transition-colors pb-0.5 ${
                pathname === i.href
                  ? "text-sky-300"
                  : "text-blue-100/70 hover:text-white"
              }`}
            >
              {i.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="ml-1 px-5 py-2 border border-sky-400/40 text-sky-200 text-sm font-medium
              hover:bg-sky-400/15 hover:border-sky-300/60 hover:text-sky-100
              transition-all duration-300 tracking-wide"
          >
            문의하기
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setOpen(!open)}
          aria-label="메뉴"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#060f2a]/98 backdrop-blur-xl border-t border-sky-900/30 px-6 py-5 space-y-1">
          {[...NAV, { label: "문의하기", href: "/#contact" }].map(i => (
            <Link
              key={i.href}
              href={i.href}
              className={`flex w-full items-center justify-between text-left py-3 text-sm
                border-b border-blue-900/40 last:border-0 transition-colors ${
                  pathname === i.href
                    ? "text-sky-300"
                    : "text-blue-100/80 hover:text-sky-300"
                }`}
            >
              {i.label}
              <ChevronRight className="w-3.5 h-3.5 text-sky-400/40" />
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
