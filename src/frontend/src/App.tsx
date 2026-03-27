import {
  ArrowUp,
  Check,
  ChevronDown,
  Github,
  LayoutDashboard,
  Linkedin,
  Menu,
  Monitor,
  Play,
  Sparkles,
  Twitter,
  Wand2,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

/* ─────────────────────────────────────────────
   NAV
───────────────────────────────────────────── */
function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Product", href: "#features", caret: true },
    { label: "Templates", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "Features", href: "#features" },
  ];

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          type="button"
          className="flex items-center gap-2.5 group"
          data-ocid="nav.link"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-cyan-purple flex items-center justify-center shadow-cyan-glow group-hover:shadow-purple-glow transition-shadow">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-lg text-foreground tracking-tight">
            CognitiveBuild
          </span>
        </button>

        <nav
          className="hidden md:flex items-center gap-1"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <button
              type="button"
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="flex items-center gap-1 px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-white/5"
              data-ocid="nav.link"
            >
              {link.label}
              {link.caret && <ChevronDown className="w-3 h-3" />}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-2"
            data-ocid="nav.link"
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => scrollTo("#pricing")}
            className="px-5 py-2 text-sm font-semibold rounded-full bg-gradient-cyan-purple text-white hover:opacity-90 transition-opacity shadow-cyan-glow"
            data-ocid="nav.primary_button"
          >
            Get Started
          </button>
        </div>

        <button
          type="button"
          className="md:hidden p-2 text-muted-foreground hover:text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="md:hidden glass-nav border-t border-white/5 px-6 pb-4"
          >
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="block w-full text-left py-3 text-sm text-muted-foreground hover:text-foreground transition-colors border-b border-white/5 last:border-0"
                data-ocid="nav.link"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 flex flex-col gap-2">
              <button
                type="button"
                className="text-sm text-muted-foreground hover:text-foreground py-2"
                data-ocid="nav.link"
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => scrollTo("#pricing")}
                className="px-5 py-2.5 text-sm font-semibold rounded-full bg-gradient-cyan-purple text-white"
                data-ocid="nav.primary_button"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ─────────────────────────────────────────────
   DEVICE MOCKUP
───────────────────────────────────────────── */
const monitorCols = [0, 1, 2];

