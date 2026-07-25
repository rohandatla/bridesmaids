import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function InspoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-accent/30 to-white py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-2xl text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 mb-10"
        >
          <ArrowLeft className="w-4 h-4" /> Back to the site
        </Link>

        <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">
          Haldi & Sangeet Inspo
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Just a starting point — wear whatever you like as long as it fits the vibe.
        </p>

        <div className="relative w-full h-[70vh] md:h-[75vh] rounded-2xl overflow-hidden shadow-2xl bg-white">
          <Image
            src="/bridesmaids/inspo.jpg"
            alt="Haldi and Sangeet outfit inspiration"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 700px"
            priority
          />
        </div>
      </div>
    </div>
  );
}
