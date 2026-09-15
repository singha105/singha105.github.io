"use client";

import { useEffect, useState } from "react";
import { MenuToggleIcon } from "@/components/icons";
import { navLinks, profile } from "@/data/site";

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="glass sticky top-0 z-50">
      <nav aria-label="Primary" className="mx-auto flex h-12 max-w-[1120px] items-center justify-between px-6">
        <a href="#top" onClick={close} className="text-[0.9375rem] font-semibold tracking-[-0.01em] text-ink">
          {profile.name}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[0.8125rem] text-ink/80 transition-colors duration-150 hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-action px-3 py-1 text-[0.8125rem] font-medium text-white transition-[background-color,transform] duration-150 ease-out hover:bg-action-hover active:scale-[0.97]"
            >
              Résumé<span className="sr-only"> (PDF, opens in a new tab)</span>
            </a>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="-mr-2 grid size-10 place-items-center rounded-full text-ink md:hidden"
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <MenuToggleIcon open={open} className="size-[18px]" />
        </button>
      </nav>

      <div
        id="mobile-menu"
        data-open={open}
        className="menu-panel absolute inset-x-0 top-12 bg-canvas shadow-[0_24px_40px_-24px_rgb(0_0_0/0.25)] md:hidden"
      >
        <ul className="mx-auto max-w-[1120px] px-6 pb-8 pt-3">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={close}
                className="block py-2 text-[1.75rem] font-semibold tracking-[-0.02em] text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-5">
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="inline-block rounded-full bg-action px-5 py-2.5 text-[0.9375rem] font-medium text-white active:scale-[0.97]"
            >
              Résumé<span className="sr-only"> (PDF, opens in a new tab)</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