function DeviceMockup() {
  return (
    <div className="relative w-full max-w-lg mx-auto h-[400px] md:h-[480px]">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-10 right-10 w-48 h-48 rounded-full opacity-20 animate-pulse-glow"
          style={{
            background:
              "radial-gradient(circle, oklch(0.80 0.12 195), transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-20 left-10 w-40 h-40 rounded-full opacity-15 animate-pulse-glow"
          style={{
            background:
              "radial-gradient(circle, oklch(0.55 0.18 293), transparent 70%)",
            animationDelay: "1.5s",
          }}
        />
      </div>

      {/* Monitor */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-44 rounded-xl border-2 overflow-hidden animate-float-slow"
        style={{
          borderColor: "oklch(0.80 0.12 195 / 0.6)",
          boxShadow:
            "0 0 30px oklch(0.80 0.12 195 / 0.2), inset 0 0 20px oklch(0 0 0 / 0.5)",
          background: "oklch(0.13 0.025 260)",
        }}
      >
        <div className="absolute inset-0 p-3 flex flex-col gap-1.5">
          <div className="flex gap-1">
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "oklch(0.65 0.2 27)" }}
            />
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "oklch(0.75 0.18 80)" }}
            />
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "oklch(0.75 0.2 145)" }}
            />
          </div>
          <div
            className="flex-1 rounded-md overflow-hidden"
            style={{ background: "oklch(0.10 0.02 262)" }}
          >
            <div
              className="h-5 flex items-center px-2"
              style={{ background: "oklch(0.15 0.025 260)" }}
            >
              <div
                className="h-1.5 w-16 rounded-full"
                style={{ background: "oklch(0.80 0.12 195 / 0.5)" }}
              />
            </div>
            <div className="p-2 flex flex-col gap-1">
              <div
                className="h-2 w-3/4 rounded-full"
                style={{ background: "oklch(0.30 0.04 255)" }}
              />
              <div
                className="h-2 w-1/2 rounded-full"
                style={{ background: "oklch(0.25 0.03 255)" }}
              />
              <div className="mt-1 grid grid-cols-3 gap-1">
                {monitorCols.map((col) => (
                  <div
                    key={col}
                    className="h-10 rounded"
                    style={{ background: `oklch(0.17 0.03 ${258 + col * 10})` }}
                  />
                ))}
              </div>
              <div
                className="h-2 w-2/3 rounded-full mt-1"
                style={{ background: "oklch(0.80 0.12 195 / 0.3)" }}
              />
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, oklch(0.80 0.12 195 / 0.6), transparent)",
            animation: "scan-line 3s linear infinite",
          }}
        />
      </div>

      {/* Stand */}
      <div
        className="absolute top-[168px] left-1/2 -translate-x-1/2 w-10 h-6"
        style={{ background: "oklch(0.20 0.03 258)" }}
      />
      <div
        className="absolute top-[188px] left-1/2 -translate-x-1/2 w-24 h-1.5 rounded-full"
        style={{ background: "oklch(0.20 0.03 258)" }}
      />

      {/* Tablet */}
      <div
        className="absolute bottom-16 left-4 w-36 h-48 rounded-2xl border-2 overflow-hidden"
        style={{
          borderColor: "oklch(0.55 0.18 293 / 0.7)",
          boxShadow: "0 0 25px oklch(0.55 0.18 293 / 0.25)",
          background: "oklch(0.13 0.025 260)",
        }}
      >
        <div className="p-2 h-full flex flex-col gap-1.5">
          <div
            className="h-4 rounded"
            style={{ background: "oklch(0.55 0.18 293 / 0.3)" }}
          />
          <div
            className="flex-1 rounded flex flex-col gap-1 p-1"
            style={{ background: "oklch(0.10 0.02 262)" }}
          >
            <div
              className="h-1.5 w-full rounded-full"
              style={{ background: "oklch(0.25 0.03 255)" }}
            />
            <div
              className="h-1.5 w-4/5 rounded-full"
              style={{ background: "oklch(0.22 0.03 255)" }}
            />
            <div
              className="h-12 w-full rounded mt-1"
              style={{ background: "oklch(0.17 0.03 258)" }}
            />
            <div
              className="h-1.5 w-3/4 rounded-full"
              style={{ background: "oklch(0.55 0.18 293 / 0.4)" }}
            />
          </div>
        </div>
      </div>

      {/* Phone */}
      <div
        className="absolute bottom-4 right-4 w-24 h-40 rounded-2xl border-2 overflow-hidden"
        style={{
          borderColor: "oklch(0.52 0.22 314 / 0.7)",
          boxShadow: "0 0 25px oklch(0.52 0.22 314 / 0.25)",
          background: "oklch(0.13 0.025 260)",
        }}
      >
        <div
          className="absolute top-1.5 left-1/2 -translate-x-1/2 w-8 h-1.5 rounded-full"
          style={{ background: "oklch(0.09 0.02 262)" }}
        />
        <div className="pt-5 px-2 pb-2 h-full flex flex-col gap-1">
          <div
            className="h-14 rounded-lg flex items-center justify-center"
            style={{ background: "oklch(0.17 0.03 258)" }}
          >
            <div
              className="w-6 h-6 rounded-full"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.80 0.12 195), oklch(0.52 0.22 314))",
              }}
            />
          </div>
          <div
            className="h-1.5 w-4/5 rounded-full"
            style={{ background: "oklch(0.25 0.03 255)" }}
          />
          <div
            className="h-1.5 w-3/5 rounded-full"
            style={{ background: "oklch(0.22 0.03 255)" }}
          />
          <div
            className="mt-auto h-5 rounded-full"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.80 0.12 195 / 0.4), oklch(0.52 0.22 314 / 0.4))",
            }}
          />
        </div>
      </div>

      {/* Floating pill badge */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-28 right-0 flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium"
        style={{
          background: "oklch(0.17 0.03 258 / 0.9)",
          borderColor: "oklch(0.80 0.12 195 / 0.4)",
          color: "oklch(0.97 0.015 270)",
          boxShadow: "0 4px 16px oklch(0 0 0 / 0.3)",
          backdropFilter: "blur(8px)",
        }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-cb-cyan animate-pulse" />
        Portfolio for a digital agency
      </motion.div>

      {/* AI badge */}
      <motion.div
        animate={{ scale: [1, 1.08, 1] }}
        transition={{
          duration: 2.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-2 right-12 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.80 0.12 195), oklch(0.55 0.18 293))",
          borderColor: "oklch(0.80 0.12 195 / 0.5)",
          color: "white",
          boxShadow: "0 0 12px oklch(0.80 0.12 195 / 0.4)",
        }}
      >
        AI
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   HERO
───────────────────────────────────────────── */
const particleIds = [1, 2, 3, 4, 5, 6, 7, 8];
const avatarColors = ["#22D3EE", "#8B5CF6", "#C026D3", "#06B6D4"];

