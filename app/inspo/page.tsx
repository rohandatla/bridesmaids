import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const EVENTS = [
  { name: "Haldi", src: "/bridesmaids/haldi.jpg" },
  { name: "Carnival", src: "/bridesmaids/carnival.jpg" },
  { name: "Reception", src: "/bridesmaids/reception.jpg" },
];

export default function InspoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-accent/30 to-white py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-3xl text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 mb-10"
        >
          <ArrowLeft className="w-4 h-4" /> Back to the site
        </Link>

        <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">
          Haldi, Carnival & Reception Inspo
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Just a starting point — wear whatever you like as long as it fits the vibe.
        </p>

        <div className="space-y-14">
          {EVENTS.map((event) => (
            <div key={event.name}>
              <h2 className="font-serif text-2xl md:text-3xl text-primary mb-4">{event.name}</h2>
              <div className="relative w-full h-[60vh] md:h-[65vh] rounded-2xl overflow-hidden shadow-2xl bg-white">
                <Image
                  src={event.src}
                  alt={`${event.name} outfit inspiration`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 700px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
