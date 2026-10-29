"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, Home, Book, Mail } from "lucide-react";

export default function MessagePage() {
  const router = useRouter();

  return (
    <main
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        paddingBottom: "80px",
        backgroundColor: "#F4EBD9",
        backgroundImage: "radial-gradient(#d5c4a1 0.5px, transparent 0.5px)",
        backgroundSize: "20px 20px",
        boxSizing: "border-box",
      }}
    >
      {/* Header */}
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
          borderBottom: "2px dashed #C0392B",
          boxSizing: "border-box",
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
          La lettre
        </h1>

        <div style={{ width: "34px" }} />
      </header>

      {/* Contenu de la lettre style papier déchiré */}
      <article
        style={{
          flex: 1,
          maxWidth: "640px",
          margin: "20px auto",
          padding: "30px 24px",
          width: "calc(100% - 32px)",
          boxSizing: "border-box",
          backgroundColor: "#FFFDF8",
          boxShadow: "2px 4px 12px rgba(0,0,0,0.08)",
          borderLeft: "4px solid #C0392B", // Marge rouge de carnet
          position: "relative",
        }}
      >
        {/* Effet de petit scotch en haut */}
        <div
          style={{
            position: "absolute",
            top: "-10px",
            left: "50%",
            transform: "translateX(-50%) rotate(-2deg)",
            width: "100px",
            height: "25px",
            backgroundColor: "rgba(220, 200, 170, 0.6)",
            border: "1px solid rgba(200, 180, 150, 0.3)",
            zIndex: 10,
          }}
        />

        <h2
          style={{
            fontFamily: "var(--font-special), monospace",
            fontSize: "1.2rem",
            fontWeight: "bold",
            color: "#C0392B",
            margin: 0,
            marginBottom: "24px",
            textAlign: "center",
            letterSpacing: "1px",
          }}
        >
          LETTRE OUVERTE À SYNTYCHE BISEYA
        </h2>

        <p
          style={{
            fontFamily: "var(--font-caveat), cursive",
            fontSize: "1.4rem",
            color: "#2C3E50",
            margin: 0,
            marginBottom: "24px",
            textAlign: "center",
          }}
        >
          Un an d'amour, une promesse pour toujours… ❤️
        </p>

        <div
          style={{
            fontSize: "0.95rem",
            lineHeight: 1.8,
            color: "#2C3E50",
            fontFamily: "var(--font-inter), sans-serif",
            textAlign: "justify",
          }}
        >
          <p style={{ margin: "0 0 16px", fontWeight: "bold" }}>
            Excellence, mon amour, ma Syntyche,
          </p>

          <p style={{ margin: "0 0 16px" }}>
            En ce jour si spécial pour nous deux, je ressens le besoin de t'écrire ces quelques mots, non seulement pour célébrer notre amour, mais aussi pour raviver cette flamme qui brûle en toi et te rappeler combien tu es précieuse à mes yeux.
          </p>

          <p style={{ margin: "0 0 16px" }}>
            J'ai commencé par Syntyche, parce que c'est à travers ce prénom que j'ai découvert un cœur exceptionnel, un cœur que le temps, la tendresse et l'amour m'ont permis de transformer en mon Honey, cette douceur devenue, peu à peu, l'un des plus beaux cadeaux de ma vie.
          </p>

          <p style={{ margin: "0 0 16px" }}>
            Aujourd'hui, j'ai tant de choses à te dire que les mots me semblent presque insuffisants. Nous célébrons notre première année d'existence, notre première année d'amour, une année qui n'a pas toujours été évidente, une année faite de défis, d'apprentissages, de patience et de compréhension. Pourtant, grâce à notre implication, à nos efforts, à notre attention mutuelle et à cette volonté de continuer à avancer ensemble, nous sommes toujours là.
          </p>

          <p style={{ margin: "0 0 16px" }}>
            Et regarde-nous aujourd'hui : nous avons donné naissance à quelque chose de beau, de rare et de précieux. Nous avons construit notre petit univers, notre histoire, notre Synior, cette merveilleuse complicité qui fait vibrer nos cœurs et donne à notre amour une identité qui n'appartient qu'à nous.
          </p>

          <p style={{ margin: "0 0 16px" }}>
            Mon cœur bat aujourd'hui encore plus fort pour toi qu'au premier jour. Et si je devais t'offrir le plus beau des cadeaux en cet anniversaire, je ne choisirais ni un objet ni quelque chose qui pourrait perdre sa valeur avec le temps. Je choisirais de t'offrir, une fois de plus, mon cœur, avec la promesse sincère de continuer à t'aimer, à te respecter, à te soutenir et à prendre soin de nous.
          </p>

          <p style={{ margin: "0 0 16px" }}>
            Je ne te promets pas une histoire sans difficultés, car l'amour véritable n'est pas l'absence d'épreuves. Je te promets plutôt de faire de mon mieux pour que, même dans les moments difficiles, tu n'oublies jamais la place que tu occupes dans ma vie. Je veux apprendre encore à te comprendre, grandir à tes côtés, célébrer tes victoires, sécher tes larmes et être, autant que possible, cette présence rassurante auprès de laquelle ton cœur peut trouver la paix.
          </p>

          <p style={{ margin: "0 0 16px" }}>
            N'oublie jamais cette chose importante que tu m'avais demandée à la genèse de notre amour : te rendre heureuse.
          </p>

          <p style={{ margin: "0 0 16px" }}>
            Je n'ai pas oublié cette demande, mon amour. Je sais qu'elle n'est pas simple, car le bonheur se construit chaque jour, à travers les gestes, les paroles, les attentions et les sacrifices que l'on consent par amour. Mais je veux m'y efforcer sincèrement, non pas seulement pour te prouver que je t'aime, mais aussi parce que ton sourire compte pour moi, parce que ton bonheur m'importe et parce que je veux que notre histoire soit un endroit où nous nous sentons tous les deux aimés, compris et en sécurité.
          </p>

          <p style={{ margin: "0 0 16px" }}>
            Ma chérie, my Syn'love, si le premier chapitre de notre histoire nous a appris à nous découvrir et à nous aimer, alors j'espère que les prochains nous apprendront à nous choisir encore et encore, à nous rapprocher davantage et à bâtir quelque chose de plus grand que nous.
          </p>

          <p style={{ margin: "0 0 16px" }}>
            Je veux continuer à écrire cette histoire avec toi, une page après l'autre, un jour après l'autre, avec ses rires, ses rêves, ses défis et ses belles surprises. Je veux que, lorsque nous regarderons en arrière, nous puissions sourire en nous disant que nous avons eu raison de croire en nous, de nous donner une chance et de préserver cet amour qui nous unit.
          </p>

          <p style={{ margin: "0 0 16px" }}>
            En ce premier anniversaire, je ne célèbre pas seulement le temps que nous avons passé ensemble. Je célèbre la femme que tu es, la place que tu occupes dans mon cœur, tout ce que nous avons déjà traversé et tout ce que nous pouvons encore accomplir main dans la main.
          </p>

          <p style={{ margin: "0 0 16px" }}>
            Joyeux premier anniversaire à nous, mon amour ! ❤️
          </p>

          <p style={{ margin: "0 0 16px" }}>
            Merci d'être ma Syntyche, mon Honey, ma Syn'love, ma Dulcinée et cette personne qui donne à mon cœur des raisons supplémentaires de battre.
          </p>

          <p style={{ margin: "0 0 16px" }}>
            Si je pouvais recommencer cette histoire, avec ses incertitudes, ses défis et ses moments de bonheur, je voudrais encore avoir la chance de te rencontrer, de te découvrir et de tomber amoureux de toi.
          </p>

          <p style={{ margin: "0 0 16px" }}>
            Et si aujourd'hui je devais renouveler une seule promesse, ce serait celle-ci : tant que l'amour nous donnera la force d'avancer, je continuerai à faire ma part pour que notre histoire soit belle et que ton cœur ne doute jamais de la sincérité du mien.
          </p>

          <p style={{ margin: "0 0 16px" }}>
            Meu amor, I love you. ❤️
          </p>

          <p style={{ margin: "32px 0 8px", fontWeight: "bold" }}>
            Avec tout l'amour que mon cœur peut contenir,
          </p>

          {/* Signature style manuscrite */}
          <p
            style={{
              fontFamily: "var(--font-caveat), cursive",
              fontSize: "2rem",
              color: "#C0392B",
              margin: 0,
              textAlign: "right",
              lineHeight: 1.2,
              transform: "rotate(-2deg)",
            }}
          >
            Ton Mel,<br />
            Junior OMANGA
          </p>
        </div>
      </article>

      {/* Navigation bas */}
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
          boxSizing: "border-box",
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
          onClick={() => router.push("/album")}
        />
        <NavButton
          icon={<Mail size={20} strokeWidth={2} />}
          label="Message"
          active
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
