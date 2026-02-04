// 100 Job Portals Database - Comprehensive MilegaJob Portal Directory
// Organized into 4 categories with full metadata

export interface JobPortal {
  logo?: string; // Logo image path
  id: number;
  name: string;
  description: string;
  url: string;
  category: "Freshers & Entry-Level" | "Remote & AI/Tech" | "Experienced & Corporate" | "Government & Schemes";
  icon: string; // Emoji icon for visual identification
  logo?: string; // Logo image path
  rating: number; // 1-5 stars
  specialization?: string; // Key specialization or focus
  builtFor: string; // Who should use this portal
}

export const jobPortals: JobPortal[] = [
  // ============================================
  // CATEGORY 1: FRESHERS & ENTRY-LEVEL (25)
  // ============================================
  {
    id: 1,
    name: "Internshala",
    description: "Best for internships and first jobs across India",
    url: "https://internshala.com",
    category: "Freshers & Entry-Level",
    icon: "🎓",
    logo: "/logos/internshala.com-favicon.ico",
    rating: 4.7,
    specialization: "Internships & Entry-Level",
    builtFor: "Students and fresh graduates"
  },
    {
    id: 2,
    name: "Freshersworld",
    description: "Specialized in campus and entry-level hiring",
    url: "https://www.freshersworld.com",
    category: "Freshers & Entry-Level",
    icon: "🌱",
    rating: 4.5,
    specialization: "Campus & Freshers",
    builtFor: "Graduating students and freshers",
    logo: "/logos/freshersworld.com-favicon.ico"
  },
    {
    id: 3,
    name: "Unstop",
    description: "Hiring through competitions and hackathons",
    url: "https://www.unstop.com",
    category: "Freshers & Entry-Level",
    icon: "🏆",
    rating: 4.6,
    specialization: "Competition-Based Hiring",
    builtFor: "Tech-savvy freshers and students",
    logo: "/logos/unstop.com-favicon.ico"
  },
    {
    id: 4,
    name: "Apna",
    description: "Blue-collar and entry-level grey-collar roles",
    url: "https://www.apnaapp.com",
    category: "Freshers & Entry-Level",
    icon: "👷",
    rating: 4.4,
    specialization: "Blue & Grey Collar",
    builtFor: "Entry-level and skilled workers",
    logo: "/logos/apnaapp.com-favicon.ico"
  },
    {
    id: 5,
    name: "WorkIndia",
    description: "Dedicated to entry-level and technician roles",
    url: "https://www.workindia.in",
    category: "Freshers & Entry-Level",
    icon: "🔧",
    rating: 4.3,
    specialization: "Entry-Level & Technicians",
    builtFor: "Freshers and technical entry-level candidates",
    logo: "/logos/workindia.in-favicon.ico"
  },
    {
    id: 6,
    name: "FirstJob",
    description: "Niche platform for graduating students",
    url: "https://www.firstjob.com",
    category: "Freshers & Entry-Level",
    icon: "🚀",
    rating: 4.2,
    specialization: "First-Time Job Seekers",
    builtFor: "Graduating students"
  },
    {
    id: 7,
    name: "Youth4Work",
    description: "Skill-based testing and hiring for freshers",
    url: "https://www.youth4work.com",
    category: "Freshers & Entry-Level",
    icon: "💪",
    rating: 4.4,
    specialization: "Skill Assessment & Hiring",
    builtFor: "Freshers with verified skills",
    logo: "/logos/youth4work.com-favicon.ico"
  },
    {
    id: 8,
    name: "AasaanJobs",
    description: "Focused on entry-level recruitment",
    url: "https://www.aasaanjobs.com",
    category: "Freshers & Entry-Level",
    icon: "📋",
    rating: 4.1,
    specialization: "Easy Entry-Level Hiring",
    builtFor: "Entry-level job seekers",
    logo: "/logos/aasaanjobs.com-favicon.ico"
  },
    {
    id: 9,
    name: "Monster India (Foundit)",
    description: "Strong fresher-focused category with AI recommendations",
    url: "https://www.foundit.in",
    category: "Freshers & Entry-Level",
    icon: "🎯",
    rating: 4.6,
    specialization: "AI-Powered Matching",
    builtFor: "Freshers to experienced professionals",
    logo: "/logos/foundit.in-favicon.ico"
  },
    {
    id: 10,
    name: "QuikrJobs",
    description: "Local and entry-level job listings",
    url: "https://jobs.quikr.com",
    category: "Freshers & Entry-Level",
    icon: "📍",
    rating: 4.0,
    specialization: "Local & Flexible Jobs",
    builtFor: "Local and entry-level seekers"
  },
    {
    id: 11,
    name: "Indeed India",
    description: "Broad entry-level aggregator with global reach",
    url: "https://in.indeed.com",
    category: "Freshers & Entry-Level",
    icon: "🌐",
    rating: 4.5,
    specialization: "Global Aggregator",
    builtFor: "All job seekers including freshers",
    logo: "/logos/in.indeed.com-favicon.ico"
  },
    {
    id: 12,
    name: "Naukri Freshers",
    description: "Dedicated portal by Naukri for graduates",
    url: "https://freshers.naukri.com",
    category: "Freshers & Entry-Level",
    icon: "🎓",
    rating: 4.6,
    specialization: "Fresher-Specific",
    builtFor: "Fresh graduates only"
  },
    {
    id: 13,
    name: "Shine.com",
    description: "High volume of entry-level corporate roles",
    url: "https://www.shine.com",
    category: "Freshers & Entry-Level",
    icon: "✨",
    rating: 4.4,
    specialization: "Corporate Entry-Level",
    builtFor: "Fresh graduates in corporate sector",
    logo: "/logos/shine.com-favicon.ico"
  },
    {
    id: 14,
    name: "PlacementIndia",
    description: "Career portal with deep fresher listings",
    url: "https://www.placementindia.com",
    category: "Freshers & Entry-Level",
    icon: "📊",
    rating: 4.2,
    specialization: "Placement-Focused",
    builtFor: "College placement seekers",
    logo: "/logos/placementindia.com-favicon.ico"
  },
    {
    id: 15,
    name: "MyAmcat",
    description: "Jobs based on AMCAT assessment scores",
    url: "https://www.myamcat.com",
    category: "Freshers & Entry-Level",
    icon: "📝",
    rating: 4.3,
    specialization: "Assessment-Based",
    builtFor: "Freshers with AMCAT scores",
    logo: "/logos/myamcat.com-favicon.ico"
  },
    {
    id: 16,
    name: "Cozub",
    description: "Emerging portal for early-career tech roles",
    url: "https://cozub.com",
    category: "Freshers & Entry-Level",
    icon: "💻",
    rating: 4.1,
    specialization: "Early-Career Tech",
    builtFor: "Junior developers and tech roles"
  },
    {
    id: 17,
    name: "StepOut",
    description: "Creative and non-tech internships",
    url: "https://www.stepoutjobs.com",
    category: "Freshers & Entry-Level",
    icon: "🎨",
    rating: 4.2,
    specialization: "Creative Internships",
    builtFor: "Creative and design students"
  },
    {
    id: 18,
    name: "Hellomeets",
    description: "Community-based hiring for interns",
    url: "https://www.hellomeets.com",
    category: "Freshers & Entry-Level",
    icon: "👥",
    rating: 4.0,
    specialization: "Community Hiring",
    builtFor: "Interns and college students",
    logo: "/logos/hellomeets.com-favicon.ico"
  },
    {
    id: 19,
    name: "LetsIntern",
    description: "Internship aggregator across India",
    url: "https://www.letsintern.com",
    category: "Freshers & Entry-Level",
    icon: "📱",
    rating: 4.3,
    specialization: "Internship Aggregator",
    builtFor: "Students seeking internships",
    logo: "/logos/letsintern.com-favicon.ico"
  },
    {
    id: 20,
    name: "Twenty19",
    description: "Student internship and project portal",
    url: "https://www.twenty19.com",
    category: "Freshers & Entry-Level",
    icon: "🎯",
    rating: 4.1,
    specialization: "Student Projects",
    builtFor: "College students and interns"
  },
    {
    id: 21,
    name: "InternTheory",
    description: "Skill-based internships in India",
    url: "https://www.interntheory.com",
    category: "Freshers & Entry-Level",
    icon: "🏫",
    rating: 4.2,
    specialization: "Skill-Based Internships",
    builtFor: "Students learning new skills",
    logo: "/logos/interntheory.com-favicon.ico"
  },
    {
    id: 22,
    name: "HelloIntern",
    description: "Global and local internship opportunities",
    url: "https://www.hellointern.com",
    category: "Freshers & Entry-Level",
    icon: "🌍",
    rating: 4.3,
    specialization: "Global Internships",
    builtFor: "Students for domestic and international roles",
    logo: "/logos/hellointern.com-favicon.ico"
  },
    {
    id: 23,
    name: "Wisdom Jobs",
    description: "Skill testing and entry-level hiring",
    url: "https://www.wisdomjobs.com",
    category: "Freshers & Entry-Level",
    icon: "🧠",
    rating: 4.0,
    specialization: "Skill Testing",
    builtFor: "Freshers with tested skills"
  },
    {
    id: 24,
    name: "Jooble India",
    description: "Aggregator for all fresher listings",
    url: "https://jooble.org/jobs/india",
    category: "Freshers & Entry-Level",
    icon: "📲",
    rating: 4.2,
    specialization: "Job Aggregator",
    builtFor: "Freshers across all sectors",
    logo: "/logos/jooble.org-favicon.ico"
  },
    {
    id: 25,
    name: "GrabJobs",
    description: "Mobile-first hiring for entry-level roles",
    url: "https://www.grabjobs.co",
    category: "Freshers & Entry-Level",
    icon: "📞",
    rating: 4.4,
    specialization: "Mobile-First",
    builtFor: "Entry-level candidates using mobile",
    logo: "/logos/grabjobs.co-favicon.ico"
  },

  // ============================================
  // CATEGORY 2: REMOTE & AI/TECH (35)
  // ============================================
    {
    id: 26,
    name: "Crossover",
    description: "High-paying AI-first remote roles globally",
    url: "https://www.crossover.com",
    category: "Remote & AI/Tech",
    icon: "💰",
    rating: 4.7,
    specialization: "AI & Remote",
    builtFor: "Senior remote tech professionals",
    logo: "/logos/crossover.com-favicon.ico"
  },
    {
    id: 27,
    name: "Remote OK",
    description: "Tech-focused remote job board",
    url: "https://remoteok.io",
    category: "Remote & AI/Tech",
    icon: "🏠",
    rating: 4.6,
    specialization: "Tech Remote",
    builtFor: "Remote tech workers",
    logo: "/logos/remoteok.io-favicon.ico"
  },
    {
    id: 28,
    name: "We Work Remotely",
    description: "Oldest and largest remote community",
    url: "https://weworkremotely.com",
    category: "Remote & AI/Tech",
    icon: "🌐",
    rating: 4.7,
    specialization: "Remote Community",
    builtFor: "Remote work seekers globally",
    logo: "/logos/weworkremotely.com-favicon.ico"
  },
    {
    id: 29,
    name: "Arc.dev",
    description: "AI-matched remote developer jobs",
    url: "https://arc.dev",
    category: "Remote & AI/Tech",
    icon: "🤖",
    rating: 4.6,
    specialization: "AI Matching",
    builtFor: "Remote developers",
    logo: "/logos/arc.dev-favicon.ico"
  },
    {
    id: 30,
    name: "Wellfound (AngelList)",
    description: "The go-to for AI startups and remote tech",
    url: "https://wellfound.com",
    category: "Remote & AI/Tech",
    icon: "🚀",
    rating: 4.7,
    specialization: "AI Startups",
    builtFor: "Tech professionals in startups",
    logo: "/logos/wellfound.com-favicon.ico"
  },
    {
    id: 31,
    name: "Cutshort",
    description: "AI-powered tech networking and hiring in India",
    url: "https://cutshort.io",
    category: "Remote & AI/Tech",
    icon: "🎯",
    rating: 4.5,
    specialization: "Indian Tech Market",
    builtFor: "Tech professionals in India",
    logo: "/logos/cutshort.io-favicon.ico"
  },
    {
    id: 32,
    name: "Hirect",
    description: "Direct chat with startup founders (remote-heavy)",
    url: "https://hirect.in",
    category: "Remote & AI/Tech",
    icon: "💬",
    rating: 4.4,
    specialization: "Direct Hiring",
    builtFor: "Remote tech professionals"
  },
    {
    id: 33,
    name: "FlexJobs",
    description: "Vetted, scam-free remote and flexible jobs",
    url: "https://www.flexjobs.com",
    category: "Remote & AI/Tech",
    icon: "✔️",
    rating: 4.8,
    specialization: "Vetted Remote",
    builtFor: "Serious remote job seekers",
    logo: "/logos/flexjobs.com-favicon.ico"
  },
    {
    id: 34,
    name: "Remote.co",
    description: "Curated remote roles for all industries",
    url: "https://remote.co/remote-jobs",
    category: "Remote & AI/Tech",
    icon: "📋",
    rating: 4.5,
    specialization: "Curated Remote",
    builtFor: "All remote professionals",
    logo: "/logos/remote.co-favicon.ico"
  },
    {
    id: 35,
    name: "Nodesk",
    description: "Curated list of remote companies and jobs",
    url: "https://nodesk.co",
    category: "Remote & AI/Tech",
    icon: "📚",
    rating: 4.4,
    specialization: "Remote Company Guide",
    builtFor: "Remote company seekers",
    logo: "/logos/nodesk.co-favicon.ico"
  },
    {
    id: 36,
    name: "Working Nomads",
    description: "Remote jobs for digital nomads",
    url: "https://www.workingnomads.co",
    category: "Remote & AI/Tech",
    icon: "🌍",
    rating: 4.5,
    specialization: "Digital Nomad",
    builtFor: "Location-independent workers",
    logo: "/logos/workingnomads.co-favicon.ico"
  },
    {
    id: 37,
    name: "JustRemote",
    description: "Hidden remote job discoverer",
    url: "https://justremote.co",
    category: "Remote & AI/Tech",
    icon: "🔍",
    rating: 4.3,
    specialization: "Hidden Jobs",
    builtFor: "Remote job hunters",
    logo: "/logos/justremote.co-favicon.ico"
  },
    {
    id: 38,
    name: "Remotive",
    description: "Tech and software focus for remote workers",
    url: "https://remotive.io",
    category: "Remote & AI/Tech",
    icon: "💻",
    rating: 4.6,
    specialization: "Tech Remote",
    builtFor: "Remote tech professionals",
    logo: "/logos/remotive.io-favicon.ico"
  },
    {
    id: 39,
    name: "Pangian",
    description: "Global remote community and jobs",
    url: "https://www.pangian.com",
    category: "Remote & AI/Tech",
    icon: "👥",
    rating: 4.4,
    specialization: "Global Community",
    builtFor: "Global remote workers",
    logo: "/logos/pangian.com-favicon.ico"
  },
    {
    id: 40,
    name: "Jobspresso",
    description: "Expertly curated remote tech and marketing roles",
    url: "https://jobspresso.co",
    category: "Remote & AI/Tech",
    icon: "⭐",
    rating: 4.5,
    specialization: "Curated Tech",
    builtFor: "Premium remote professionals",
    logo: "/logos/jobspresso.co-favicon.ico"
  },
    {
    id: 41,
    name: "SkipTheDrive",
    description: "Remote and telecommute listings",
    url: "https://www.skipthedrive.com",
    category: "Remote & AI/Tech",
    icon: "🚗",
    rating: 4.3,
    specialization: "All Remote",
    builtFor: "Remote job seekers",
    logo: "/logos/skipthedrive.com-favicon.ico"
  },
    {
    id: 42,
    name: "Authentic Jobs",
    description: "Remote jobs for designers and creatives",
    url: "https://www.authenticjobs.com",
    category: "Remote & AI/Tech",
    icon: "🎨",
    rating: 4.5,
    specialization: "Design & Creative",
    builtFor: "Remote designers and creatives",
    logo: "/logos/authenticjobs.com-favicon.ico"
  },
    {
    id: 43,
    name: "Dribbble Jobs",
    description: "Top-tier remote design roles",
    url: "https://dribbble.com/jobs",
    category: "Remote & AI/Tech",
    icon: "🎭",
    rating: 4.6,
    specialization: "Premium Design",
    builtFor: "Professional designers",
    logo: "/logos/dribbble.com-favicon.ico"
  },
    {
    id: 44,
    name: "Dice",
    description: "Specialized in tech, software, and AI roles",
    url: "https://www.dice.com",
    category: "Remote & AI/Tech",
    icon: "🎲",
    rating: 4.5,
    specialization: "Tech & AI",
    builtFor: "Tech professionals globally",
    logo: "/logos/dice.com-favicon.ico"
  },
    {
    id: 45,
    name: "Hirist",
    description: "India's premium tech and startup job portal",
    url: "https://hirist.com",
    category: "Remote & AI/Tech",
    icon: "🏆",
    rating: 4.6,
    specialization: "Premium Indian Tech",
    builtFor: "Tech professionals in India",
    logo: "/logos/hirist.com-favicon.ico"
  },
    {
    id: 46,
    name: "TechGig",
    description: "Tech-focused hiring and coding challenges",
    url: "https://www.techgig.com",
    category: "Remote & AI/Tech",
    icon: "⚙️",
    rating: 4.5,
    specialization: "Tech Challenges",
    builtFor: "Developers and tech professionals",
    logo: "/logos/techgig.com-favicon.ico"
  },
    {
    id: 47,
    name: "Stack Overflow Jobs",
    description: "Developer-centric job board",
    url: "https://stackoverflow.com/jobs",
    category: "Remote & AI/Tech",
    icon: "📚",
    rating: 4.4,
    specialization: "Developer Jobs",
    builtFor: "Programmers and developers",
    logo: "/logos/stackoverflow.com-favicon.ico"
  },
    {
    id: 48,
    name: "GitHub Jobs",
    description: "Developer-centric job board",
    url: "https://github.com/jobs",
    category: "Remote & AI/Tech",
    icon: "🐙",
    rating: 4.5,
    specialization: "Open Source",
    builtFor: "Open source developers",
    logo: "/logos/github.com-favicon.ico"
  },
    {
    id: 49,
    name: "Relocate.me",
    description: "Tech jobs that offer relocation and remote",
    url: "https://relocate.me",
    category: "Remote & AI/Tech",
    icon: "✈️",
    rating: 4.4,
    specialization: "Relocation",
    builtFor: "Tech professionals seeking relocation",
    logo: "/logos/relocate.me-favicon.ico"
  },
    {
    id: 50,
    name: "Honeypot",
    description: "Tech-focused for Europe/Remote",
    url: "https://www.honeypot.io",
    category: "Remote & AI/Tech",
    icon: "🍯",
    rating: 4.6,
    specialization: "European Tech",
    builtFor: "Tech professionals in Europe"
  },
    {
    id: 51,
    name: "Ottos",
    description: "Startup-specific tech hiring",
    url: "https://www.ottos.com",
    category: "Remote & AI/Tech",
    icon: "🚀",
    rating: 4.3,
    specialization: "Startup Tech",
    builtFor: "Tech professionals in startups",
    logo: "/logos/ottos.com-favicon.ico"
  },
    {
    id: 52,
    name: "Y Combinator Work at a Startup",
    description: "Elite startup roles globally",
    url: "https://www.ycombinator.com/jobs",
    category: "Remote & AI/Tech",
    icon: "👑",
    rating: 4.8,
    specialization: "Elite Startups",
    builtFor: "Top-tier startup professionals",
    logo: "/logos/ycombinator.com-favicon.ico"
  },
    {
    id: 53,
    name: "Built In",
    description: "Tech and startup hubs (Remote/Global)",
    url: "https://builtin.com",
    category: "Remote & AI/Tech",
    icon: "🏗️",
    rating: 4.6,
    specialization: "Tech Hubs",
    builtFor: "Tech professionals globally",
    logo: "/logos/builtin.com-favicon.ico"
  },
    {
    id: 54,
    name: "Gun.io",
    description: "Exclusive remote software gigs",
    url: "https://gun.io",
    category: "Remote & AI/Tech",
    icon: "🎯",
    rating: 4.5,
    specialization: "Exclusive Gigs",
    builtFor: "Senior software engineers",
    logo: "/logos/gun.io-favicon.ico"
  },
    {
    id: 55,
    name: "Toptal",
    description: "Freelance/Remote network for top 3% talent",
    url: "https://www.toptal.com",
    category: "Remote & AI/Tech",
    icon: "⭐",
    rating: 4.7,
    specialization: "Elite Freelance",
    builtFor: "Top 3% freelance professionals",
    logo: "/logos/toptal.com-favicon.ico"
  },
    {
    id: 56,
    name: "Guru",
    description: "Verified freelance and remote talent",
    url: "https://www.guru.com",
    category: "Remote & AI/Tech",
    icon: "🏅",
    rating: 4.3,
    specialization: "Verified Freelance",
    builtFor: "Freelance professionals",
    logo: "/logos/guru.com-favicon.ico"
  },
    {
    id: 57,
    name: "Fiverr Pro",
    description: "Specialized remote project work",
    url: "https://www.fiverr.com/pro",
    category: "Remote & AI/Tech",
    icon: "💼",
    rating: 4.4,
    specialization: "Project Marketplace",
    builtFor: "Freelance professionals",
    logo: "/logos/fiverr.com-favicon.ico"
  },
    {
    id: 58,
    name: "Upwork",
    description: "World's largest remote/freelance marketplace",
    url: "https://www.upwork.com",
    category: "Remote & AI/Tech",
    icon: "🌐",
    rating: 4.4,
    specialization: "Global Freelance",
    builtFor: "Freelancers worldwide",
    logo: "/logos/upwork.com-favicon.ico"
  },
    {
    id: 59,
    name: "Turing",
    description: "AI-matched remote developer roles globally",
    url: "https://www.turing.com",
    category: "Remote & AI/Tech",
    icon: "🤖",
    rating: 4.6,
    specialization: "AI Matching",
    builtFor: "Remote developers globally",
    logo: "/logos/turing.com-favicon.ico"
  },
    {
    id: 60,
    name: "Andela",
    description: "Remote engineering roles for global companies",
    url: "https://www.andela.com",
    category: "Remote & AI/Tech",
    icon: "🌍",
    rating: 4.5,
    specialization: "Global Engineering",
    builtFor: "Remote engineers globally",
    logo: "/logos/andela.com-favicon.ico"
  },

  // ============================================
  // CATEGORY 3: EXPERIENCED & CORPORATE (25)
  // ============================================
    {
    id: 61,
    name: "LinkedIn",
    description: "Networking-led professional hiring",
    url: "https://www.linkedin.com/jobs",
    category: "Experienced & Corporate",
    icon: "💼",
    rating: 4.8,
    specialization: "Professional Networking",
    builtFor: "All professionals with network"
  },
    {
    id: 62,
    name: "Naukri.com",
    description: "Market leader for Indian corporate roles",
    url: "https://www.naukri.com",
    category: "Experienced & Corporate",
    icon: "📊",
    rating: 4.7,
    specialization: "Indian Corporate",
    builtFor: "All corporate professionals",
    logo: "/logos/naukri.com-favicon.ico"
  },
    {
    id: 63,
    name: "Glassdoor",
    description: "Company reviews and salary-matched jobs",
    url: "https://www.glassdoor.com",
    category: "Experienced & Corporate",
    icon: "🔍",
    rating: 4.6,
    specialization: "Company Reviews",
    builtFor: "Job seekers wanting company insights",
    logo: "/logos/glassdoor.com-favicon.ico"
  },
    {
    id: 64,
    name: "TimesJobs",
    description: "Corporate hiring by the Times Group",
    url: "https://www.timesjobs.com",
    category: "Experienced & Corporate",
    icon: "📰",
    rating: 4.5,
    specialization: "Times Group",
    builtFor: "Corporate professionals"
  },
    {
    id: 65,
    name: "Foundit (Monster India)",
    description: "AI-driven recommendations for mid-senior roles",
    url: "https://www.foundit.in",
    category: "Experienced & Corporate",
    icon: "🎯",
    rating: 4.6,
    specialization: "AI Matching",
    builtFor: "Experienced professionals",
    logo: "/logos/foundit.in-favicon.ico"
  },
    {
    id: 66,
    name: "IIMJobs",
    description: "Premium hiring for management and MBA roles",
    url: "https://www.iimjobs.com",
    category: "Experienced & Corporate",
    icon: "🏆",
    rating: 4.7,
    specialization: "Management & MBA",
    builtFor: "Management professionals",
    logo: "/logos/iimjobs.com-favicon.ico"
  },
    {
    id: 67,
    name: "HeadHonchos",
    description: "Senior-level and executive recruitment",
    url: "https://www.headhonchos.com",
    category: "Experienced & Corporate",
    icon: "👔",
    rating: 4.6,
    specialization: "Executive",
    builtFor: "Senior executives",
    logo: "/logos/headhonchos.com-favicon.ico"
  },
    {
    id: 68,
    name: "Careernet",
    description: "Professional recruitment and staffing services",
    url: "https://www.careernet.com",
    category: "Experienced & Corporate",
    icon: "🤝",
    rating: 4.4,
    specialization: "Professional Staffing",
    builtFor: "Corporate professionals",
    logo: "/logos/careernet.com-favicon.ico"
  },
    {
    id: 69,
    name: "Kelly Services",
    description: "Specialized corporate staffing",
    url: "https://www.kellyservices.us",
    category: "Experienced & Corporate",
    icon: "👥",
    rating: 4.5,
    specialization: "Corporate Staffing",
    builtFor: "Temporary and permanent roles",
    logo: "/logos/kellyservices.us-favicon.ico"
  },
    {
    id: 70,
    name: "Randstad India",
    description: "Global leader in permanent recruitment",
    url: "https://www.randstad.co.in",
    category: "Experienced & Corporate",
    icon: "🌐",
    rating: 4.6,
    specialization: "Global Recruitment",
    builtFor: "Corporate professionals"
  },
    {
    id: 71,
    name: "ManpowerGroup",
    description: "Professional and corporate hiring",
    url: "https://www.manpowergroup.com/jobs",
    category: "Experienced & Corporate",
    icon: "💪",
    rating: 4.5,
    specialization: "Professional Staffing",
    builtFor: "Corporate professionals",
    logo: "/logos/manpowergroup.com-favicon.ico"
  },
    {
    id: 72,
    name: "Adecco India",
    description: "Large-scale corporate job board",
    url: "https://www.adeccoindia.com",
    category: "Experienced & Corporate",
    icon: "📋",
    rating: 4.4,
    specialization: "Corporate Staffing",
    builtFor: "Corporate professionals"
  },
    {
    id: 73,
    name: "Jobvite",
    description: "ATS-integrated hiring portal",
    url: "https://www.jobvite.com",
    category: "Experienced & Corporate",
    icon: "⚙️",
    rating: 4.5,
    specialization: "Enterprise ATS",
    builtFor: "Corporate professionals",
    logo: "/logos/jobvite.com-favicon.ico"
  },
    {
    id: 74,
    name: "CareerBuilder",
    description: "Global corporate job search engine",
    url: "https://www.careerbuilder.com",
    category: "Experienced & Corporate",
    icon: "🏢",
    rating: 4.4,
    specialization: "Global Corporate",
    builtFor: "Corporate professionals",
    logo: "/logos/careerbuilder.com-favicon.ico"
  },
    {
    id: 75,
    name: "SimplyHired",
    description: "Global job aggregator for all sectors",
    url: "https://www.simplyhired.com",
    category: "Experienced & Corporate",
    icon: "🔗",
    rating: 4.3,
    specialization: "Job Aggregator",
    builtFor: "All professionals",
    logo: "/logos/simplyhired.com-favicon.ico"
  },
    {
    id: 76,
    name: "Ladders",
    description: "High-paying ($100k+) corporate roles",
    url: "https://www.theladders.com",
    category: "Experienced & Corporate",
    icon: "💰",
    rating: 4.6,
    specialization: "Executive Search",
    builtFor: "High-earning professionals",
    logo: "/logos/theladders.com-favicon.ico"
  },
    {
    id: 77,
    name: "Zippia",
    description: "Career mapping and corporate hiring",
    url: "https://www.zippia.com",
    category: "Experienced & Corporate",
    icon: "🗺️",
    rating: 4.4,
    specialization: "Career Intelligence",
    builtFor: "Career-focused professionals",
    logo: "/logos/zippia.com-favicon.ico"
  },
    {
    id: 78,
    name: "Google for Jobs",
    description: "The ultimate search aggregator",
    url: "https://www.google.com/jobs",
    category: "Experienced & Corporate",
    icon: "🔍",
    rating: 4.9,
    specialization: "Universal Aggregator",
    builtFor: "All job seekers",
    logo: "/logos/google.com-favicon.ico"
  },
    {
    id: 79,
    name: "Sarkari Exam (Corporate Sections)",
    description: "Corporate sections within career portals",
    url: "https://www.sarkarijob.net",
    category: "Experienced & Corporate",
    icon: "📚",
    rating: 4.2,
    specialization: "Government & Corporate",
    builtFor: "All professionals",
    logo: "/logos/sarkarijob.net-favicon.ico"
  },
    {
    id: 80,
    name: "JobsForHer",
    description: "Dedicated to women returning to the workforce",
    url: "https://www.jobsforher.com",
    category: "Experienced & Corporate",
    icon: "👩",
    rating: 4.5,
    specialization: "Women Professionals",
    builtFor: "Women returning to work",
    logo: "/logos/jobsforher.com-favicon.ico"
  },
    {
    id: 81,
    name: "Sheroes",
    description: "Professional networking and jobs for women",
    url: "https://www.sheroes.in",
    category: "Experienced & Corporate",
    icon: "👩‍💼",
    rating: 4.6,
    specialization: "Women Professionals",
    builtFor: "Indian women professionals"
  },
    {
    id: 82,
    name: "Vahak",
    description: "Logistics and supply chain professional jobs",
    url: "https://www.vahak.com",
    category: "Experienced & Corporate",
    icon: "🚚",
    rating: 4.3,
    specialization: "Logistics & Supply Chain",
    builtFor: "Logistics professionals"
  },
    {
    id: 83,
    name: "ClickJobs",
    description: "Specialized corporate job alerts",
    url: "https://www.clickjobs.com",
    category: "Experienced & Corporate",
    icon: "🔔",
    rating: 4.2,
    specialization: "Job Alerts",
    builtFor: "Corporate job seekers"
  },
    {
    id: 84,
    name: "CareerJet",
    description: "Aggregator for Indian and global markets",
    url: "https://www.careerjet.com",
    category: "Experienced & Corporate",
    icon: "✈️",
    rating: 4.3,
    specialization: "Global Aggregator",
    builtFor: "International professionals",
    logo: "/logos/careerjet.com-favicon.ico"
  },
    {
    id: 85,
    name: "WayUp",
    description: "Early career and corporate training roles",
    url: "https://www.wayup.com",
    category: "Experienced & Corporate",
    icon: "📈",
    rating: 4.4,
    specialization: "Early Career Training",
    builtFor: "Young professionals",
    logo: "/logos/wayup.com-favicon.ico"
  },

  // ============================================
  // CATEGORY 4: GOVERNMENT & SCHEMES (15)
  // ============================================
    {
    id: 86,
    name: "National Career Service (NCS)",
    description: "Official Government of India portal",
    url: "https://www.ncs.gov.in",
    category: "Government & Schemes",
    icon: "🇮🇳",
    rating: 4.6,
    specialization: "Official Government",
    builtFor: "All Indian job seekers",
    logo: "/logos/ncs.gov.in-favicon.ico"
  },
    {
    id: 87,
    name: "Sarkari Result",
    description: "Leading govt exam and job notification site",
    url: "https://www.sarkarisresult.com",
    category: "Government & Schemes",
    icon: "📢",
    rating: 4.5,
    specialization: "Government Notifications",
    builtFor: "Government job aspirants",
    logo: "/logos/sarkarisresult.com-favicon.ico"
  },
    {
    id: 88,
    name: "FreeJobAlert",
    description: "Instant alerts for every govt sector",
    url: "https://www.freejobsalert.com",
    category: "Government & Schemes",
    icon: "🔔",
    rating: 4.4,
    specialization: "Job Alerts",
    builtFor: "Government job seekers",
    logo: "/logos/freejobsalert.com-favicon.ico"
  },
    {
    id: 89,
    name: "Employment News (Rozgar Samachar)",
    description: "Official weekly publication by Government",
    url: "https://www.employmentnews.gov.in",
    category: "Government & Schemes",
    icon: "📰",
    rating: 4.7,
    specialization: "Official Publication",
    builtFor: "Government job seekers"
  },
    {
    id: 90,
    name: "Jagran Josh Jobs",
    description: "Educational and govt job news",
    url: "https://www.jagranjosh.com/jobs",
    category: "Government & Schemes",
    icon: "🎓",
    rating: 4.3,
    specialization: "Education & Government",
    builtFor: "Students and job seekers",
    logo: "/logos/jagranjosh.com-favicon.ico"
  },
    {
    id: 91,
    name: "IndGovtJobs",
    description: "Simple listing for all central/state govt jobs",
    url: "https://www.indgovtjobs.gov.in",
    category: "Government & Schemes",
    icon: "📋",
    rating: 4.4,
    specialization: "All Government Jobs",
    builtFor: "Government job seekers"
  },
    {
    id: 92,
    name: "SSC.nic.in",
    description: "Staff Selection Commission official portal",
    url: "https://www.ssc.nic.in",
    category: "Government & Schemes",
    icon: "✅",
    rating: 4.8,
    specialization: "SSC Exams",
    builtFor: "SSC exam candidates",
    logo: "/logos/ssc.nic.in-favicon.ico"
  },
    {
    id: 93,
    name: "UPSC.gov.in",
    description: "Civil Services and high-level govt hiring",
    url: "https://www.upsc.gov.in",
    category: "Government & Schemes",
    icon: "👑",
    rating: 4.9,
    specialization: "IAS/IPS/IFOS",
    builtFor: "Civil services aspirants",
    logo: "/logos/upsc.gov.in-favicon.ico"
  },
    {
    id: 94,
    name: "IBPS.in",
    description: "Official banking sector recruitment",
    url: "https://www.ibps.in",
    category: "Government & Schemes",
    icon: "🏦",
    rating: 4.8,
    specialization: "Banking Sector",
    builtFor: "Banking aspirants"
  },
    {
    id: 95,
    name: "Railway Recruitment Board (RRB)",
    description: "Dedicated railway jobs",
    url: "https://www.rrbgoindigo.gov.in",
    category: "Government & Schemes",
    icon: "🚂",
    rating: 4.7,
    specialization: "Railway Jobs",
    builtFor: "Railway job aspirants"
  },
    {
    id: 96,
    name: "Defence Jobs (Join Indian Armed Forces)",
    description: "Official armed forces recruitment",
    url: "https://www.joinindianarmy.nic.in",
    category: "Government & Schemes",
    icon: "🎖️",
    rating: 4.8,
    specialization: "Armed Forces",
    builtFor: "Defence job aspirants",
    logo: "/logos/joinindianarmy.nic.in-favicon.ico"
  },
    {
    id: 97,
    name: "Sarkari Naukri",
    description: "Generic but high-traffic govt aggregator",
    url: "https://www.sarkarinaukri.com",
    category: "Government & Schemes",
    icon: "💼",
    rating: 4.3,
    specialization: "Government Aggregator",
    builtFor: "Government job seekers",
    logo: "/logos/sarkarinaukri.com-favicon.ico"
  },
    {
    id: 98,
    name: "Pradhan Mantri Kaushal Vikas Yojana (PMKVY)",
    description: "Skill-based jobs and training",
    url: "https://www.pmkvyofficial.org",
    category: "Government & Schemes",
    icon: "🏫",
    rating: 4.4,
    specialization: "Skill Training",
    builtFor: "Skill-based learners"
  },
    {
    id: 99,
    name: "Apprenticeship India",
    description: "Official portal for govt apprenticeships",
    url: "https://www.apprenticeshipindia.gov.in",
    category: "Government & Schemes",
    icon: "👨‍🏫",
    rating: 4.5,
    specialization: "Apprenticeships",
    builtFor: "Apprenticeship seekers"
  },
    {
    id: 100,
    name: "GovtJobsLive",
    description: "Real-time updates on govt schemes and openings",
    url: "https://www.govtjobslive.com",
    category: "Government & Schemes",
    icon: "⚡",
    rating: 4.4,
    specialization: "Real-Time Updates",
    builtFor: "Government job seekers",
    logo: "/logos/govtjobslive.com-favicon.ico"
  }
];

// Helper function to get portals by category
export function getPortalsByCategory(category: JobPortal['category']): JobPortal[] {
  return jobPortals.filter(portal => portal.category === category);
}

// Helper function to get all categories
export function getAllCategories(): JobPortal['category'][] {
  const categories = new Set<JobPortal['category']>();
  jobPortals.forEach(portal => categories.add(portal.category));
  return Array.from(categories);
}

// Helper function to get stats by category
export function getCategoryStats() {
  const categories = getAllCategories();
  return categories.map(category => ({
    category,
    count: getPortalsByCategory(category).length,
    avgRating: (getPortalsByCategory(category).reduce((sum, p) => sum + p.rating, 0) / getPortalsByCategory(category).length).toFixed(1)
  }));
}

// Helper function to search portals
export function searchPortals(query: string): JobPortal[] {
  const lowerQuery = query.toLowerCase();
  return jobPortals.filter(portal =>
    portal.name.toLowerCase().includes(lowerQuery) ||
    portal.description.toLowerCase().includes(lowerQuery) ||
    portal.specialization?.toLowerCase().includes(lowerQuery)
  );
}
