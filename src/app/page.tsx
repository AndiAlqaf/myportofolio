"use client";

import { useState } from "react";
import portfolioData from "../data/portfolio.json";
function Marquee({ text }: { text: string }) {
  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {/* Repeat the text to create a continuous scrolling effect */}
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} className="marquee-item">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const { personal, works, achievements, contact } = portfolioData;
  const [selectedWork, setSelectedWork] = useState<any>(null);

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        {"heroImages" in personal && Array.isArray(personal.heroImages) && (
          <div className="hero-background">
            {personal.heroImages.map((img: string, idx: number) => (
              <img key={idx} src={img} alt="Hero Background" className={`floating-img float-${idx % 5}`} />
            ))}
          </div>
        )}
        <h1>{personal.name}</h1>
        <div className="subtitle">{personal.title}</div>
        <p style={{ marginTop: "3rem", maxWidth: "600px", fontWeight: "bold" }}>
          {personal.description}
        </p>
      </section>

      {/* Marquee Separator */}
      <Marquee text="* CREATIVE WORKS * LOUD DESIGN * NO RULES " />

      {/* Works Section */}
      <section id="works">
        <h2 style={{ fontSize: "5rem", marginBottom: "3rem", paddingLeft: "2rem" }}>
          SELECTED WORKS
        </h2>
        <div className="works-grid">
          {works.map((work) => (
            <div key={work.id} className="work-card" onClick={() => setSelectedWork(work)} style={{ cursor: "pointer" }}>
              {work.type === "video" ? (
                <video
                  src={work.media}
                  className="work-media"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <img
                  src={work.media}
                  alt={work.title}
                  className="work-media"
                />
              )}
              <div className="work-info">
                <h3>{work.title}</h3>
                <p>{work.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Marquee Separator */}
      <Marquee text="* FLEXING ZONE * ACHIEVEMENTS * HYPE " />

      {/* Achievements Section */}
      <section id="achievements">
        <h2 style={{ fontSize: "5rem", marginBottom: "4rem", textAlign: "right", paddingRight: "2rem" }}>
          ACHIEVEMENTS
        </h2>
        <div className="achievements-list">
          {achievements.map((ach) => (
            <div key={ach.id} className="achievement-badge">
              <h3>{ach.title}</h3>
              <p>{ach.description}</p>
              {Array.isArray(ach.image) ? (
                <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem", justifyContent: "center" }}>
                  {ach.image.map((imgUrl, i) => (
                    <img
                      key={i}
                      src={imgUrl}
                      alt={`${ach.title} ${i + 1}`}
                      style={{ width: "45%", objectFit: "contain", border: "3px solid var(--color-bg)", borderRadius: "10px" }}
                    />
                  ))}
                </div>
              ) : ach.image ? (
                <img
                  src={ach.image}
                  alt={ach.title}
                  style={{ width: "100%", maxWidth: "300px", marginTop: "1.5rem", border: "3px solid var(--color-bg)", borderRadius: "10px" }}
                />
              ) : null}
            </div>
          ))}
        </div>
      </section>

      {/* Footer / Contact */}
      <footer>
        <h2>LET'S COLLAB</h2>
        <p>Drop a line if you want to make some noise.</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
          <a href={`mailto:${contact.email}`} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            Email
          </a>
          <a href={contact.instagram} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            Instagram
          </a>
          {"linkedin" in contact && contact.linkedin && (
            <a href={contact.linkedin as string} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              LinkedIn
            </a>
          )}
          {"github" in contact && contact.github && (
            <a href={contact.github as string} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              GitHub
            </a>
          )}
        </div>
      </footer>

      {/* Work Details Modal */}
      {selectedWork && (
        <div className="work-modal-overlay" onClick={() => setSelectedWork(null)}>
          <div className="work-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setSelectedWork(null)}>X</button>
            {selectedWork.type === "video" ? (
              <video src={selectedWork.media} controls autoPlay className="modal-media" />
            ) : (
              <img src={selectedWork.media} alt={selectedWork.title} className="modal-media" />
            )}
            <div className="modal-info">
              <h2 style={{ fontSize: "3rem", margin: "1rem 0" }}>{selectedWork.title}</h2>
              <p style={{ fontSize: "1.5rem", fontWeight: "bold", whiteSpace: "pre-wrap" }}>
                {selectedWork.longDescription || selectedWork.description}
              </p>
              {selectedWork.link && selectedWork.link !== "#" && (
                <a href={selectedWork.link} target="_blank" rel="noopener noreferrer" className="modal-btn">
                  VISIT PROJECT
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
