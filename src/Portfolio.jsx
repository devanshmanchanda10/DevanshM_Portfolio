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
      {/* --- DYNAMIC BACKGROUND --- */}
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="lg:flex lg:justify-between lg:gap-20">

          {/* --- LEFT COLUMN (STICKY) --- */}
          <header className="lg:w-[40%] lg:sticky lg:top-0 lg:h-screen lg:py-24 py-12 flex flex-col justify-between">
            <div>
              <div className="font-display font-bold text-xl tracking-tight text-slate-900 mb-12">
                DM<span className="text-blue-600">.</span>
              </div>

              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-slate-200 text-blue-600 text-sm font-bold tracking-wide shadow-sm mb-8">
                <span className="w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
                Aspiring Product Manager
              </div>

              <h1 className="font-display text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight">
                Devansh <br /> Manchanda
              </h1>

              <p className="text-xl text-slate-600 font-medium mb-4">
                Building products that <span className="text-slate-900 font-bold">solve real problems</span>.
              </p>

              <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-md font-light">
                I blend <span className="text-blue-600 font-medium bg-blue-50 px-1 rounded">product sense</span> with <span className="text-purple-600 font-medium bg-purple-50 px-1 rounded">analytical depth</span> to drive growth in Fintech & EdTech.
              </p>

              <div className="flex items-center gap-4 mb-12">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-4 bg-blue-600 text-white text-base font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 hover:-translate-y-1 flex items-center"
                >
                  View Projects <ArrowUpRight className="ml-2 w-5 h-5" />
                </button>
                <SocialButton href="https://www.linkedin.com/in/devansh-manchanda-dm1111/" icon={<Linkedin size={24} />} label="LinkedIn" />
                <SocialButton href="mailto:manchandadevansh10@gmail.com" icon={<Mail size={24} />} label="Email" />
              </div>
            </div>

            <div className="space-y-4 text-sm font-medium text-slate-500">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-600" />
                Gurugram, India
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-600" />
                +91 9821182683
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-600" />
                manchandadevansh10@gmail.com
              </div>
            </div>
          </header>

          {/* --- RIGHT COLUMN (SCROLLABLE) --- */}
          <main className="lg:w-[55%] py-24 space-y-24">

            {/* --- EXPERIENCE SECTION (First Visible) --- */}
            <section id="experience" className="scroll-mt-24">
              <div className="mb-12 lg:hidden">
                <SectionHeader title="Work Experience" subtitle="Overview" />
              </div>

              <div className="grid gap-12">
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
            </section>

            {/* --- PROJECTS SECTION --- */}
            <section id="projects" className="scroll-mt-24">
              <div className="mb-12 sticky top-0 bg-slate-50/90 backdrop-blur-sm py-4 z-20 lg:static lg:bg-transparent lg:p-0">
                <h2 className="font-display text-3xl font-bold text-slate-900">Featured Projects</h2>
              </div>

              <div className="grid gap-8">
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
            </section>
          </main>
        </div >
      </div >
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
