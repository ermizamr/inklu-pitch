/**
 * The Spine — a fixed chapter rail. The story's table of contents,
 * alive with scroll progress. Desktop only (xl+); keyboard accessible.
 */
import { useEffect, useState } from "react";
import { ACTS } from "../../data/acts";

export default function Spine() {
  const [progress, setProgress] = useState(0);
  const [activeId, setActiveId] = useState(ACTS[0].id);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);

      // Active act: the section whose top has most recently passed 40% viewport.
      let current = ACTS[0].id;
      for (const act of ACTS) {
        const el = document.getElementById(act.id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) {
          current = act.id;
        }
      }
      setActiveId(current);
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <nav className="spine-track" aria-label="Chapter progress">
      <div className="relative flex items-center gap-3">
        <div className="spine-line" aria-hidden="true">
          <div
            className="spine-progress"
            style={{ "--spine-x": `${progress * 100}%` }}
          />
          {ACTS.map((act, i) => (
            <span
              key={act.id}
              className="spine-dot"
              aria-hidden="true"
              style={{ "--dot-y": `${(i / (ACTS.length - 1)) * 100}%` }}
            />
          ))}
        </div>
        <ul className="flex flex-col justify-between h-[34vh] py-0">
          {ACTS.map((act) => (
            <li key={act.id} className="relative">
              <a
                href={act.href}
                aria-current={activeId === act.id ? "true" : undefined}
                className="group flex items-center gap-3 py-1"
              >
                <span
                  className={`annotation text-[10px] transition-all duration-300 ${
                    activeId === act.id
                      ? "text-forest opacity-100"
                      : "text-muted opacity-0 group-hover:opacity-100"
                  }`}
                >
                  {act.numeral} {act.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
