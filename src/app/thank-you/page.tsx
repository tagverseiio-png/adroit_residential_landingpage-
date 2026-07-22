"use client";

import React from "react";
import Link from "next/link";

export default function ThankYou() {
  return (
    <div className="bg-[#111111] text-on-surface min-h-screen flex flex-col overflow-hidden relative selection:bg-primary selection:text-black">
      {/* Background Watermark Grid */}
      <div
        className="absolute inset-0 pointer-events-none z-0 flex flex-col justify-between overflow-hidden opacity-[0.04] text-on-surface select-none font-display-lg font-bold"
        style={{ fontSize: "18vw", lineHeight: "0.8", whiteSpace: "nowrap" }}
      >
        <div>THANK YOU THANK YOU THANK YOU</div>
        <div>SUCCESS SUCCESS SUCCESS SUCCESS</div>
        <div>THANK YOU THANK YOU THANK YOU</div>
        <div>SUCCESS SUCCESS SUCCESS SUCCESS</div>
        <div>THANK YOU THANK YOU THANK YOU</div>
      </div>

      {/* Main Content Area */}
      <main className="flex-grow relative z-10 flex items-center">
        <div className="max-w-[1440px] mx-auto w-full px-6 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="flex flex-col justify-center lg:col-span-6">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-primary"></div>
              <span className="font-label-caps text-primary text-[10px] font-bold tracking-[0.2em] uppercase">
                PROJECT TRANSMISSION RECEIVED
              </span>
            </div>

            <h1 className="font-display-lg text-5xl md:text-7xl font-bold leading-[1.05] mb-6 text-white">
              We're <br /> building the <br /> future <br /> with you.
            </h1>

            <p className="font-body-lg text-on-surface-variant text-[15px] max-w-[480px] leading-relaxed mb-10">
              Your request has been received. Our team will contact you within 24 hours to discuss your project.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <Link href="/" className="bg-[#cda763] text-[#111] border border-[#cda763] px-8 py-4 font-label-caps text-[13px] font-bold tracking-[0.1em] uppercase hover:bg-[#bf944b] hover:border-[#bf944b] transition-all">
                BACK TO HOME
              </Link>
              <Link href="/#projects" className="border border-[#555] text-white px-8 py-4 font-label-caps text-[13px] font-bold tracking-[0.1em] uppercase hover:bg-[#222] transition-all">
                VIEW OUR PROJECTS
              </Link>
            </div>
          </div>

          {/* Right Column: Floating Stat Cards */}
          <div className="relative h-auto lg:h-[600px] flex flex-col gap-6 lg:block lg:col-span-6 mt-8 lg:mt-0">
            {/* Card 1: Top Right */}
            <div className="relative lg:absolute lg:top-12 lg:right-12 bg-[#131313] border border-[#353534] p-8 lg:p-10 min-w-[240px] shadow-2xl z-10 hover:border-primary/50 transition-colors cursor-default">
              <div className="font-display-lg text-4xl lg:text-5xl font-bold text-primary mb-3">24h</div>
              <div className="font-label-caps text-[11px] tracking-[0.2em] uppercase text-on-surface-variant font-bold">RESPONSE TIME</div>
            </div>
            
            {/* Card 2: Middle Left (overlapping) */}
            <div className="relative lg:absolute lg:top-[220px] lg:left-0 bg-[#131313] border border-[#353534] p-8 lg:p-10 min-w-[240px] shadow-2xl z-20 hover:border-primary/50 transition-colors cursor-default">
              <div className="font-display-lg text-4xl lg:text-5xl font-bold text-primary mb-3">250+</div>
              <div className="font-label-caps text-[11px] tracking-[0.2em] uppercase text-on-surface-variant font-bold">GLOBAL CLIENTS</div>
            </div>
            
            {/* Card 3: Bottom Right (overlapping) */}
            <div className="relative lg:absolute lg:bottom-12 lg:right-24 bg-[#131313] border border-[#353534] p-8 lg:p-10 min-w-[240px] shadow-2xl z-30 hover:border-primary/50 transition-colors cursor-default">
              <div className="font-display-lg text-4xl lg:text-5xl font-bold text-primary mb-3">12y</div>
              <div className="font-label-caps text-[11px] tracking-[0.2em] uppercase text-on-surface-variant font-bold">DESIGN MASTERY</div>
            </div>
          </div>
        </div>
      </main>

      {/* Vertical Side Text */}
      <div className="hidden xl:flex fixed right-8 top-0 bottom-0 items-center justify-center pointer-events-none z-20">
        <div
          className="font-label-caps text-[#4a4a4a] text-[10px] tracking-[0.4em] font-bold uppercase whitespace-nowrap"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          ESTABLISHED MMXXIV &nbsp;—&nbsp; ADROIT DIGITAL CORE
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#353534] bg-[#111111]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-label-caps text-[11px] font-bold tracking-[0.1em] text-on-surface-variant uppercase">
            © 2024 ADROIT DESIGN. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-8">
            <Link
              href="/"
              className="font-label-caps text-[11px] font-bold tracking-[0.1em] text-white hover:text-primary transition-colors uppercase"
            >
              Privacy Policy
            </Link>
            <Link
              href="/"
              className="font-label-caps text-[11px] font-bold tracking-[0.1em] text-white hover:text-primary transition-colors uppercase"
            >
              Terms of Service
            </Link>
            <Link
              href="/"
              className="font-label-caps text-[11px] font-bold tracking-[0.1em] text-white hover:text-primary transition-colors uppercase"
            >
              Cookies
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
