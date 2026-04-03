"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight } from "lucide-react";

const NAV = [
  { label: "회사소개", href: "/about" },
  { label: "제품소개", href: "/products" },
  { label: "실적",     href: "/projects" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname        = usePathname();

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white border-b border-gray-200 shadow-sm">

      <div className="max-w-7xl mx-auto px-6 h-[68px] flex items-center justify-between">

        {/* ── Logo (컬러 원본) ── */}
        <Link href="/" aria-label="주식회사 두리 홈" className="group flex-shrink-0">
          <Image
            src="/images/logo.png"
            alt="주식회사 두리 로고"
            width={160}
            height={44}
            priority
            className="h-9 w-auto object-contain
              group-hover:opacity-75 transition-opacity duration-300
              sm:h-10"
          />
        </Link>

        {/* ── Desktop nav ── */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV.map(i => (
            <Link
              key={i.href}
              href={i.href}
              className={`text-sm font-medium tracking-wide transition-colors pb-0.5
                border-b-2 ${
                  pathname === i.href
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-400"
                }`}
            >
              {i.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="ml-1 px-5 py-2 bg-[#0a1e4a] hover:bg-blue-800
              text-white text-sm font-medium tracking-wide
              transition-all duration-300"
          >
            문의하기
          </Link>
        </nav>

        {/* ── Mobile toggle ── */}
        <button
          className="md:hidden text-gray-700 p-1 flex-shrink-0"
          onClick={() => setOpen(!open)}
          aria-label="메뉴"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* ── Mobile menu ── */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-1 shadow-lg">
          {[...NAV, { label: "문의하기", href: "/#contact" }].map(i => (
            <Link
              key={i.href}
              href={i.href}
              className={`flex w-full items-center justify-between text-left py-3 text-sm font-medium
                border-b border-gray-100 last:border-0 transition-colors ${
                  pathname === i.href
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
            >
              {i.label}
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
