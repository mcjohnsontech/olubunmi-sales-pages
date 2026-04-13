'use client';

import { useState, useEffect } from "react";
import { TargetIcon, MegaphoneIcon, PhoneIcon, BarChartIcon, ChatBubbleIcon, CameraIcon, GlobeIcon, GiftIcon, FireIcon, CreditCardIcon, CheckCircleIcon } from "../components/icons";
import { IconRenderer } from "../components/icon-renderer";
import { StructuredData, OrganizationSchema } from "../components/structured-data";

const ORANGE = "rgb(255,155,56)";
const PURPLE = "rgb(99,40,210)";
const WHITE = "#ffffff";
const HERO_PHOTO = "/olubunmi-hero.jpg";
const CLOSE_PHOTO = "/olubunmi-close.jpg";
const NAV_LINKS = ["About", "Program", "Testimonials", "Contact"];

const TESTIMONIALS = [
  {
    name: "Amaka Osei",
    role: "E-commerce Founder",
    text: "This program completely changed how I think about marketing. Within 60 days I tripled my leads without increasing ad spend.",
    avatar: "AO",
  },
  {
    name: "Chidi Nwosu",
    role: "Freelance Consultant",
    text: "Practical, no-fluff, and deeply strategic. Best investment I have made in my business this year.",
    avatar: "CN",
  },
  {
    name: "Fatima Bello",
    role: "Brand Strategist",
    text: "The clarity I got on my positioning alone was worth 10x the price. Book the call, you won't regret it.",
    avatar: "FB",
  },
];

