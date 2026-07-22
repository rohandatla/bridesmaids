"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { BRIDESMAID_DATA } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

interface ButterflyIntroProps {
  onOpened: (name: string) => void;
}

interface ButterflyConfig {
  top: string;
  left: string;
  size: number;
  color: string;
  rotate: number;
  flyX: number;
  flyY: number;
  flyRotate: number;
  delay: number;
  flutterDuration: number;
}

interface PetalConfig {
  top: string;
  left: string;
  size: number;
  color: string;
  rotate: number;
  blowX: number;
  blowY: number;
  blowRotate: number;
  delay: number;
  swayDuration: number;
}

const BUTTERFLIES: ButterflyConfig[] = [
  { top: "-5%", left: "-8%", size: 130, color: "#f9a8d4", rotate: -15, flyX: -320, flyY: -220, flyRotate: -60, delay: 0, flutterDuration: 2.2 },
  { top: "-2%", left: "22%", size: 145, color: "#c4b5fd", rotate: 10, flyX: -100, flyY: -300, flyRotate: 40, delay: 0.05, flutterDuration: 2.6 },
  { top: "-8%", left: "48%", size: 135, color: "#fda4af", rotate: -8, flyX: 110, flyY: -280, flyRotate: -30, delay: 0.1, flutterDuration: 2.1 },
  { top: "-4%", left: "74%", size: 150, color: "#a5b4fc", rotate: 20, flyX: 340, flyY: -200, flyRotate: 70, delay: 0.15, flutterDuration: 2.8 },
  { top: "14%", left: "-10%", size: 140, color: "#f0abfc", rotate: 5, flyX: -360, flyY: -60, flyRotate: -50, delay: 0.08, flutterDuration: 2.4 },
  { top: "18%", left: "30%", size: 120, color: "#fbcfe8", rotate: -20, flyX: -40, flyY: -340, flyRotate: 20, delay: 0.2, flutterDuration: 2.0 },
  { top: "12%", left: "60%", size: 155, color: "#c4b5fd", rotate: 15, flyX: 320, flyY: -100, flyRotate: 55, delay: 0.12, flutterDuration: 2.5 },
  { top: "32%", left: "8%", size: 135, color: "#fda4af", rotate: -10, flyX: -340, flyY: 50, flyRotate: -40, delay: 0.18, flutterDuration: 2.3 },
  { top: "34%", left: "40%", size: 125, color: "#a5b4fc", rotate: 8, flyX: 70, flyY: 360, flyRotate: -25, delay: 0.25, flutterDuration: 2.7 },
  { top: "36%", left: "78%", size: 145, color: "#f9a8d4", rotate: -5, flyX: 360, flyY: 70, flyRotate: 65, delay: 0.22, flutterDuration: 2.2 },
  { top: "54%", left: "-8%", size: 130, color: "#f0abfc", rotate: 18, flyX: -320, flyY: 220, flyRotate: -55, delay: 0.3, flutterDuration: 2.6 },
  { top: "56%", left: "24%", size: 140, color: "#fbcfe8", rotate: -12, flyX: -70, flyY: 340, flyRotate: 35, delay: 0.28, flutterDuration: 2.1 },
  { top: "52%", left: "56%", size: 120, color: "#c4b5fd", rotate: 6, flyX: 220, flyY: 300, flyRotate: -35, delay: 0.32, flutterDuration: 2.4 },
  { top: "72%", left: "5%", size: 135, color: "#fda4af", rotate: -18, flyX: -300, flyY: 260, flyRotate: -60, delay: 0.4, flutterDuration: 2.8 },
  { top: "74%", left: "38%", size: 150, color: "#a5b4fc", rotate: 10, flyX: 30, flyY: 380, flyRotate: 45, delay: 0.38, flutterDuration: 2.3 },
  { top: "70%", left: "68%", size: 130, color: "#f9a8d4", rotate: -6, flyX: 320, flyY: 240, flyRotate: -50, delay: 0.42, flutterDuration: 2.5 },
];