function Hero() {
  const scrollToPricing = () =>
    document.querySelector("#pricing")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {particleIds.map((n) => (
          <div key={n} className={`particle particle-${n}`} />
        ))}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-5"
          style={{
            background:
              "radial-gradient(circle, oklch(0.80 0.12 195), transparent 60%)",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-6"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold border"
            style={{
              background: "oklch(0.80 0.12 195 / 0.1)",
              borderColor: "oklch(0.80 0.12 195 / 0.3)",
              color: "oklch(0.80 0.12 195)",
            }}
          >
            <Zap className="w-3 h-3" />
            AI-Powered Website Builder
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-foreground">
            Build Stunning Websites{" "}
            <span className="text-gradient-cyan-purple">in Minutes</span> with
            AI
          </h1>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg">
            CognitiveBuild uses cutting-edge AI to generate beautiful,
            fully-responsive websites from a single description. No coding
            required. Launch in minutes.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <button
              type="button"
              onClick={scrollToPricing}
              className="px-6 py-3 font-semibold text-sm rounded-full bg-gradient-cyan-purple text-white hover:opacity-90 transition-opacity shadow-cyan-glow"
              data-ocid="hero.primary_button"
            >
              Start Building For Free
            </button>
            <button
              type="button"
              className="flex items-center gap-2 px-6 py-3 font-semibold text-sm rounded-full border text-foreground hover:bg-white/5 transition-colors"
              style={{ borderColor: "oklch(1 0 0 / 0.15)" }}
              data-ocid="hero.secondary_button"
            >
              <Play className="w-4 h-4" />
              Watch Demo
            </button>
          </div>

          <div className="flex items-center gap-4 pt-2">
            <div className="flex -space-x-2">
              {avatarColors.map((color, idx) => (
                <div
                  key={color}
                  className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold text-white"
                  style={{
                    background: `linear-gradient(135deg, ${color}, #050914)`,
                    borderColor: "oklch(0.09 0.02 262)",
                  }}
                >
                  {String.fromCharCode(65 + idx)}
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">
              <span className="text-foreground font-semibold">2,400+</span>{" "}
              websites built this week
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <DeviceMockup />
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   FEATURES
───────────────────────────────────────────── */
const features = [
  {
    icon: Wand2,
    title: "AI Content Generation",
    description:
      "Describe your vision in plain English and our AI writes compelling copy, headlines, and calls-to-action tailored to your industry.",
    gradient:
      "linear-gradient(135deg, oklch(0.80 0.12 195), oklch(0.55 0.18 293))",
  },
  {
    icon: LayoutDashboard,
    title: "Smart Layout Builder",
    description:
      "Intelligent layout engine picks the perfect grid, typography, and whitespace for your content type — every time.",
    gradient:
      "linear-gradient(135deg, oklch(0.55 0.18 293), oklch(0.52 0.22 314))",
  },
  {
    icon: Monitor,
    title: "Multi-Device Preview",
    description:
      "Instantly preview and fine-tune your site across desktop, tablet, and mobile breakpoints with live synchronization.",
    gradient:
      "linear-gradient(135deg, oklch(0.52 0.22 314), oklch(0.80 0.12 195))",
  },
];

function Features() {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Feature Highlights
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Everything you need to go from idea to live website — powered by
            state-of-the-art AI.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="card-surface rounded-2xl p-6 hover:shadow-card-hover transition-all duration-300 group hover:border-white/15"
              data-ocid={`features.item.${i + 1}`}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                style={{
                  background: f.gradient,
                  boxShadow: "0 4px 16px oklch(0 0 0 / 0.3)",
                }}
              >
                <f.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {f.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   HOW IT WORKS
───────────────────────────────────────────── */
const steps = [
  {
    step: "01",
    title: "Define Your Vision",
    description:
      "Tell the AI what kind of website you need, your industry, tone, and goals.",
    accent: "oklch(0.80 0.12 195)",
  },
  {
    step: "02",
    title: "AI Generates Layouts",
    description:
      "Our model generates multiple layout options and populates them with relevant content.",
    accent: "oklch(0.68 0.16 240)",
  },
  {
    step: "03",
    title: "Fine-Tune & Customize",
    description:
      "Drag, drop, and adjust every element with our intuitive visual editor.",
    accent: "oklch(0.55 0.18 293)",
  },
  {
    step: "04",
    title: "Publish Instantly",
    description:
      "Deploy to a custom domain with one click. SSL included, CDN-optimized.",
    accent: "oklch(0.52 0.22 314)",
  },
];

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-20 md:py-28"
      style={{ background: "oklch(0.10 0.022 262 / 0.5)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From blank canvas to published website in four simple steps.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
              data-ocid={`steps.item.${i + 1}`}
            >
              {i < 3 && (
                <div
                  className="hidden lg:block absolute top-[68px] left-[calc(100%+0px)] w-6 h-px z-10"
                  style={{
                    background: `linear-gradient(90deg, ${s.accent}, transparent)`,
                  }}
                />
              )}
              <div
                className="w-full h-36 rounded-xl mb-4 overflow-hidden relative"
                style={{
                  background: "oklch(0.12 0.025 260)",
                  border: `1px solid ${s.accent}40`,
                  boxShadow: `0 0 20px ${s.accent}15`,
                }}
              >
                <div className="p-3 h-full flex flex-col gap-1.5">
                  <div
                    className="h-3 rounded-full w-2/3"
                    style={{ background: `${s.accent}40` }}
                  />
                  <div
                    className="h-2 rounded-full w-1/2"
                    style={{ background: "oklch(0.25 0.03 255)" }}
                  />
                  <div
                    className="flex-1 rounded-lg mt-1"
                    style={{ background: "oklch(0.17 0.03 258)" }}
                  />
                </div>
                <div
                  className="absolute bottom-2 right-2 text-xs font-bold px-2 py-0.5 rounded-full"
                  style={{
                    background: `${s.accent}25`,
                    color: s.accent,
                    border: `1px solid ${s.accent}40`,
                  }}
                >
                  Step {s.step}
                </div>
              </div>
              <div className="card-surface rounded-xl p-4">
                <div
                  className="text-xs font-bold mb-1"
                  style={{ color: s.accent }}
                >
                  {s.step}
                </div>
                <h3 className="font-semibold text-foreground mb-1.5">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {s.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   PRICING
───────────────────────────────────────────── */
const plans = [
  {
    name: "Starter",
    price: "$15",
    period: "/mo",
    description: "Perfect for individuals and small projects.",
    features: [
      "3 websites",
      "AI content generation",
      "10 GB storage",
      "Custom domain",
      "SSL included",
      "Email support",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$39",
    period: "/mo",
    description: "For professionals who need more power and flexibility.",
    features: [
      "Unlimited websites",
      "Advanced AI layouts",
      "100 GB storage",
      "Priority custom domains",
      "Analytics dashboard",
      "Priority support",
      "Team collaboration",
    ],
    cta: "Start Pro Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Contact",
    period: "",
    description: "Custom solutions for large organizations and agencies.",
    features: [
      "Everything in Pro",
      "White-label option",
      "SLA guarantee",
      "Dedicated account manager",
      "Custom integrations",
      "SAML SSO",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pricing Plans
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Start free and scale as you grow. No hidden fees, cancel anytime.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`relative rounded-2xl p-6 flex flex-col gap-5 transition-all duration-300 ${plan.highlighted ? "scale-[1.03]" : ""}`}
              style={{
                background: plan.highlighted
                  ? "oklch(0.17 0.03 258)"
                  : "oklch(0.14 0.025 258)",
                border: plan.highlighted
                  ? "1px solid transparent"
                  : "1px solid oklch(1 0 0 / 0.08)",
                boxShadow: plan.highlighted
                  ? "0 0 0 1px oklch(0.80 0.12 195 / 0.5), 0 0 40px oklch(0.80 0.12 195 / 0.15), 0 0 80px oklch(0.55 0.18 293 / 0.1)"
                  : undefined,
              }}
              data-ocid={`pricing.item.${i + 1}`}
            >
              {plan.highlighted && (
                <>
                  <div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.80 0.12 195 / 0.15), oklch(0.55 0.18 293 / 0.15))",
                      zIndex: 0,
                    }}
                  />
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.80 0.12 195), oklch(0.55 0.18 293))",
                    }}
                  >
                    Most Popular
                  </div>
                </>
              )}

              <div className="relative z-10">
                <h3 className="text-lg font-bold text-foreground mb-1">
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {plan.description}
                </p>
              </div>

              <div className="relative z-10 flex items-baseline gap-1">
                <span
                  className="text-4xl font-extrabold"
                  style={{
                    color: plan.highlighted
                      ? "oklch(0.80 0.12 195)"
                      : "oklch(0.97 0.015 270)",
                  }}
                >
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-muted-foreground text-sm">
                    {plan.period}
                  </span>
                )}
              </div>

              <ul className="relative z-10 flex flex-col gap-2.5 flex-1">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2.5 text-sm">
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        background: plan.highlighted
                          ? "oklch(0.80 0.12 195 / 0.2)"
                          : "oklch(0.25 0.03 255)",
                      }}
                    >
                      <Check
                        className="w-2.5 h-2.5"
                        style={{
                          color: plan.highlighted
                            ? "oklch(0.80 0.12 195)"
                            : "oklch(0.72 0.03 255)",
                        }}
                      />
                    </div>
                    <span className="text-muted-foreground">{feat}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className="relative z-10 w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-90"
                style={{
                  background: plan.highlighted
                    ? "linear-gradient(135deg, oklch(0.80 0.12 195), oklch(0.55 0.18 293))"
                    : "oklch(0.22 0.04 255)",
                  color: "oklch(0.97 0.015 270)",
                  boxShadow: plan.highlighted
                    ? "0 4px 16px oklch(0.80 0.12 195 / 0.3)"
                    : undefined,
                }}
                data-ocid={`pricing.primary_button.${i + 1}`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   FOOTER
───────────────────────────────────────────── */
const footerLinks: Record<string, string[]> = {
  Product: ["Features", "Templates", "Pricing", "Changelog", "Roadmap"],
  Company: ["About", "Blog", "Careers", "Press", "Contact"],
  Resources: [
    "Documentation",
    "API Reference",
    "Tutorials",
    "Community",
    "Status",
  ],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"],
};

const socialLinks = [
  { Icon: Twitter, label: "Twitter" },
  { Icon: Linkedin, label: "LinkedIn" },
  { Icon: Github, label: "GitHub" },
];

function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer
      className="border-t py-16"
      style={{
        borderColor: "oklch(1 0 0 / 0.08)",
        background: "oklch(0.09 0.018 262)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-cyan-purple flex items-center justify-center shadow-cyan-glow">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg text-foreground">
                CognitiveBuild
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              The AI-powered website builder that turns your ideas into
              stunning, production-ready websites.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map(({ Icon, label }) => (
                <button
                  type="button"
                  key={label}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center border text-muted-foreground hover:text-foreground hover:border-white/20 transition-all"
                  style={{ borderColor: "oklch(1 0 0 / 0.08)" }}
                  data-ocid="footer.link"
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-sm font-semibold text-foreground mb-4">
                {group}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <button
                      type="button"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      data-ocid="footer.link"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t"
          style={{ borderColor: "oklch(1 0 0 / 0.08)" }}
        >
          <p className="text-xs text-muted-foreground">
            &copy; {year}. Built with &#10084;&#65039; using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors underline underline-offset-2"
            >
              caffeine.ai
            </a>
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-10 h-10 rounded-full flex items-center justify-center border text-muted-foreground hover:text-foreground hover:border-white/20 transition-all hover:shadow-cyan-glow"
            style={{ borderColor: "oklch(1 0 0 / 0.12)" }}
            data-ocid="footer.button"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────
   APP
───────────────────────────────────────────── */
export default function App() {
  return (
    <div className="min-h-screen font-inter">
      <Nav />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
