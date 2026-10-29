"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Download, Home, Book, Mail, Loader2 } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function AlbumPage() {
  const router = useRouter();
  const [nbPages, setNbPages] = useState<number>(0);
  const [largeur, setLargeur] = useState<number>(0);

  useEffect(() => {
    const majLargeur = () => {
      const w = Math.min(window.innerWidth - 40, 700);
      setLargeur(w);
    };
    majLargeur();
    window.addEventListener("resize", majLargeur);
    return () => window.removeEventListener("resize", majLargeur);
  }, []);

  return (
    <main
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        paddingBottom: "80px",
        backgroundColor: "#F4EBD9", // Fond beige
        backgroundImage: "radial-gradient(#d5c4a1 0.5px, transparent 0.5px)",
        backgroundSize: "20px 20px",
      }}
    >
      {/* Header style carnet */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 40,
          backgroundColor: "rgba(244, 235, 217, 0.95)",
          backdropFilter: "blur(10px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 20px",
          borderBottom: "2px dashed #C0392B", // Ligne pointillée rouge
        }}
      >
        <button
          onClick={() => router.push("/")}
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            color: "#2C3E50",
            fontSize: "0.9rem",
            padding: "8px",
            fontFamily: "var(--font-special), monospace",
          }}
        >
          <ArrowLeft size={18} strokeWidth={2} />
          Retour
        </button>

        <h1
          style={{
            fontFamily: "var(--font-caveat), cursive",
            fontSize: "1.8rem",
            fontWeight: 700,
            color: "#2C3E50",
            margin: 0,
            letterSpacing: "1px",
          }}
        >
          L'album
        </h1>

        <a
          href="/album.pdf"
          download="Syntyche-Album.pdf"
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            color: "#C0392B",
            padding: "8px",
          }}
        >
          <Download size={20} strokeWidth={2} />
        </a>
      </header>

      {/* PDF Viewer - Style page de carnet */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px 16px",
          gap: "20px",
        }}
      >
        <Document
          file="/album.pdf"
          onLoadSuccess={({ numPages }) => setNbPages(numPages)}
          loading={
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "12px",
                padding: "60px 20px",
                color: "#2C3E50",
              }}
            >
              <Loader2 size={32} strokeWidth={2} color="#C0392B" className="spin" />
              <p style={{ fontSize: "0.9rem", fontFamily: "var(--font-special)" }}>
                Ouverture du carnet...
              </p>
            </div>
          }
          error={
            <div
              style={{
                padding: "40px 20px",
                textAlign: "center",
                color: "#2C3E50",
                fontFamily: "var(--font-special)",
              }}
            >
              <p>Impossible d'ouvrir le carnet.</p>
            </div>
          }
        >
          {Array.from({ length: nbPages }, (_, i) => (
            <div
              key={i}
              style={{
                marginBottom: "24px",
                boxShadow: "4px 6px 15px rgba(0,0,0,0.1)",
                backgroundColor: "#FFFFFF",
                padding: "10px", // Effet bordure blanche autour de la page
                transform: i % 2 === 0 ? "rotate(-0.5deg)" : "rotate(0.5deg)", // Alternance de pages légèrement penchées
              }}
            >
              <Page
                pageNumber={i + 1}
                width={largeur}
                renderAnnotationLayer={false}
                renderTextLayer={false}
              />
            </div>
          ))}
        </Document>

        <style jsx global>{`
          .spin {
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>

      {/* Navigation bas style onglet carnet */}
      <nav
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgba(244, 235, 217, 0.95)",
          backdropFilter: "blur(10px)",
          borderTop: "2px dashed #C0392B",
          display: "flex",
          justifyContent: "space-around",
          padding: "12px 0",
          zIndex: 50,
        }}
      >
        <NavButton
          icon={<Home size={20} strokeWidth={2} />}
          label="Accueil"
          onClick={() => router.push("/")}
        />
        <NavButton
          icon={<Book size={20} strokeWidth={2} />}
          label="Album"
          active
          onClick={() => router.push("/album")}
        />
        <NavButton
          icon={<Mail size={20} strokeWidth={2} />}
          label="Message"
          onClick={() => router.push("/message")}
        />
      </nav>
    </main>
  );
}

function NavButton({
  icon,
  label,
  active,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        background: "transparent",
        border: "none",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "4px",
        color: active ? "#C0392B" : "#7F8C8D",
        fontSize: "0.7rem",
        letterSpacing: "0.5px",
        padding: "4px 16px",
        fontFamily: "var(--font-special), monospace",
      }}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
        }
