"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail } from "lucide-react";

export default function AccueilPage() {
  const router = useRouter();
  const [sortie, setSortie] = useState(false);

  const ouvrir = () => {
    setSortie(true);
    setTimeout(() => router.push("/album"), 600);
  };

  return (
    <main
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "30px 20px",
        opacity: sortie ? 0 : 1,
        transform: sortie ? "translateY(-20px)" : "translateY(0)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
        boxSizing: "border-box",
      }}
    >
      {/* Cadre photo avec animation d'apparition */}
      <div
        style={{
          backgroundColor: "#FFFFFF",
          padding: "16px 16px 40px 16px",
          boxShadow: "4px 6px 15px rgba(0,0,0,0.1)",
          transform: "rotate(-2deg)", 
          marginBottom: "40px",
          position: "relative",
          border: "1px solid #E0D4C3",
          animation: "apparaitre 1s ease-out forwards",
        }}
      >
        {/* Petit bout de scotch */}
        <div
          style={{
            position: "absolute",
            top: "-10px",
            left: "50%",
            transform: "translateX(-50%) rotate(3deg)",
            width: "80px",
            height: "25px",
            backgroundColor: "rgba(220, 200, 170, 0.6)",
            border: "1px solid rgba(200, 180, 150, 0.3)",
            zIndex: 10,
          }}
        />

        <h1
          style={{
            fontFamily: "var(--font-caveat), cursive",
            fontSize: "clamp(2.5rem, 9vw, 3.5rem)",
            fontWeight: 700,
            color: "#2C3E50",
            margin: 0,
            textAlign: "center",
            lineHeight: 1.1,
          }}
        >
          Syntyche
        </h1>
        
        <p
          style={{
            fontFamily: "var(--font-special), monospace",
            fontSize: "0.85rem",
            color: "#7F8C8D",
            margin: "10px 0 0 0",
            textAlign: "center",
            letterSpacing: "1px",
          }}
        >
          The Story : 31.10
        </p>
      </div>

      {/* Texte manuscrit avec animation d'écriture */}
      <p
        style={{
          fontFamily: "var(--font-caveat), cursive",
          fontSize: "1.6rem",
          color: "#C0392B",
          marginBottom: "24px",
          textAlign: "center",
          transform: "rotate(1deg)",
          animation: "ecrire 1.5s ease-out 0.5s forwards",
          opacity: 0,
        }}
      >
        Il y a quelque chose à découvrir...
      </p>

      {/* Bouton style tampon avec effet de "pulsation" */}
      <button
        onClick={ouvrir}
        style={{
          backgroundColor: "#C0392B",
          color: "#FFFFFF",
          border: "2px solid #C0392B",
          padding: "16px 48px",
          fontSize: "1.1rem",
          fontFamily: "var(--font-special), monospace",
          fontWeight: "bold",
          letterSpacing: "2px",
          textTransform: "uppercase",
          cursor: "pointer",
          boxShadow: "4px 4px 0px rgba(192, 57, 43, 0.4)",
          transition: "all 0.2s ease",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          transform: "rotate(-1deg)",
          animation: "pulse 2s infinite, apparaitre 1s ease-out 1s forwards",
          opacity: 0,
        }}
      >
        Ouvrir la lettre
        <Mail size={18} strokeWidth={2} />
      </button>

      {/* Animations CSS */}
      <style jsx global>{`
        @keyframes apparaitre {
          from {
            opacity: 0;
            transform: translateY(20px) rotate(-2deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotate(-2deg);
          }
        }
        @keyframes ecrire {
          from {
            opacity: 0;
            transform: translateX(-10px) rotate(1deg);
          }
          to {
            opacity: 1;
            transform: translateX(0) rotate(1deg);
          }
        }
        @keyframes pulse {
          0% { box-shadow: 4px 4px 0px rgba(192, 57, 43, 0.4); }
          50% { box-shadow: 6px 6px 0px rgba(192, 57, 43, 0.6); }
          100% { box-shadow: 4px 4px 0px rgba(192, 57, 43, 0.4); }
        }
      `}</style>
    </main>
  );
            }
