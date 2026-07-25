"use client";

import { FadeInWhenVisible } from "@/components/animations/FadeInWhenVisible";
import { BRIDESMAID_DATA } from "@/lib/constants";
import { Users } from "lucide-react";
import Image from "next/image";

export function RosterSection() {
  return (
    <section id="roster" className="py-20 md:py-32 bg-gradient-to-b from-white to-accent/20">
      <div className="container mx-auto px-4 max-w-5xl">
        <FadeInWhenVisible>
          <div className="text-center mb-16">
            <Users className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4">
              The Roster
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The girls standing with {BRIDESMAID_DATA.bride}
            </p>
          </div>
        </FadeInWhenVisible>

        {BRIDESMAID_DATA.roster.length === 0 ? (
          <p className="text-center text-gray-500 italic">Bridal party list coming soon.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BRIDESMAID_DATA.roster.map((member, index) => (
              <FadeInWhenVisible key={`${member.name}-${index}`} delay={index * 0.05}>
                <div
                  className={`rounded-2xl p-6 md:p-8 shadow-lg h-full ${
                    member.role === "Maid of Honor" ? "bg-primary text-white" : "bg-white text-gray-900"
                  }`}
                >
                  <div className="flex items-center gap-5 mb-4">
                    {member.photo ? (
                      <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden shrink-0 ring-4 ring-secondary">
                        <Image
                          src={member.photo}
                          alt={member.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 96px, 112px"
                          style={{
                            objectPosition: member.photoPosition ?? "center",
                            transform: member.photoZoom ? `scale(${member.photoZoom})` : undefined,
                          }}
                        />
                      </div>
                    ) : (
                      <div
                        className={`w-24 h-24 md:w-28 md:h-28 rounded-full shrink-0 flex items-center justify-center font-serif text-3xl ring-4 ring-secondary ${
                          member.role === "Maid of Honor" ? "bg-white/20 text-white" : "bg-accent text-primary"
                        }`}
                      >
                        {member.name[0]}
                      </div>
                    )}
                    <div>
                      <p className="font-serif text-2xl leading-tight">{member.name}</p>
                      <p className="text-xs uppercase tracking-widest font-semibold text-secondary">
                        {member.role}
                      </p>
                    </div>
                  </div>
                  <p
                    className={`leading-relaxed ${
                      member.role === "Maid of Honor" ? "text-white/85" : "text-gray-600"
                    }`}
                  >
                    {member.intro}
                  </p>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
