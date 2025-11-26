import React, { useState, useEffect } from 'react';
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
  Database,
  Search,
  Layout,
  MousePointer2,
  ArrowRight,
  Smartphone,
  Globe,
  TrendingUp,
  ShoppingBag,
  Bot,
  PieChart
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effects
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const NavLink = ({ id, label }) => (
    <button
      onClick={() => scrollToSection(id)}
      className={`text-sm font-medium transition-all duration-300 relative px-2 ${activeSection === id
        ? 'text-blue-600'
        : 'text-slate-600 hover:text-blue-500'
        }`}
    >
      {label}
      {activeSection === id && (
        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full animate-fade-in" />
      )}
    </button>
  );

  return (
    <div className="min-h-screen font-sans text-slate-800 selection:bg-indigo-100 selection:text-indigo-900 relative overflow-hidden">

      {/* --- BACKGROUND ELEMENTS --- */}
      <div className="fixed inset-0 z-[-1] bg-slate-50">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="fixed top-0 -left-4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob z-[-1]"></div>
      <div className="fixed top-0 -right-4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 z-[-1]"></div>
      <div className="fixed -bottom-8 left-20 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 z-[-1]"></div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${isScrolled
        ? 'bg-white/80 backdrop-blur-md border-slate-200/50 py-4 shadow-sm'
        : 'bg-transparent border-transparent py-6'
        }`}>
        <div className="container mx-auto px-6 max-w-7xl flex justify-between items-center">
          <div className="font-bold text-2xl tracking-tighter text-slate-900 flex items-center">
            DM<span className="text-blue-600">.</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <NavLink id="home" label="Overview" />
            <NavLink id="projects" label="Projects" />
            <NavLink id="skills" label="Skills" />
            <NavLink id="education" label="Education" />
          </div>
          <button
            onClick={() => window.open('mailto:manchandadevansh10@gmail.com')}
            className="px-5 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-full hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Contact Me
          </button>
        </div>
      </nav>

      {/* --- COMBINED HERO & EXPERIENCE SECTION --- */}
      {/* This section puts Intro on Left, Experience on Right immediately */}
      <section id="home" className="pt-28 pb-12 px-6 relative min-h-screen flex flex-col justify-center">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* LEFT COLUMN: INTRO (Sticky on Desktop) */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-slate-200 text-blue-700 text-sm font-semibold mb-6 shadow-sm">
                <span className="relative flex h-2.5 w-2.5 mr-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
                </span>
                Aspiring Product Manager
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight">
                Devansh <br /> Manchanda
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed mb-8 font-light">
                Solving real world problems <span className="font-semibold text-slate-900">to create real impact</span>.
                <br /><br />
                Blending <span className="bg-blue-50 text-blue-700 px-1 rounded font-medium">product sense</span> with <span className="bg-purple-50 text-purple-700 px-1 rounded font-medium">analytical knowledge</span> to give best user experience.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="group flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 hover:shadow-blue-600/40"
                >
                  View Projects
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="flex gap-2">
                  <SocialIcon href="https://www.linkedin.com/in/devansh-manchanda-dm1111/" icon={<Linkedin size={24} />} label="LinkedIn" />
                  <SocialIcon href="mailto:manchandadevansh10@gmail.com" icon={<Mail size={24} />} label="Email" />
                </div>
              </div>

              <div className="border-t border-slate-200/60 pt-6 space-y-3 text-sm text-slate-500 font-medium">
                <div className="flex items-center"><MapPin size={16} className="mr-3 text-blue-500" /> Gurugram, India</div>
                <div className="flex items-center"><Phone size={16} className="mr-3 text-blue-500" /> +91 9821182683</div>
                <div className="flex items-center"><MousePointer2 size={16} className="mr-3 text-blue-500" /> manchandadevansh10@gmail.com</div>
              </div>
            </div>

            {/* RIGHT COLUMN: EXPERIENCE (Immediate View) */}
            <div id="experience" className="lg:col-span-7 space-y-6 pt-2 lg:pt-0">
              <div className="flex items-center mb-4">
                <h2 className="text-2xl font-bold text-slate-900">Work Experience</h2>
                <div className="h-px bg-slate-200 flex-grow ml-4"></div>
              </div>

              <ExperienceCard
                role="Product Manager Intern"
                company="CashKaro.com"
                period="June - Nov 2025"
                type="Fintech"
                color="blue"
                icon={<Smartphone className="w-5 h-5" />}
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
                icon={<Globe className="w-5 h-5" />}
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
                icon={<TrendingUp className="w-5 h-5" />}
                achievements={[
                  "Generated 200+ Tier-1 college leads via embedded CTAs; converted 20% into paid users.",
                  "Executed LinkedIn content strategy that significantly boosted post engagement."
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 relative">
        <div className="absolute inset-0 bg-white/40 skew-y-1 transform origin-top-left -z-10"></div>
        <div className="container mx-auto px-6 max-w-6xl">
          <SectionHeader title="Featured Projects" subtitle="Problem Solving" />

          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              title="Swiggy Instamart Improvement"
              tags={['User Research', 'PRD', 'North Star Metric']}
              description="Identified margin drops despite revenue growth. Led end-to-end analysis of labor & delivery costs."
              metrics={[
                "Surveyed 50+ users to identify 4 key pain points",
                "Prioritized 3 features focused on personalization"
              ]}
              link="https://drive.google.com/file/d/1cJjD2zO-NI1hJcMyLcZtfVPGV5iGZJVi/view?usp=sharing"
              icon={<ShoppingBag className="w-6 h-6" />}
              color="orange"
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
              icon={<Bot className="w-6 h-6" />}
              color="purple"
            />

            <ProjectCard
              title="Profitability Optimization (QSR)"
              tags={['Root Cause Analysis', 'P&L', 'Strategy']}
              description="Analyzed a profit margin drop in online sales for a QSR chain despite growing revenue."
              metrics={[
                "Identified inflated labor & delivery costs",
                "Pitched promo strategy to unlock margin boost"
              ]}
              icon={<PieChart className="w-6 h-6" />}
              color="rose"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <SectionHeader title="Technical Arsenal" subtitle="Skills & Tools" />

          <div className="grid md:grid-cols-3 gap-8">
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

      {/* Education & POR */}
      <section id="education" className="py-24 relative">
        <div className="absolute inset-0 bg-slate-50/50 -z-10"></div>
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center text-slate-900">
                <div className="p-2 bg-blue-100 rounded-lg mr-3">
                  <GraduationCap className="text-blue-600 w-6 h-6" />
                </div>
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
              <h3 className="text-2xl font-bold mb-8 flex items-center text-slate-900">
                <div className="p-2 bg-purple-100 rounded-lg mr-3">
                  <Briefcase className="text-purple-600 w-6 h-6" />
                </div>
                Leadership
              </h3>
              <div className="space-y-6">
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

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500"></div>

        <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
          <h2 className="text-3xl font-bold text-white mb-6">Let's build something great together.</h2>
          <div className="flex justify-center gap-8 mb-10">
            <a href="mailto:manchandadevansh10@gmail.com" className="hover:text-white hover:underline decoration-blue-500 underline-offset-4 transition-all">Email</a>
            <a href="https://www.linkedin.com/in/devansh-manchanda-dm1111/" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline decoration-blue-500 underline-offset-4 transition-all">LinkedIn</a>
            <a href="https://drive.google.com/file/d/1p_kU5biULGlgfkJzWTMwharAo3bevFde/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline decoration-blue-500 underline-offset-4 transition-all">Resume</a>
          </div>
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} Devansh Manchanda.
          </p>
        </div>
      </footer>
    </div>
  );
};

// --- SUB COMPONENTS ---

const SocialIcon = ({ href, icon, label }) => (
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
  <div className="mb-16 text-center md:text-left">
    <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 font-semibold tracking-wide text-xs uppercase rounded-full mb-3 border border-blue-100">{subtitle}</span>
    <h2 className="text-4xl font-bold text-slate-900 tracking-tight">{title}</h2>
  </div>
);

const ExperienceCard = ({ role, company, period, type, achievements, icon, color }) => {
  const colorClasses = {
    blue: 'bg-blue-100/50 text-blue-700',
    indigo: 'bg-indigo-100/50 text-indigo-700',
    emerald: 'bg-emerald-100/50 text-emerald-700',
  };

  return (
    <div className="group relative bg-white/60 backdrop-blur-lg p-5 rounded-3xl border border-white/60 hover:border-blue-300/50 shadow-sm hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300 hover:-translate-y-1">
      <div className="flex flex-col md:flex-row md:items-start gap-3 mb-3">
        <div className={`p-2.5 rounded-2xl ${colorClasses[color]} group-hover:scale-110 transition-transform duration-300 shadow-inner`}>
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap justify-between items-start gap-2">
            <div>
              <h3 className="font-display text-lg font-bold text-slate-900 leading-tight">{role}</h3>
              <div className="text-slate-600 font-medium text-sm mt-0.5">{company}</div>
            </div>
            <span className="text-[11px] font-bold px-2.5 py-0.5 bg-white/50 border border-white/60 text-slate-500 rounded-full">{period}</span>
          </div>
        </div>
      </div>
      <ul className="space-y-2 mb-3">
        {achievements.map((item, idx) => (
          <li key={idx} className="flex items-start text-slate-700 leading-relaxed text-sm">
            <span className="mt-1.5 mr-2.5 w-1.5 h-1.5 bg-blue-400/60 rounded-full flex-shrink-0 group-hover:bg-blue-600 transition-colors" />
            {item}
          </li>
        ))}
      </ul>
      <div className="pt-3 border-t border-slate-200/50 flex items-center justify-between">
        <span className="text-[10px] font-bold px-2.5 py-0.5 bg-slate-100/50 text-slate-500 rounded-full uppercase tracking-wider">{type}</span>
      </div>
    </div>
  );
};

const ProjectCard = ({ title, tags, description, metrics, link, icon, color }) => {
  const colorClasses = {
    orange: 'bg-orange-100/50 text-orange-700',
    purple: 'bg-purple-100/50 text-purple-700',
    rose: 'bg-rose-100/50 text-rose-700',
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-200 hover:border-blue-400 transition-all shadow-sm hover:shadow-xl hover:shadow-blue-900/5 group h-full flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
              {tag}
            </span>
          ))}
        </div>
        {icon && (
          <div className={`p-3 rounded-xl ${colorClasses[color] || 'bg-blue-100/50 text-blue-700'} transition-transform duration-300 group-hover:scale-110`}>
            {icon}
          </div>
        )}
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{title}</h3>
      <p className="text-slate-600 mb-6 leading-relaxed flex-grow">{description}</p>
      <div className="bg-slate-50/50 rounded-xl p-5 space-y-3 border border-slate-100 mt-auto mb-6">
        {metrics.map((metric, idx) => (
          <div key={idx} className="flex items-center text-sm font-medium text-slate-700">
            <Zap size={16} className="text-amber-500 mr-3 fill-current" />
            {metric}
          </div>
        ))}
      </div>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full px-6 py-3 bg-slate-900 text-white font-semibold rounded-xl hover:bg-blue-600 transition-all group-hover:shadow-lg group-hover:shadow-blue-500/20"
        >
          View Project <ArrowRight size={18} className="ml-2" />
        </a>
      )}
    </div>
  );
};

const SkillCategory = ({ icon, title, skills }) => (
  <div className="p-8 bg-white/60 backdrop-blur-md rounded-2xl border border-slate-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300">
    <div className="flex items-center mb-6">
      <div className="p-2.5 bg-white rounded-xl shadow-sm border border-slate-100 mr-4">
        {icon}
      </div>
      <h3 className="font-bold text-lg text-slate-900">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, i) => (
        <span key={i} className="px-3 py-1.5 bg-white border border-slate-200 text-slate-600 text-sm font-medium rounded-lg hover:border-blue-300 hover:text-blue-600 transition-colors cursor-default">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const TimelineItem = ({ title, org, period, details }) => (
  <div className="relative group">
    <div className="absolute -left-[45px] top-1 h-6 w-6 rounded-full border-4 border-white bg-slate-300 group-hover:bg-blue-600 transition-colors shadow-sm" />
    <h4 className="font-bold text-slate-900 text-lg">{title}</h4>
    <p className="text-slate-600 font-medium">{org}</p>
    <div className="flex justify-between items-center mt-2 text-sm text-slate-500">
      <span>{period}</span>
      <span className="font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full">{details}</span>
    </div>
  </div>
);

const LeadershipCard = ({ role, org, desc }) => (
  <div className="flex items-start p-5 bg-white/70 backdrop-blur-sm rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
    <div className="min-w-0">
      <div className="flex justify-between items-center mb-1">
        <h4 className="font-bold text-slate-900 text-base">{role}</h4>
        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 border border-slate-200 px-2 rounded-full">POR</span>
      </div>
      <p className="text-blue-600 text-xs font-bold mb-3 uppercase tracking-wide">{org}</p>
      <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default Portfolio;