const PETALS: PetalConfig[] = [
  { top: "-4%", left: "5%", size: 40, color: "#fecdd3", rotate: 10, blowX: -220, blowY: -140, blowRotate: 380, delay: 0.02, swayDuration: 3.2 },
  { top: "-6%", left: "18%", size: 34, color: "#fbcfe8", rotate: -20, blowX: -80, blowY: -220, blowRotate: -420, delay: 0.06, swayDuration: 3.6 },
  { top: "-2%", left: "32%", size: 46, color: "#f5d0fe", rotate: 30, blowX: 60, blowY: -240, blowRotate: 460, delay: 0.1, swayDuration: 2.9 },
  { top: "-5%", left: "45%", size: 30, color: "#fda4af", rotate: -10, blowX: -30, blowY: -260, blowRotate: -340, delay: 0.14, swayDuration: 3.4 },
  { top: "-3%", left: "58%", size: 42, color: "#f0abfc", rotate: 15, blowX: 150, blowY: -220, blowRotate: 400, delay: 0.04, swayDuration: 3.1 },
  { top: "-7%", left: "70%", size: 36, color: "#fecdd3", rotate: -25, blowX: 220, blowY: -180, blowRotate: -460, delay: 0.18, swayDuration: 3.7 },
  { top: "-3%", left: "84%", size: 44, color: "#fbcfe8", rotate: 8, blowX: 280, blowY: -120, blowRotate: 380, delay: 0.08, swayDuration: 3.0 },
  { top: "10%", left: "-6%", size: 38, color: "#f5d0fe", rotate: -15, blowX: -280, blowY: -20, blowRotate: -400, delay: 0.12, swayDuration: 3.3 },
  { top: "16%", left: "12%", size: 32, color: "#fda4af", rotate: 20, blowX: -180, blowY: -60, blowRotate: 340, delay: 0.16, swayDuration: 2.8 },
  { top: "20%", left: "26%", size: 46, color: "#f0abfc", rotate: -8, blowX: -100, blowY: -140, blowRotate: -440, delay: 0.2, swayDuration: 3.5 },
  { top: "14%", left: "40%", size: 30, color: "#fecdd3", rotate: 12, blowX: 10, blowY: -180, blowRotate: 400, delay: 0.05, swayDuration: 3.2 },
  { top: "22%", left: "54%", size: 40, color: "#fbcfe8", rotate: -18, blowX: 120, blowY: -160, blowRotate: -380, delay: 0.22, swayDuration: 2.9 },
  { top: "18%", left: "68%", size: 34, color: "#f5d0fe", rotate: 22, blowX: 200, blowY: -100, blowRotate: 420, delay: 0.1, swayDuration: 3.6 },
  { top: "12%", left: "82%", size: 44, color: "#fda4af", rotate: -12, blowX: 300, blowY: -60, blowRotate: -360, delay: 0.26, swayDuration: 3.1 },
  { top: "16%", left: "96%", size: 36, color: "#f0abfc", rotate: 16, blowX: 340, blowY: 0, blowRotate: 400, delay: 0.14, swayDuration: 3.4 },
  { top: "38%", left: "-4%", size: 42, color: "#fecdd3", rotate: -10, blowX: -320, blowY: 60, blowRotate: -420, delay: 0.24, swayDuration: 2.8 },
  { top: "44%", left: "16%", size: 30, color: "#fbcfe8", rotate: 14, blowX: -220, blowY: 120, blowRotate: 380, delay: 0.28, swayDuration: 3.3 },
  { top: "48%", left: "30%", size: 46, color: "#f5d0fe", rotate: -22, blowX: -80, blowY: 200, blowRotate: -440, delay: 0.06, swayDuration: 3.0 },
  { top: "42%", left: "46%", size: 34, color: "#fda4af", rotate: 6, blowX: 30, blowY: 260, blowRotate: 360, delay: 0.3, swayDuration: 3.5 },
  { top: "46%", left: "62%", size: 40, color: "#f0abfc", rotate: -16, blowX: 140, blowY: 200, blowRotate: -400, delay: 0.16, swayDuration: 2.9 },
  { top: "40%", left: "78%", size: 32, color: "#fecdd3", rotate: 18, blowX: 260, blowY: 140, blowRotate: 420, delay: 0.34, swayDuration: 3.6 },
  { top: "44%", left: "92%", size: 44, color: "#fbcfe8", rotate: -8, blowX: 320, blowY: 80, blowRotate: -380, delay: 0.2, swayDuration: 3.2 },
  { top: "64%", left: "6%", size: 36, color: "#f5d0fe", rotate: 24, blowX: -260, blowY: 220, blowRotate: 440, delay: 0.32, swayDuration: 2.8 },
  { top: "68%", left: "22%", size: 44, color: "#fda4af", rotate: -14, blowX: -140, blowY: 300, blowRotate: -360, delay: 0.36, swayDuration: 3.4 },
  { top: "72%", left: "38%", size: 30, color: "#f0abfc", rotate: 10, blowX: -20, blowY: 340, blowRotate: 400, delay: 0.4, swayDuration: 3.1 },
  { top: "66%", left: "52%", size: 42, color: "#fecdd3", rotate: -20, blowX: 90, blowY: 300, blowRotate: -420, delay: 0.18, swayDuration: 3.7 },
];

