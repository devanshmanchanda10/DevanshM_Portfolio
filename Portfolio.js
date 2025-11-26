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
  Download,
  Database,
  Search,
  Layout,
  MousePointer2
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
      className={`text-sm font-medium transition-all duration-300 relative px-2 ${
        activeSection === id 
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
      {/* 1. Base Grid Pattern */}
      <div className="fixed inset-0 z-[-1] bg-slate-50">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>
      
      {/* 2. Colorful Gradient Blobs */}
      <div className="fixed top-0 -left-4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob z-[-1]"></div>
      <div className="fixed top-0 -right-4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 z-[-1]"></div>
      <div className="fixed -bottom-8 left-20 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 z-[-1]"></div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md border-slate-200/50 py-4 shadow-sm' 
          : 'bg-transparent border-transparent py-6'
      }`}>
        <div className="container mx-auto px-6 max-w-5xl flex justify-between items-center">
          <div className="font-bold text-2xl tracking-tighter text-slate-900 flex items-center">
            DM<span className="text-blue-600">.</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <NavLink id="home" label="Home" />
            <NavLink id="experience" label="Experience" />
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

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 relative">
        <div className="container mx-auto max-w-5xl">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-slate-200 text-blue-700 text-sm font-semibold mb-8 shadow-sm animate-fade-in-up">
              <span className="relative flex h-2.5 w-2.5 mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
              </span>
              Aspiring Product Manager
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-slate-900 leading-[1.1] mb-8 tracking-tight">
              Solving real world problems  that <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">that show real impact.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-10 max-w-2xl font-light">
              Hi, I'm <strong className="text-slate-900 font-semibold">Devansh</strong>. 
              I blend <span className="bg-blue-50 text-blue-700 px-1 rounded font-medium">product sense</span> with <span className="bg-purple-50 text-purple-700 px-1 rounded font-medium">analytical knowledge</span> to build better user experience  .
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollToSection('experience')}
                className="group flex items-center px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 hover:shadow-blue-600/40 transform hover:-translate-y-1"
              >
                Explore My Work
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="flex gap-3 items-center ml-2">
                <SocialIcon href="https://www.linkedin.com/in/devansh-manchanda-dm1111/" icon={<Linkedin size={22} />} label="LinkedIn" />
                <SocialIcon href="mailto:manchandadevansh10@gmail.com" icon={<Mail size={22} />} label="Email" />
              </div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-slate-200/60 flex flex-wrap gap-y-4 gap-x-12 text-sm text-slate-500 font-medium">
              <div className="flex items-center"><MapPin size={18} className="mr-2 text-blue-500"/> Gurugram, India</div>
              <div className="flex items-center"><Phone size={18} className="mr-2 text-blue-500"/> +91 9821182683</div>
              <div className="flex items-center"><MousePointer2 size={18} className="mr-2 text-blue-500"/>manchandadevansh10@gmail.com</div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 relative">
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <SectionHeader title="Work Experience" subtitle="My Journey" />
          
          <div className="space-y-8">
            <ExperienceCard 
              role="Product Manager Intern"
              company="CashKaro.com"
              period="June - Nov 2025"
              type="Fintech"
              gradient="from-yellow-500 to-orange-500"
              icon={<Zap className="w-6 h-6 text-white" />}
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
              gradient="from-blue-500 to-cyan-500"
              icon={<BarChart2 className="w-6 h-6 text-white" />}
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
              gradient="from-emerald-500 to-green-500"
              icon={<Users className="w-6 h-6 text-white" />}
              achievements={[
                "Generated 200+ Tier-1 college leads via embedded CTAs; converted 20% into paid users.",
                "Executed LinkedIn content strategy that significantly boosted post engagement."
              ]}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 relative">
        {/* Subtle background shift for projects */}
        <div className="absolute inset-0 bg-white/40 skew-y-1 transform origin-top-left -z-10"></div>
        
        <div className="container mx-auto px-6 max-w-5xl">
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
            />
            
            <ProjectCard 
              title="PRD to MVP Automation"
              tags={['n8n', 'AI/LLM', 'Automation']}
              description="Built an automated workflow connecting structured Excel inputs to instant MVP generation."
              metrics={[
                "Automated PRD generation from raw inputs",
                "Enabled instant prototyping on Replit via AI prompts"
              ]}
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

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <div className="container mx-auto px-6 max-w-5xl">
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
        <div className="container mx-auto px-6 max-w-5xl">
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
        {/* Abstract footer shape */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500"></div>
        
        <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
          <h2 className="text-3xl font-bold text-white mb-6">Let's build something great together.</h2>
          <div className="flex justify-center gap-8 mb-10">
            <a href="mailto:manchandadevansh10@gmail.com" className="hover:text-white hover:underline decoration-blue-500 underline-offset-4 transition-all">Email</a>
            <a href="#" className="hover:text-white hover:underline decoration-blue-500 underline-offset-4 transition-all">LinkedIn</a>
            <a href="#" className="hover:text-white hover:underline decoration-blue-500 underline-offset-4 transition-all">Resume</a>
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
    className="p-3 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full text-slate-600 hover:text-blue-600 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/20 transition-all transform hover:-translate-y-1"
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

const ExperienceCard = ({ role, company, period, type, achievements, icon, gradient }) => (
  <div className="group relative bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-slate-200/60 hover:border-blue-300/50 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300">
    <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
      <ExternalLink size={20} className="text-slate-400 hover:text-blue-600" />
    </div>
    <div className="flex flex-col md:flex-row md:items-start gap-5 mb-6">
      <div className={`p-4 rounded-xl bg-gradient-to-br ${gradient} shadow-lg shadow-gray-200 group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold text-slate-900">{role}</h3>
        <div className="text-slate-500 font-medium mt-1 flex items-center">
          {company} 
          <span className="mx-2 text-slate-300">•</span> 
          <span className="text-slate-400 text-sm bg-slate-100 px-2 py-0.5 rounded">{period}</span>
        </div>
      </div>
    </div>
    <ul className="space-y-4">
      {achievements.map((item, idx) => (
        <li key={idx} className="flex items-start text-slate-600 leading-relaxed">
          <span className="mt-2.5 mr-3 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />
          {item}
        </li>
      ))}
    </ul>
    <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between">
      <span className="text-xs font-bold px-3 py-1 bg-slate-100 text-slate-600 rounded-full uppercase tracking-wider">{type}</span>
    </div>
  </div>
);

const ProjectCard = ({ title, tags, description, metrics }) => (
  <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-200 hover:border-blue-400 transition-all shadow-sm hover:shadow-xl hover:shadow-blue-900/5 group">
    <div className="flex flex-wrap gap-2 mb-4">
      {tags.map((tag, i) => (
        <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
          {tag}
        </span>
      ))}
    </div>
    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{title}</h3>
    <p className="text-slate-600 mb-8 leading-relaxed">{description}</p>
    <div className="bg-slate-50/50 rounded-xl p-5 space-y-3 border border-slate-100">
      {metrics.map((metric, idx) => (
        <div key={idx} className="flex items-center text-sm font-medium text-slate-700">
          <Zap size={16} className="text-amber-500 mr-3 fill-current" />
          {metric}
        </div>
      ))}
    </div>
  </div>
);

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
