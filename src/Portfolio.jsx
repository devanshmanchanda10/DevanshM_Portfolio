import React, { useState, useEffect, useRef } from 'react';
import {
  Briefcase,
  GraduationCap,
  Mail,
  Linkedin,
  Phone,
  MapPin,
  ExternalLink,
  ChevronRight,
  BarChart2,
  Users,
  Zap,
  Layout,
  Database,
  Search,
  MousePointer2,
  ArrowUpRight
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ['home', 'experience', 'projects', 'skills', 'education'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900 relative overflow-hidden">

      {/* --- MOUSE SPOTLIGHT --- */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.05), transparent 40%)`
        }}
      />

      {/* --- DYNAMIC BACKGROUND --- */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-slate-50">
        {/* Vivid Gradient Blobs */}
        <div className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] bg-blue-400/40 rounded-full blur-[100px] animate-blob mix-blend-multiply filter"></div>
        <div className="absolute top-[10%] -right-[10%] w-[500px] h-[500px] bg-purple-400/40 rounded-full blur-[100px] animate-blob [animation-delay:2s] mix-blend-multiply filter"></div>
        <div className="absolute -bottom-[20%] left-[20%] w-[600px] h-[600px] bg-indigo-400/40 rounded-full blur-[100px] animate-blob [animation-delay:4s] mix-blend-multiply filter"></div>
        <div className="absolute top-[40%] left-[40%] w-[400px] h-[400px] bg-pink-300/30 rounded-full blur-[100px] animate-blob [animation-delay:6s] mix-blend-multiply filter"></div>

        {/* Noise Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* --- NAVIGATION --- */}
      <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${isScrolled ? 'w-[90%] max-w-2xl' : 'w-[95%] max-w-5xl'
        }`}>
        <div className={`backdrop-blur-xl border border-white/40 shadow-lg shadow-slate-200/50 rounded-full px-6 py-3 flex justify-between items-center transition-all duration-300 ${isScrolled ? 'bg-white/90' : 'bg-white/60'
          }`}>
          <div className="font-display font-bold text-xl tracking-tight text-slate-900 flex items-center">
            DM<span className="text-blue-600">.</span>
          </div>

          <div className="hidden md:flex items-center space-x-1 bg-slate-100/50 rounded-full p-1">
            {['home', 'experience', 'projects', 'skills'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 capitalize ${activeSection === item
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-slate-500 hover:text-slate-900'
                  }`}
              >
                {item}
              </button>
            ))}
          </div>

          <button
            onClick={() => window.open('mailto:manchandadevansh10@gmail.com')}
            className="px-5 py-2 bg-slate-900 text-white text-sm font-semibold rounded-full hover:bg-blue-600 transition-colors shadow-lg shadow-slate-900/20"
          >
            Let's Talk
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="home" className="pt-40 pb-20 md:pt-60 md:pb-32 px-6 relative z-10">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold tracking-wide uppercase mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
            Aspiring Product Manager
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 leading-[1.1] mb-8 tracking-tight animate-fade-in-up [animation-delay:100ms]">
            Solving real problems <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              with real impact.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto font-light animate-fade-in-up [animation-delay:200ms]">
            Hi, I'm <strong className="text-slate-900 font-semibold">Devansh</strong>.
            I blend <span className="text-blue-600 font-medium">product sense</span> with <span className="text-purple-600 font-medium">analytical depth</span> to build experiences that users love and businesses value.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up [animation-delay:300ms]">
            <button
              onClick={() => scrollToSection('experience')}
              className="group flex items-center justify-center px-8 py-4 bg-slate-900 text-white rounded-2xl font-semibold hover:bg-blue-600 transition-all shadow-xl shadow-slate-900/20 hover:shadow-blue-600/30 hover:-translate-y-1"
            >
              See My Work
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="flex justify-center gap-3">
              <SocialButton href="https://www.linkedin.com/in/devansh-manchanda-dm1111/" icon={<Linkedin size={20} />} label="LinkedIn" />
              <SocialButton href="mailto:manchandadevansh10@gmail.com" icon={<Mail size={20} />} label="Email" />
            </div>
          </div>
        </div>
      </section>

      {/* --- EXPERIENCE SECTION --- */}
      <section id="experience" className="py-24 relative z-10">
        <div className="container mx-auto px-6 max-w-5xl">
          <SectionHeader title="Work Experience" subtitle="My Journey" />

          <div className="grid gap-8">
            <ExperienceCard
              role="Product Manager Intern"
              company="CashKaro.com"
              period="June - Nov 2025"
              type="Fintech"
              color="blue"
              icon={<Zap className="w-5 h-5" />}
              achievements={[
                "Optimized funnel health by tracking sign-ups, activation, and payment KPIs using Power BI & AWS Redshift.",
                "Revamped a 3-screen onboarding flow after competitor analysis, increasing signups by 1%.",
                "Authored PRDs for stakeholders to streamline development of new onboarding features."
              ]}
            />

            <ExperienceCard
              role="Business Research Intern"
              company="Ken Research"
              period="Feb - April 2025"
              type="Consulting"
              color="indigo"
              icon={<BarChart2 className="w-5 h-5" />}
              achievements={[
                "Analyzed EV adoption trends by surveying 200+ users across 3 cities and researching 100+ vehicles.",
                "Supported GTM strategy for a Dubai-based client (AWR Group) through rigorous secondary research."
              ]}
            />

            <ExperienceCard
              role="Growth Intern"
              company="BeyondTech"
              period="Earlier 2025"
              type="EdTech"
              color="emerald"
              icon={<Users className="w-5 h-5" />}
              achievements={[
                "Generated 200+ Tier-1 college leads via embedded CTAs; converted 20% into paid users.",
                "Executed LinkedIn content strategy that significantly boosted post engagement."
              ]}
            />
          </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="py-24 bg-slate-50/50 relative z-10">
        <div className="container mx-auto px-6 max-w-5xl">
          <SectionHeader title="Featured Projects" subtitle="Problem Solving" />

          <div className="grid md:grid-cols-2 gap-6">
            <ProjectCard
              title="Swiggy Instamart Improvement"
              tags={['User Research', 'PRD', 'North Star Metric']}
              description="Identified margin drops despite revenue growth. Led end-to-end analysis of labor & delivery costs."
              metrics={[
                "Surveyed 50+ users to identify 4 key pain points",
                "Prioritized 3 features focused on personalization"
              ]}
              link="https://drive.google.com/file/d/1cJjD2zO-NI1hJcMyLcZtfVPGV5iGZJVi/view?usp=sharing"
            />

            <ProjectCard
              title="PRD to MVP Automation"
              tags={['n8n', 'AI/LLM', 'Automation']}
              description="Built an automated workflow connecting structured Excel inputs to instant MVP generation."
              metrics={[
                "Automated PRD generation from raw inputs",
                "Enabled instant prototyping on Replit via AI prompts"
              ]}
              link="https://www.notion.so/PRD_TO_MVP-264177a4ce80806b87f4ef11d9af982a?source=copy_link"
            />

            <ProjectCard
              title="Profitability Optimization (QSR)"
              tags={['Root Cause Analysis', 'P&L', 'Strategy']}
              description="Analyzed a profit margin drop in online sales for a QSR chain despite growing revenue."
              metrics={[
                "Identified inflated labor & delivery costs",
                "Pitched promo strategy to unlock margin boost"
              ]}
            />
          </div>
        </div>
      </section>

      {/* --- SKILLS SECTION --- */}
      <section id="skills" className="py-24 relative z-10">
        <div className="container mx-auto px-6 max-w-5xl">
          <SectionHeader title="Technical Arsenal" subtitle="Skills & Tools" />

          <div className="grid md:grid-cols-3 gap-6">
            <SkillCategory
              icon={<Layout className="w-6 h-6 text-purple-600" />}
              title="Product Strategy"
              skills={['Product Lifecycle', 'GTM Strategy', 'Competitor Analysis', 'Root Cause Analysis', 'Agile/Scrum', 'User Research']}
            />
            <SkillCategory
              icon={<Database className="w-6 h-6 text-blue-600" />}
              title="Data & Technical"
              skills={['SQL', 'Power BI', 'Excel (Advanced)', 'AWS Redshift', 'Data Visualization', 'Funnel Analysis']}
            />
            <SkillCategory
              icon={<Search className="w-6 h-6 text-indigo-600" />}
              title="Market Research"
              skills={['Secondary Research', 'Survey Design (Zoho)', 'Customer Insights', 'KPI Tracking']}
            />
          </div>
        </div>
      </section>

      {/* --- EDUCATION & LEADERSHIP --- */}
      <section id="education" className="py-24 relative z-10">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="font-display text-2xl font-bold mb-8 flex items-center text-slate-900">
                <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
                  <GraduationCap size={20} />
                </span>
                Education
              </h3>
              <div className="space-y-8 border-l-2 border-slate-200 ml-4 pl-8 relative">
                <TimelineItem
                  title="B.Tech"
                  org="Netaji Subhas University of Technology"
                  period="2022 - 2026"
                  details="CGPA: 7.09"
                />
                <TimelineItem
                  title="Class XII (AISSCE)"
                  org="Delhi Public School, Vasant Kunj"
                  period="2022"
                  details="93.4%"
                />
              </div>
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold mb-8 flex items-center text-slate-900">
                <span className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center mr-3">
                  <Briefcase size={20} />
                </span>
                Leadership
              </h3>
              <div className="space-y-4">
                <LeadershipCard
                  role="PR & Ops Head"
                  org="Moksha'24 (NSUT)"
                  desc="Led 35+ team, managed 40+ partners. Drove 1,000+ registrations for Slick."
                />
                <LeadershipCard
                  role="Community Volunteer"
                  org="CRY (Child Rights and You)"
                  desc="Led sessions for 20+ children. Aligned Instagram content for 100k+ followers."
                />
                <LeadershipCard
                  role="General Secretary"
                  org="Shakesjeer (NSUT)"
                  desc="Managed logistics for large-scale events including Samay Raina's stadium show."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-950 text-slate-400 py-20 border-t border-slate-900 relative z-10">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-8">Let's build something great.</h2>
          <div className="flex justify-center gap-6 mb-12">
            <a href="mailto:manchandadevansh10@gmail.com" className="text-slate-400 hover:text-white transition-colors">Email</a>
            <a href="https://www.linkedin.com/in/devansh-manchanda-dm1111/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">LinkedIn</a>
            <a href="https://drive.google.com/file/d/1p_kU5biULGlgfkJzWTMwharAo3bevFde/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">Resume</a>
          </div>
          <p className="text-sm font-medium opacity-60">
            © {new Date().getFullYear()} Devansh Manchanda.
          </p>
        </div>
      </footer>
    </div >
  );
};

// --- SUB COMPONENTS ---

const SocialButton = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="p-4 bg-white border border-slate-200 rounded-2xl text-slate-600 hover:text-blue-600 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/10 transition-all hover:-translate-y-1"
  >
    {icon}
  </a>
);

const SectionHeader = ({ title, subtitle }) => (
  <div className="mb-16">
    <span className="inline-block px-3 py-1 bg-white/50 backdrop-blur-md border border-white/60 text-slate-600 font-bold tracking-wide text-xs uppercase rounded-full mb-4 shadow-sm">{subtitle}</span>
    <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">{title}</h2>
  </div>
);

const ExperienceCard = ({ role, company, period, type, achievements, icon, color }) => {
  const colorClasses = {
    blue: 'bg-blue-100/50 text-blue-700',
    indigo: 'bg-indigo-100/50 text-indigo-700',
    emerald: 'bg-emerald-100/50 text-emerald-700',
  };

  return (
    <div className="group relative bg-white/60 backdrop-blur-lg p-8 rounded-3xl border border-white/60 hover:border-blue-300/50 shadow-sm hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300 hover:-translate-y-1">
      <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
        <div className={`p-4 rounded-2xl ${colorClasses[color]} group-hover:scale-110 transition-transform duration-300 shadow-inner`}>
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap justify-between items-start gap-2">
            <div>
              <h3 className="font-display text-xl font-bold text-slate-900">{role}</h3>
              <div className="text-slate-600 font-medium mt-1">{company}</div>
            </div>
            <span className="text-xs font-bold px-3 py-1 bg-white/50 border border-white/60 text-slate-500 rounded-full">{period}</span>
          </div>
        </div>
      </div>
      <ul className="space-y-3 mb-6">
        {achievements.map((item, idx) => (
          <li key={idx} className="flex items-start text-slate-700 leading-relaxed text-sm md:text-base">
            <span className="mt-2 mr-3 w-1.5 h-1.5 bg-blue-400/60 rounded-full flex-shrink-0 group-hover:bg-blue-600 transition-colors" />
            {item}
          </li>
        ))}
      </ul>
      <div className="pt-6 border-t border-slate-200/50 flex items-center justify-between">
        <span className="text-[10px] font-bold px-3 py-1 bg-slate-100/50 text-slate-500 rounded-full uppercase tracking-wider">{type}</span>
      </div>
    </div>
  );
};

const ProjectCard = ({ title, tags, description, metrics, link }) => (
  <div className="bg-white/60 backdrop-blur-lg p-8 rounded-3xl border border-white/60 hover:border-blue-300/50 shadow-sm hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300 group flex flex-col h-full hover:-translate-y-1">
    <div className="flex flex-wrap gap-2 mb-6">
      {tags.map((tag, i) => (
        <span key={i} className="px-3 py-1 bg-white/50 text-slate-600 text-xs font-bold rounded-lg border border-white/60 shadow-sm">
          {tag}
        </span>
      ))}
    </div>
    <h3 className="font-display text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{title}</h3>
    <p className="text-slate-600 mb-8 leading-relaxed flex-grow">{description}</p>

    <div className="bg-slate-50/50 rounded-2xl p-5 space-y-3 mb-8 border border-slate-100/50">
      {metrics.map((metric, idx) => (
        <div key={idx} className="flex items-start text-sm font-medium text-slate-700">
          <Zap size={16} className="text-amber-500 mr-3 mt-0.5 fill-current flex-shrink-0" />
          {metric}
        </div>
      ))}
    </div>

    {link && (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-full px-6 py-3.5 bg-slate-900 text-white font-semibold rounded-xl hover:bg-blue-600 transition-all group-hover:shadow-lg group-hover:shadow-blue-500/20"
      >
        View Project <ArrowUpRight size={18} className="ml-2" />
      </a>
    )}
  </div>
);

const SkillCategory = ({ icon, title, skills }) => (
  <div className="p-8 bg-white/60 backdrop-blur-lg rounded-3xl border border-white/60 hover:border-blue-300/50 hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300 hover:-translate-y-1">
    <div className="flex items-center mb-6">
      <div className="p-3 bg-white/80 rounded-xl mr-4 text-slate-900 shadow-sm">
        {icon}
      </div>
      <h3 className="font-display font-bold text-lg text-slate-900">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, i) => (
        <span key={i} className="px-3 py-1.5 bg-white/40 border border-white/60 text-slate-700 text-sm font-medium rounded-lg hover:bg-white hover:border-blue-400 hover:text-blue-600 transition-all cursor-default shadow-sm">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const TimelineItem = ({ title, org, period, details }) => (
  <div className="relative group">
    <div className="absolute -left-[41px] top-1.5 h-5 w-5 rounded-full border-4 border-white bg-slate-200 group-hover:bg-blue-600 transition-colors shadow-sm" />
    <h4 className="font-display font-bold text-slate-900 text-lg">{title}</h4>
    <p className="text-slate-600 font-medium mb-2">{org}</p>
    <div className="flex items-center gap-3 text-sm">
      <span className="text-slate-400">{period}</span>
      <span className="font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">{details}</span>
    </div>
  </div>
);

const LeadershipCard = ({ role, org, desc }) => (
  <div className="p-6 bg-white/60 backdrop-blur-lg rounded-2xl border border-white/60 hover:border-blue-300/50 hover:shadow-lg hover:shadow-blue-900/10 transition-all hover:-translate-y-1">
    <div className="flex justify-between items-start mb-2">
      <div>
        <h4 className="font-display font-bold text-slate-900">{role}</h4>
        <p className="text-blue-600 text-xs font-bold uppercase tracking-wide mt-1">{org}</p>
      </div>
      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-white/50 border border-white/60 px-2 py-1 rounded-lg">POR</span>
    </div>
    <p className="text-slate-600 text-sm leading-relaxed mt-3">{desc}</p>
  </div>
);

export default Portfolio;
