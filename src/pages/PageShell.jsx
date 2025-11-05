import React from "react";
import { ArrowDown, ArrowLeft, ArrowRight, Mail } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

// Ordered page route list for arrows to navigate between
const pages = ["/", "/indianfit", "/casual", "/accessories", "/handbags"];

export default function PageShell({
  eyebrow,
  title,
  description,
  img,
  bg = "#f8f9fa",
  light = true,
  ctaLabel = "MORE",
  secondCTA = null,
  emailCTA = null,
}) {
  const navigate = useNavigate();
  const location = useLocation();

  const currentIndex = pages.indexOf(location.pathname);
  const prevPage = pages[(currentIndex - 1 + pages.length) % pages.length];
  const nextPage = pages[(currentIndex + 1) % pages.length];

  return (
    <div className="relative min-h-screen grid md:grid-cols-2 grid-cols-1 overflow-hidden">
      {/* Left Side */}
      <div
        className="flex items-center justify-center px-8 md:px-20 py-16"
        style={{
          backgroundColor: light ? "#f8f9fa" : bg,
        }}
      >
        <div className="max-w-md text-center md:text-left">
          <p className="uppercase tracking-[0.3em] text-[11px] text-gray-500 mb-6">
            {eyebrow}
          </p>
          <h1 className="font-serif text-5xl md:text-6xl tracking-[0.15em] mb-8 text-gray-800">
            {title}
          </h1>
          <p className="text-gray-600 leading-relaxed mb-10">{description}</p>

          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
            {emailCTA ? (
              <button className="flex items-center justify-center gap-3 bg-gray-300/80 backdrop-blur-md text-gray-800 px-8 py-3 rounded-full hover:bg-gray-400/70 transition font-medium tracking-[0.2em]">
                <Mail size={16} /> {emailCTA}
              </button>
            ) : (
              <button className="bg-gray-300/80 backdrop-blur-md text-gray-800 px-8 py-3 rounded-full hover:bg-gray-400/70 transition font-medium tracking-[0.2em]">
                {ctaLabel}
              </button>
            )}

            <button className="bg-white/80 backdrop-blur-md px-8 py-3 rounded-full shadow-sm hover:bg-white/70 flex items-center gap-3 text-gray-700">
              <span className="tracking-[0.3em] text-sm">
                {secondCTA || "COLLECTION"}
              </span>
              <ArrowDown size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="flex items-center justify-center bg-gray-100">
        <div className="w-full h-[90vh] md:h-[100vh] overflow-hidden">
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      {/* Frosted Navigation Arrows */}
      <button
        onClick={() => navigate(prevPage)}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full p-3 hover:bg-white/40 transition duration-300"
        aria-label="Previous Page"
      >
        <ArrowLeft size={30} className="text-gray-700 drop-shadow" />
      </button>

      <button
        onClick={() => navigate(nextPage)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full p-3 hover:bg-white/40 transition duration-300"
        aria-label="Next Page"
      >
        <ArrowRight size={30} className="text-gray-700 drop-shadow" />
      </button>
    </div>
  );
}