function Butterfly({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-sm">
      <path
        d="M32 14 C 30 8, 26 6, 24 4"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M32 14 C 34 8, 38 6, 40 4"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path d="M32 30 C 18 6, 2 10, 4 26 C 6 40, 20 38, 32 30 Z" fill={color} />
      <path d="M32 30 C 46 6, 62 10, 60 26 C 58 40, 44 38, 32 30 Z" fill={color} />
      <path d="M32 32 C 22 44, 10 50, 12 38 C 14 30, 24 30, 32 32 Z" fill={color} opacity="0.85" />
      <path d="M32 32 C 42 44, 54 50, 52 38 C 50 30, 40 30, 32 32 Z" fill={color} opacity="0.85" />
      <ellipse cx="32" cy="30" rx="1.8" ry="14" fill="#44403c" />
    </svg>
  );
}

function Petal({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 40 50" className="w-full h-full drop-shadow-sm">
      <path d="M20 2 C 34 14, 34 34, 20 48 C 6 34, 6 14, 20 2 Z" fill={color} />
      <path d="M20 6 L 20 44" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
    </svg>
  );
}

export function ButterflyIntro({ onOpened }: ButterflyIntroProps) {
  const [name, setName] = useState("");
  const [revealed, setRevealed] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    setRevealed(true);
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-rose-100 via-pink-200 to-purple-200 px-4 py-16">
      <div className="relative w-full max-w-lg">
        {/* Letter, sitting underneath the petals and butterflies */}
        <div className="relative z-0 bg-white rounded-2xl shadow-2xl p-8 md:p-12 w-full text-center">
          <p className="font-serif text-xl md:text-2xl text-gray-800 mb-4">
            Dear {name.trim() || "____"},
          </p>
          {BRIDESMAID_DATA.message.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-gray-600 leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}
          <p className="font-serif text-2xl text-primary mb-4">
            — {BRIDESMAID_DATA.bride}
          </p>
          <motion.button
            animate={{ opacity: revealed ? 1 : 0, y: revealed ? 0 : 10 }}
            transition={{ duration: 0.6, delay: revealed ? 1.5 : 0 }}
            style={{ pointerEvents: revealed ? "auto" : "none" }}
            onClick={() => onOpened(name.trim())}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-colors"
          >
            Continue <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Flower petals covering the letter */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          {PETALS.map((p, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{ top: p.top, left: p.left, width: p.size, height: p.size }}
              animate={
                revealed
                  ? { x: p.blowX, y: p.blowY, rotate: p.blowRotate, opacity: 0 }
                  : { rotate: [p.rotate, p.rotate + 12, p.rotate - 12, p.rotate], y: [0, 4, -3, 0] }
              }
              transition={
                revealed
                  ? { duration: 1.4, delay: p.delay, ease: "easeOut" }
                  : { duration: p.swayDuration, repeat: Infinity, ease: "easeInOut", delay: p.delay }
              }
            >
              <Petal color={p.color} />
            </motion.div>
          ))}
        </div>

        {/* Butterfly swarm covering the letter */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          {BUTTERFLIES.map((b, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{ top: b.top, left: b.left, width: b.size, height: b.size }}
              animate={
                revealed
                  ? { x: b.flyX, y: b.flyY, rotate: b.flyRotate, opacity: 0, scale: 0.5 }
                  : { y: [0, -6, 0], rotate: [b.rotate, b.rotate + 6, b.rotate] }
              }
              transition={
                revealed
                  ? { duration: 1.1, delay: b.delay, ease: "easeIn" }
                  : { duration: b.flutterDuration, repeat: Infinity, ease: "easeInOut", delay: b.delay }
              }
            >
              <Butterfly color={b.color} />
            </motion.div>
          ))}
        </div>

        {/* Name form, floating above the petals and butterflies */}
        {!revealed && (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute inset-0 z-30 flex items-center justify-center"
          >
            <div className="bg-white rounded-2xl shadow-[0_25px_60px_rgba(30,58,138,0.45)] border-2 border-secondary p-6 md:p-8 text-center w-full max-w-xs mx-4">
              <p className="font-serif text-xl md:text-2xl text-primary mb-4">
                What&apos;s your first name?
              </p>
              <input
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="First name"
                maxLength={30}
                className="w-full px-4 py-3 rounded-full border border-gray-300 text-center focus:outline-none focus:ring-2 focus:ring-secondary mb-4"
              />
              <button
                type="submit"
                disabled={!name.trim()}
                className="px-6 py-3 bg-secondary text-primary font-semibold rounded-full hover:bg-secondary/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Reveal My Letter
              </button>
            </div>
          </motion.form>
        )}
      </div>
    </div>
  );
}