const PROGRAM_POINTS = [
  { icon: TargetIcon, title: "Build a Profitable Business", desc: "Identify and validate business ideas that sell. Learn how Dayari.ng started with just ₦30,000." },
  { icon: MegaphoneIcon, title: "Create Offers People Buy", desc: "Structure irresistible offers and get consistent customers via Instagram and WhatsApp." },
  { icon: PhoneIcon, title: "Social & Paid Ads Mastery", desc: "Run Facebook, Instagram and TikTok ads the right way — without burning money." },
  { icon: BarChartIcon, title: "Structure for Growth", desc: "Build systems that scale your business predictably month after month." },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("About");

  // REPLACE with your Google Calendar Appointment Schedule link
  // Go to calendar.google.com → New Appointment Schedule → copy the booking page URL
  const GOOGLE_CAL_URL = "https://calendar.app.google/8A5QjuLnYBXGeZoSA";
  
  // Paystack payment link
  const PAYSTACK_URL = "https://paystack.shop/pay/scalemybusiness";

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map((l) => document.getElementById(l.toLowerCase()));
      const scrollY = window.scrollY + 100;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollY) {
          setActiveSection(NAV_LINKS[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };



  return (
    <>
      <StructuredData />
      <OrganizationSchema />
      <div style={{ fontFamily: "Georgia, serif", background: WHITE, color: "#1a1a1a", overflowX: "hidden" }}>

      {/* ── GOOGLE CALENDAR MODAL ── */}
      {calendarOpen && (
        <div onClick={() => setCalendarOpen(false)} style={{
          position: "fixed", inset: 0, zIndex: 1000,
          background: "rgba(10,0,30,0.7)", backdropFilter: "blur(6px)",
          display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem",
        }}>
          <div onClick={(e) => e.stopPropagation()} style={{
            background: WHITE, borderRadius: 24, width: "100%", maxWidth: 740,
            boxShadow: "0 40px 100px rgba(99,40,210,0.3)", overflow: "hidden",
          }}>
            {/* Modal header */}
            <div style={{
              background: PURPLE,
              padding: "1.5rem 2rem",
              display: "flex", justifyContent: "space-between", alignItems: "center",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={CLOSE_PHOTO} alt="Olubunmi Ojo" style={{
                  width: 52, height: 52, borderRadius: "50%",
                  objectFit: "cover", objectPosition: "top",
                  border: `2px solid ${ORANGE}`,
                }} />
                <div>
                  <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 11, margin: 0, letterSpacing: 1.5, textTransform: "uppercase", fontFamily: "sans-serif" }}>Book a free call with</p>
                  <h3 style={{ color: WHITE, margin: "2px 0 0", fontSize: 20, fontWeight: 400 }}>Olubunmi Ojo · Scale My Business</h3>
                </div>
              </div>
              <button onClick={() => setCalendarOpen(false)} style={{
                background: "rgba(255,255,255,0.15)", border: "none", borderRadius: "50%",
                width: 38, height: 38, color: WHITE, fontSize: 20, cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>✕</button>
            </div>

            <div style={{ padding: "1.5rem 2rem 2rem" }}>
              <p style={{ color: "#666", fontSize: 14, marginBottom: "1.25rem", lineHeight: 1.7, fontFamily: "sans-serif" }}>
                Select a time for your free 30-minute strategy session. You&rsquo;ll receive a confirmation by email with the meeting link.
              </p>
              <div style={{ border: `2px solid rgba(99,40,210,0.2)`, borderRadius: 16, overflow: "hidden", background: "#fafafa" }}>
                <iframe
                  src={GOOGLE_CAL_URL}
                  style={{ width: "100%", height: 520, border: "none" }}
                  title="Book a call with Olubunmi Ojo"
                  frameBorder="0"
                />
              </div>
              <p style={{ fontSize: 11, color: "#bbb", marginTop: "0.75rem", textAlign: "center", fontFamily: "sans-serif" }}>
                Powered by Google Calendar · All times shown in your local timezone
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ── NAV ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: "rgba(255,255,255,0.96)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(99,40,210,0.1)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 2.5rem", height: 68,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={CLOSE_PHOTO} alt="Olubunmi Ojo" style={{
            width: 38, height: 38, borderRadius: "50%",
            objectFit: "cover", objectPosition: "top",
            border: `2px solid ${ORANGE}`,
          }} />
          <div>
            <p style={{ margin: 0, fontWeight: 700, fontSize: 14, lineHeight: 1.2, letterSpacing: -0.3 }}>Olubunmi Ojo</p>
            <p style={{ margin: 0, fontSize: 10, color: PURPLE, fontFamily: "sans-serif", letterSpacing: 0.5 }}>CEO, Dayari.ng</p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }} className="desktop-nav">
          {NAV_LINKS.map((l) => (
            <button key={l} onClick={() => scrollTo(l)} style={{
              background: "none", border: "none", cursor: "pointer",
              fontSize: 14, fontFamily: "Georgia, serif",
              color: activeSection === l ? PURPLE : "#555",
              fontWeight: activeSection === l ? 700 : 400,
              borderBottom: activeSection === l ? `2px solid ${ORANGE}` : "2px solid transparent",
              paddingBottom: 2, transition: "all 0.2s",
            }}>{l}</button>
          ))}
          <button onClick={() => setCalendarOpen(true)} style={{
            background: ORANGE, color: WHITE, border: "none", borderRadius: 9,
            padding: "9px 20px", fontSize: 13, cursor: "pointer", fontWeight: 700,
            fontFamily: "sans-serif", letterSpacing: 0.3,
            boxShadow: "0 4px 14px rgba(255,155,56,0.4)",
            transition: "opacity 0.2s",
          }} onMouseEnter={(e) => {
            const target = e.target as HTMLElement;
            target.style.opacity = "0.85";
          }}
            onMouseLeave={(e) => {
              const target = e.target as HTMLElement;
              target.style.opacity = "1";
            }}>
            Book a Call
          </button>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="hamburger" style={{
          display: "none", background: "none", border: "none",
          cursor: "pointer", fontSize: 24, color: PURPLE,
        }}>☰</button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: "fixed", top: 68, left: 0, right: 0, zIndex: 99,
          background: WHITE, borderBottom: `3px solid ${ORANGE}`,
          display: "flex", flexDirection: "column", padding: "1rem 1.5rem", gap: "0.75rem",
        }}>
          {NAV_LINKS.map((l) => (
            <button key={l} onClick={() => scrollTo(l)} style={{
              background: "none", border: "none", cursor: "pointer",
              fontSize: 16, fontFamily: "Georgia, serif", color: "#333", textAlign: "left", padding: "0.4rem 0",
            }}>{l}</button>
          ))}
          <button onClick={() => { setCalendarOpen(true); setMenuOpen(false); }} style={{
            background: ORANGE, color: WHITE, border: "none", borderRadius: 9,
            padding: "11px", fontSize: 15, cursor: "pointer", fontWeight: 700, fontFamily: "sans-serif",
          }}>Book a Free Call</button>
        </div>
      )}

      {/* ── FLOATING WHATSAPP BUTTON ── */}
      <a href="https://wa.me/2347088737006" target="_blank" rel="noreferrer" style={{
        position: "fixed", bottom: 24, right: 24, zIndex: 50,
        width: 56, height: 56, borderRadius: "50%",
        background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
        transition: "all 0.3s",
        textDecoration: "none",
      }}
        onMouseEnter={(e) => {
          const target = e.currentTarget as HTMLElement;
          target.style.transform = "scale(1.1)";
          target.style.boxShadow = "0 8px 32px rgba(37,211,102,0.6)";
        }}
        onMouseLeave={(e) => {
          const target = e.currentTarget as HTMLElement;
          target.style.transform = "scale(1)";
          target.style.boxShadow = "0 4px 20px rgba(37,211,102,0.4)";
        }}
        title="Chat with us on WhatsApp">
        <svg width="32" height="32" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Main Circle Background */}
          <circle cx="256" cy="256" r="240" fill="#25D366"/>
          {/* Bubble and Icon Path */}
          <path d="M256.064 88C163.392 88 88 163.392 88 256.064C88 285.696 95.744 314.112 110.464 338.944L88.512 419.2L170.624 397.696C194.816 410.88 221.952 417.792 250.112 417.792C252.096 417.792 254.08 417.728 256.064 417.728C348.736 417.728 424.128 342.336 424.128 249.664C424.128 160.448 348.736 88 256.064 88ZM350.592 316.416C346.56 327.808 327.424 337.024 317.824 338.944C308.224 340.864 295.808 342.144 256.448 325.76C206.144 304.832 173.696 253.568 171.2 250.24C168.704 246.912 150.336 222.464 150.336 197.12C150.336 171.776 163.264 159.488 168.64 153.984C173.952 148.48 180.224 147.2 185.664 147.2C188.352 147.2 190.72 147.328 192.704 147.456C198.592 147.712 201.536 148.096 205.376 157.312C210.24 169.088 222.144 198.144 223.552 201.088C224.96 204.032 226.368 208 224.448 211.84C222.528 215.68 220.928 217.6 217.984 221.056C215.04 224.512 212.416 227.328 209.472 230.912C206.848 233.984 203.904 237.184 207.168 242.816C210.432 248.32 221.696 266.624 238.144 281.344C259.328 300.288 276.544 306.432 282.688 308.992C288.832 311.552 292.48 311.04 295.936 307.072C299.392 303.104 310.656 289.92 314.752 284.16C318.848 278.4 322.944 279.424 328.32 281.472C333.76 283.52 362.816 297.856 368.704 300.8C374.592 303.744 378.496 305.152 379.904 307.584C381.312 310.016 381.312 315.52 377.216 326.912L350.592 316.416Z" fill="white"/>
        </svg>

      </a>

      {/* ── HERO ── */}
      <section id="about" style={{ paddingTop: 68 }}>
        <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "92vh", gap: 0 }}>

          {/* Left: text */}
          <div style={{
            display: "flex", flexDirection: "column", justifyContent: "center",
            padding: "5rem 3.5rem 5rem 5rem",
            background: "#ffffff",
          }} className="hero-left">
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(99,40,210,0.08)", borderRadius: 100,
              padding: "6px 16px", marginBottom: "1.5rem", width: "fit-content",
            }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: ORANGE }} />
              <span style={{ fontSize: 11, color: PURPLE, fontWeight: 700, fontFamily: "sans-serif", letterSpacing: 1.5 }}>
                BUSINESS GROWTH COACH · DAYARI.NG
              </span>
            </div>

            <h1 style={{
              fontSize: "clamp(2rem, 4.5vw, 3.6rem)", lineHeight: 1.1,
              margin: "0 0 1rem", fontWeight: 400,
            }}>
              From Zero Sales to<br />
              <span style={{ color: ORANGE, fontStyle: "italic" }}>Consistent</span>{" "}
              <span style={{ color: PURPLE }}>Orders.</span>
            </h1>

            <p style={{
              fontSize: "1.05rem", color: "#555", lineHeight: 1.85,
              maxWidth: 460, margin: "0 0 0.5rem", fontFamily: "sans-serif",
            }}>
              I&rsquo;m <strong style={{ color: "#1a1a1a" }}>Olubunmi Ojo</strong>, CEO of Dayari.ng. I started my business with ₦30,000 and turned it into a thriving brand. Now I teach entrepreneurs how to build profitable businesses and market them consistently — without wasting money on the wrong things.
            </p>

            <div style={{
              background: `rgba(255,155,56,0.1)`, border: `1px solid rgba(255,155,56,0.3)`,
              borderRadius: 10, padding: "10px 16px", marginBottom: "2rem",
              display: "inline-flex", alignItems: "center", gap: 10, width: "fit-content",
            }}>
              <FireIcon size={20} color="#a04000" />
              <span style={{ fontSize: 13, fontFamily: "sans-serif", color: "#a04000", fontWeight: 600 }}>
                Scale My Business — 3 Weeks · ₦30,000 · Limited Slots
              </span>
            </div>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <button onClick={() => setCalendarOpen(true)} style={{
                background: ORANGE, color: WHITE, border: "none", borderRadius: 12,
                padding: "15px 30px", fontSize: 15, cursor: "pointer",
                fontWeight: 700, fontFamily: "sans-serif",
                boxShadow: "0 8px 28px rgba(255,155,56,0.4)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.transform = "translateY(-2px)";
                  target.style.boxShadow = "0 14px 36px rgba(255,155,56,0.5)";
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.transform = "translateY(0)";
                  target.style.boxShadow = "0 8px 28px rgba(255,155,56,0.4)";
                }}>
                Book a Free Clarity Call →
              </button>
              <button onClick={() => window.open(PAYSTACK_URL, '_blank')} style={{
                background: PURPLE, color: WHITE, border: "none", borderRadius: 12,
                padding: "15px 30px", fontSize: 15, cursor: "pointer",
                fontWeight: 700, fontFamily: "sans-serif",
                boxShadow: "0 8px 28px rgba(99,40,210,0.3)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.transform = "translateY(-2px)";
                  target.style.boxShadow = "0 14px 36px rgba(99,40,210,0.4)";
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.transform = "translateY(0)";
                  target.style.boxShadow = "0 8px 28px rgba(99,40,210,0.3)";
                }}>
                Pay Now (₦30,000) →
              </button>
              {/* <button style={{
                background: "none", color: PURPLE, border: `2px solid ${PURPLE}`,
                borderRadius: 12, padding: "15px 28px", fontSize: 15,
                cursor: "pointer", fontFamily: "sans-serif",
                transition: "all 0.2s",
              }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.background = PURPLE;
                  target.style.color = WHITE;
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.background = "none";
                  target.style.color = PURPLE;
                }}>
                See the Program
              </button> */}
            </div>

            <div style={{ display: "flex", gap: "2.5rem", marginTop: "2.5rem" }}>
              {[["₦30K", "Program Price"], ["3 Weeks", "Intensive"], ["Limited", "Slots Only"]].map(([num, label]) => (
                <div key={label}>
                  <p style={{ fontSize: "1.4rem", fontWeight: 700, color: PURPLE, margin: 0, fontFamily: "sans-serif" }}>{num}</p>
                  <p style={{ fontSize: 11, color: "#999", margin: 0, fontFamily: "sans-serif", letterSpacing: 0.5 }}>{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: photo panel */}
          <div style={{display: "flex", alignSelf: "center", justifyContent: "center", height: "80%"}}>
            <div style={{
            background: PURPLE,
            display: "flex", alignItems: "center", justifyContent: "center",
            position: "relative", overflow: "hidden",
            minHeight: "92vh",
          }} className="hero-right">
            {/* Decorative rings */}
            <div style={{ position: "absolute", top: -100, right: -100, width: 380, height: 380, borderRadius: "50%", border: "2px solid rgba(255,155,56,0.15)" }} />
            <div style={{ position: "absolute", bottom: -80, left: -80, width: 300, height: 300, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.06)" }} />

            {/* Full-body photo */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={HERO_PHOTO}
              alt="Olubunmi Ojo"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover", objectPosition: "top center",
                position: "relative", zIndex: 1,
                maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0))",
                WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0))",
              }}
            />

            {/* Name badge */}
            <div style={{
              position: "absolute", bottom: 32, left: 32, zIndex: 2,
              background: "rgba(255,255,255,0.12)", backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: 14, padding: "14px 20px",
            }}>
              <p style={{ color: WHITE, fontWeight: 700, margin: 0, fontSize: 17 }}>Olubunmi Ojo</p>
              <p style={{ color: ORANGE, margin: "3px 0 0", fontSize: 12, fontFamily: "sans-serif", letterSpacing: 0.5 }}>CEO, Dayari.ng</p>
            </div>

            {/* Floating badge */}
            <div style={{
              position: "absolute", top: 48, right: 32, zIndex: 2,
              background: ORANGE, borderRadius: 12, padding: "10px 16px",
              boxShadow: "0 8px 24px rgba(255,155,56,0.45)",
            }}>
              <p style={{ margin: 0, fontSize: 10, color: WHITE, fontFamily: "sans-serif", opacity: 0.85, letterSpacing: 0.5 }}>🔥 APRIL COHORT</p>
              <p style={{ margin: 0, fontSize: 13, color: WHITE, fontWeight: 700, fontFamily: "sans-serif" }}>Limited Slots Left!</p>
            </div>
          </div>
          </div>
          
        </div>
      </section>

      {/* ── PROGRAM ── */}
      <section id="program" style={{ padding: "6rem 5rem", background: "#fafafa" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ color: ORANGE, fontWeight: 700, letterSpacing: 2, fontSize: 11, fontFamily: "sans-serif", marginBottom: "0.5rem" }}>THE PROGRAM</p>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", margin: "0 0 0.75rem", fontWeight: 400 }}>
            Scale My Business<br /><span style={{ color: PURPLE, fontStyle: "italic" }}>3 Weeks in April.</span>
          </h2>
          <p style={{ color: "#666", fontSize: "1rem", lineHeight: 1.85, maxWidth: 580, marginBottom: "3rem", fontFamily: "sans-serif" }}>
            A focused 3-week intensive that gives you the strategy, skills, and accountability to go from zero, or stuck to getting consistent orders. Includes a one-on-one clarity session for the first 10 participants.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem", marginBottom: "2.5rem" }}>
            {PROGRAM_POINTS.map((p) => {
              const IconComponent = p.icon;
              return (
              <div key={p.title} style={{
                background: WHITE, borderRadius: 18, padding: "2rem",
                border: "1px solid rgba(99,40,210,0.1)",
                transition: "transform 0.2s, box-shadow 0.2s",
                cursor: "default",
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(99,40,210,0.1)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                <div style={{ marginBottom: "0.75rem" }}>
                  <IconComponent size={30} color={PURPLE} />
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 700, margin: "0 0 0.5rem", color: PURPLE, fontFamily: "sans-serif" }}>{p.title}</h3>
                <p style={{ fontSize: 13.5, color: "#666", margin: 0, lineHeight: 1.7, fontFamily: "sans-serif" }}>{p.desc}</p>
              </div>
            );
            })}
          </div>

          {/* Bonus pill */}
          <div style={{
            background: `rgba(99,40,210,0.06)`,
            border: `1px solid rgba(255,155,56,0.3)`, borderRadius: 14,
            padding: "1.25rem 1.75rem", marginBottom: "2.5rem",
            display: "flex", alignItems: "center", gap: 14,
          }}>
            <div style={{ display: "flex" }}>
              <GiftIcon size={28} color={ORANGE} />
            </div>
            <div>
              <p style={{ margin: 0, fontWeight: 700, fontSize: 14, color: "#1a1a1a", fontFamily: "sans-serif" }}>Bonus Included</p>
              <p style={{ margin: 0, fontSize: 13, color: "#666", fontFamily: "sans-serif" }}>One-on-One Clarity Session for the first 10 participants. Don&rsquo;t miss your spot.</p>
            </div>
          </div>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
            <button onClick={() => setCalendarOpen(true)} style={{
              background: PURPLE, color: WHITE, border: "none", borderRadius: 12,
              padding: "16px 36px", fontSize: 16, cursor: "pointer", fontWeight: 700,
              fontFamily: "sans-serif", boxShadow: "0 8px 28px rgba(99,40,210,0.3)",
              transition: "opacity 0.2s",
            }} onMouseEnter={(e) => {
              const target = e.target as HTMLElement;
              target.style.opacity = "0.85";
            }} onMouseLeave={(e) => {
              const target = e.target as HTMLElement;
              target.style.opacity = "1";
            }}>
              Book a Free Clarity Call →
            </button>
            <button onClick={() => window.open(PAYSTACK_URL, '_blank')} style={{
              background: ORANGE, color: WHITE, border: "none", borderRadius: 12,
              padding: "16px 36px", fontSize: 16, cursor: "pointer", fontWeight: 700,
              fontFamily: "sans-serif", boxShadow: "0 8px 28px rgba(255,155,56,0.3)",
              transition: "opacity 0.2s",
            }} onMouseEnter={(e) => {
              const target = e.target as HTMLElement;
              target.style.opacity = "0.85";
            }} onMouseLeave={(e) => {
              const target = e.target as HTMLElement;
              target.style.opacity = "1";
            }}>
              Pay Now ₦30K  →
            </button>
            
            <div style={{ background: `rgba(99,40,210,0.06)`, borderRadius: 10, padding: "12px 20px", fontFamily: "sans-serif" }}>
              <span style={{ fontSize: 20, fontWeight: 700, color: PURPLE }}>₦30,000</span>
              <span style={{ fontSize: 13, color: "#888", marginLeft: 8 }}>for 3 weeks</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section id="testimonials" style={{ padding: "6rem 5rem", background: WHITE }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ color: ORANGE, fontWeight: 700, letterSpacing: 2, fontSize: 11, fontFamily: "sans-serif", marginBottom: "0.5rem" }}>RESULTS</p>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", margin: "0 0 3rem", fontWeight: 400 }}>
            What students are <span style={{ color: ORANGE, fontStyle: "italic" }}>saying.</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
            {TESTIMONIALS.map((t) => (
              <div key={t.name} style={{
                background: "#fafafa", borderRadius: 18, padding: "2rem",
                border: "1px solid rgba(0,0,0,0.06)",
              }}>
                <p style={{ fontSize: 36, margin: "0 0 0.5rem", color: ORANGE, lineHeight: 1 }}>&ldquo;</p>
                <p style={{ fontSize: 14, color: "#444", lineHeight: 1.85, margin: "0 0 1.5rem", fontFamily: "sans-serif" }}>{t.text}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{
                    width: 42, height: 42, borderRadius: "50%",
                    background: ORANGE,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: WHITE, fontWeight: 700, fontSize: 12, fontFamily: "sans-serif",
                  }}>{t.avatar}</div>
                  <div>
                    <p style={{ margin: 0, fontWeight: 700, fontSize: 13, fontFamily: "sans-serif" }}>{t.name}</p>
                    <p style={{ margin: 0, fontSize: 12, color: "#999", fontFamily: "sans-serif" }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ── CONTACT ── */}
      <section id="contact" style={{ padding: "6rem 5rem", background: WHITE }}>
        <div className="contact-grid" style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>
          <div>
            <p style={{ color: ORANGE, fontWeight: 700, letterSpacing: 2, fontSize: 11, fontFamily: "sans-serif", marginBottom: "0.5rem" }}>CONTACT</p>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", margin: "0 0 1rem", fontWeight: 400 }}>Let&rsquo;s talk.</h2>
            <p style={{ color: "#666", fontSize: 15, lineHeight: 1.85, marginBottom: "2rem", fontFamily: "sans-serif" }}>
              Questions before booking? Reach out directly — Olubunmi personally responds to every message.
            </p>
            {[
              { icon: ChatBubbleIcon, label: "WhatsApp / DM", value: "0708 873 7006", href: "https://wa.me/2347088737006" },
              { icon: CameraIcon, label: "Instagram", value: "@dayari.ng", href: "https://instagram.com/dayari.ng" },
              { icon: GlobeIcon, label: "Website", value: "dayari.ng", href: "https://dayari.ng" },
            ].map((c) => {
              const IconComponent = c.icon;
              return (
              <a key={c.label} href={c.href} target="_blank" rel="noreferrer" style={{
                display: "flex", alignItems: "center", gap: 14, textDecoration: "none",
                color: "#333", marginBottom: "1rem", padding: "12px 18px",
                borderRadius: 12, border: "1px solid rgba(99,40,210,0.1)",
                transition: "all 0.2s", fontFamily: "sans-serif",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = ORANGE; e.currentTarget.style.background = "rgba(255,155,56,0.04)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(99,40,210,0.1)"; e.currentTarget.style.background = "none"; }}>
                <div style={{ display: "flex" }}>
                  <IconComponent size={22} color={PURPLE} />
                </div>
                <div>
                  <p style={{ margin: 0, fontSize: 10, color: "#bbb", letterSpacing: 0.8, fontFamily: "sans-serif" }}>{c.label}</p>
                  <p style={{ margin: 0, fontSize: 14, fontWeight: 700, color: PURPLE }}>{c.value}</p>
                </div>
              </a>
            );
            })}
          </div>

          <div style={{
            background: PURPLE,
            borderRadius: 24, padding: "2.5rem", color: WHITE, textAlign: "center",
          }}>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: "0.75rem" }}>
                <CreditCardIcon size={36} color={WHITE} />
              </div>
              <h3 style={{ fontSize: 22, margin: "0 0 0.75rem", fontWeight: 400 }}>Ready to Enroll?</h3>
              <p style={{ fontSize: 14, opacity: 0.8, lineHeight: 1.8, marginBottom: "1.75rem", fontFamily: "sans-serif" }}>
                Pay ₦30,000 and secure your spot in the next cohort. 3 weeks to transform your business.
              </p>
              <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 12, padding: "12px", marginBottom: "1rem" }}>
                <p style={{ fontSize: 28, fontWeight: 700, margin: "0.5rem 0", fontFamily: "sans-serif" }}>₦30,000</p>
                <p style={{ fontSize: 12, opacity: 0.7, margin: 0, fontFamily: "sans-serif" }}>Limited slots available</p>
              </div>
              <button onClick={() => window.open(PAYSTACK_URL, '_blank')} style={{
                background: ORANGE, color: WHITE, border: "none", borderRadius: 12,
                padding: "14px", fontSize: 15, cursor: "pointer", fontWeight: 700,
                fontFamily: "sans-serif", width: "100%",
                boxShadow: "0 8px 24px rgba(255,155,56,0.45)",
                transition: "opacity 0.2s",
              }} onMouseEnter={(e) => {
                const target = e.target as HTMLElement;
                target.style.opacity = "0.85";
              }} onMouseLeave={(e) => {
                const target = e.target as HTMLElement;
                target.style.opacity = "1";
              }}>
                Pay Now via Paystack →
              </button>
            </div>

            <div style={{ borderTop: "1px solid rgba(255,255,255,0.2)", paddingTop: "1.5rem", marginTop: "1.5rem" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={CLOSE_PHOTO} alt="Olubunmi Ojo" style={{
                width: 80, height: 80, borderRadius: "50%",
                objectFit: "cover", objectPosition: "top",
                border: `3px solid ${ORANGE}`, marginBottom: "1.25rem",
              }} />
              <h3 style={{ fontSize: 22, margin: "0 0 0.75rem", fontWeight: 400 }}>Free Strategy Session</h3>
              <p style={{ fontSize: 14, opacity: 0.8, lineHeight: 1.8, marginBottom: "1.75rem", fontFamily: "sans-serif" }}>
                30 minutes. No pitch. Just a genuine look at your business and what&rsquo;s holding your growth back.
              </p>
              <button onClick={() => setCalendarOpen(true)} style={{
                background: "rgba(255,255,255,0.2)", color: WHITE, border: "none", borderRadius: 12,
                padding: "14px", fontSize: 15, cursor: "pointer", fontWeight: 700,
                fontFamily: "sans-serif", width: "100%",
                transition: "opacity 0.2s",
              }} onMouseEnter={(e) => {
                const target = e.target as HTMLElement;
                target.style.opacity = "0.85";
              }} onMouseLeave={(e) => {
                const target = e.target as HTMLElement;
                target.style.opacity = "1";
              }}>
                Book Your Free Call →
              </button>
              <p style={{ fontSize: 11, opacity: 0.5, marginTop: "0.75rem", fontFamily: "sans-serif" }}>Pick any available time that works for you</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        background: "#080808", color: WHITE, padding: "2rem 5rem",
        display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={CLOSE_PHOTO} alt="Olubunmi Ojo" style={{
            width: 34, height: 34, borderRadius: "50%",
            objectFit: "cover", objectPosition: "top", border: `2px solid ${ORANGE}`,
          }} />
          <div>
            <p style={{ margin: 0, fontSize: 14, fontWeight: 400 }}>Olubunmi Ojo</p>
            <p style={{ margin: 0, fontSize: 10, color: ORANGE, fontFamily: "sans-serif" }}>CEO, Dayari.ng</p>
          </div>
        </div>
        <p style={{ fontSize: 12, color: "#555", margin: 0, fontFamily: "sans-serif" }}>
          © {new Date().getFullYear()} Olubunmi Ojo · Dayari.ng
        </p>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <button onClick={() => window.open(PAYSTACK_URL, '_blank')} style={{
            background: ORANGE, color: "#080808", border: "none",
            borderRadius: 8, padding: "8px 20px", fontSize: 13, cursor: "pointer", fontFamily: "sans-serif", fontWeight: 700,
          }}>Pay Now</button>
          <button onClick={() => setCalendarOpen(true)} style={{
            background: "none", color: ORANGE, border: `1px solid ${ORANGE}`,
            borderRadius: 8, padding: "8px 20px", fontSize: 13, cursor: "pointer", fontFamily: "sans-serif",
          }}>Book a Call</button>
        </div>
      </footer>

      <style>{`
        @media (max-width: 870px) {
          .hero-grid { grid-template-columns: 1fr !important; minHeight: auto !important; }
          .hero-left { padding: 3rem 1.5rem !important; }
          .hero-right { min-height: 50vh !important; }
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
          section { padding: 4rem 1.5rem !important; }
          footer { padding: 2rem 1.5rem !important; flex-direction: column; text-align: center; }
          .form-grid { grid-template-columns: 1fr !important; }
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .hero-left { padding: 2rem 1rem !important; }
          .hero-right { min-height: 45vh !important; }
          h1 { font-size: 1.8rem !important; }
          section { padding: 2.5rem 1rem !important; }
          footer { padding: 1.5rem 1rem !important; }
        }
      `}</style>
      </div>
    </>
  );
}