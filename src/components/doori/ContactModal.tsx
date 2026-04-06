"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { X, Phone, Mail, Send, Printer } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function ContactModal({ open, onClose }: Props) {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const nameRef = useRef<HTMLInputElement>(null);

  /* 열릴 때 포커스 + body 스크롤 잠금 */
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      setTimeout(() => nameRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  /* ESC 키 닫기 */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[두리 홈페이지 문의] ${form.name}`);
    const body = encodeURIComponent(
      `이름: ${form.name}\n연락처: ${form.phone}\n\n${form.message}`
    );
    window.location.href = `mailto:dooriair@hanmail.net?subject=${subject}&body=${body}`;
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">

      {/* ── Backdrop ── */}
      <div
        className="absolute inset-0 bg-black/55 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />

      {/* ── Modal panel ── */}
      <div className="relative bg-white w-full max-w-lg shadow-2xl flex flex-col">

        {/* ── Header bar ── */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="주식회사 두리"
              width={100}
              height={28}
              className="h-7 w-auto object-contain"
            />
            <span className="text-gray-300 text-lg font-thin">|</span>
            <span className="text-sm font-bold text-[#0a1e4a] tracking-wide">
              프로젝트 문의 · 기술 상담
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="닫기"
            className="w-9 h-9 flex items-center justify-center
              text-gray-400 hover:text-gray-700 hover:bg-gray-100
              transition-colors duration-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* ── Body ── */}
        <div className="px-6 py-6 flex flex-col gap-6 overflow-y-auto max-h-[80vh]">

          {/* ── Contact cards ── */}
          <div className="grid grid-cols-3 gap-3">
            <a
              href="tel:031-452-1131"
              className="flex flex-col items-center gap-2 py-4 px-2
                bg-slate-50 border border-slate-100
                hover:border-blue-200 hover:bg-blue-50/50
                transition-colors duration-200 text-center"
            >
              <Phone className="w-5 h-5 text-blue-600" />
              <span className="text-xs font-semibold text-gray-500 tracking-wide">대표 전화</span>
              <span className="text-[15px] font-extrabold text-gray-800 eng leading-tight">031-452-1131</span>
            </a>

            <div
              className="flex flex-col items-center gap-2 py-4 px-2
                bg-slate-50 border border-slate-100 text-center"
            >
              <Printer className="w-5 h-5 text-gray-400" />
              <span className="text-xs font-semibold text-gray-500 tracking-wide">팩스</span>
              <span className="text-[15px] font-extrabold text-gray-400 eng leading-tight">031-452-1132</span>
            </div>

            <a
              href="mailto:dooriair@hanmail.net"
              className="flex flex-col items-center gap-2 py-4 px-2
                bg-slate-50 border border-slate-100
                hover:border-blue-200 hover:bg-blue-50/50
                transition-colors duration-200 text-center"
            >
              <Mail className="w-5 h-5 text-blue-600" />
              <span className="text-xs font-semibold text-gray-500 tracking-wide">이메일</span>
              <span className="text-[13px] font-extrabold text-blue-600 eng break-all leading-snug">
                dooriair@<br />hanmail.net
              </span>
            </a>
          </div>

          {/* ── Divider ── */}
          <div className="flex items-center gap-3">
            <span className="flex-1 h-px bg-gray-100" />
            <span className="text-xs font-semibold text-gray-400 tracking-[0.18em]">이메일 문의</span>
            <span className="flex-1 h-px bg-gray-100" />
          </div>

          {/* ── Form ── */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-700">
                  이름 <span className="text-blue-500">*</span>
                </label>
                <input
                  ref={nameRef}
                  type="text"
                  required
                  placeholder="홍길동"
                  value={form.name}
                  onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                  className="h-12 px-4 border border-gray-200 text-base text-gray-800
                    placeholder:text-gray-300 focus:outline-none focus:border-blue-400
                    focus:ring-1 focus:ring-blue-100 transition"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-700">연락처</label>
                <input
                  type="tel"
                  placeholder="010-0000-0000"
                  value={form.phone}
                  onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                  className="h-12 px-4 border border-gray-200 text-base text-gray-800 eng
                    placeholder:text-gray-300 focus:outline-none focus:border-blue-400
                    focus:ring-1 focus:ring-blue-100 transition"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-700">
                문의 내용 <span className="text-blue-500">*</span>
              </label>
              <textarea
                required
                rows={4}
                placeholder="제품 문의, 기술 상담, 견적 요청 등 자유롭게 작성해 주세요."
                value={form.message}
                onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                className="px-4 py-3 border border-gray-200 text-base text-gray-800
                  placeholder:text-gray-300 resize-none focus:outline-none focus:border-blue-400
                  focus:ring-1 focus:ring-blue-100 transition leading-relaxed"
              />
            </div>

            <p className="text-xs text-gray-400 leading-relaxed -mt-1">
              * 전송 버튼을 누르면 이메일 앱이 열립니다. 발송 후 영업일 기준 1–2일 내 답변 드립니다.
            </p>

            <button
              type="submit"
              className="h-14 flex items-center justify-center gap-3
                bg-[#0a1e4a] hover:bg-blue-800 text-white
                font-bold text-base tracking-wide
                shadow-md hover:shadow-lg transition-all duration-300"
            >
              <Send className="w-5 h-5" />
              이메일로 문의 보내기
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
