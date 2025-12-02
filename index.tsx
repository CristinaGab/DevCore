import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { 
  ExternalLink, Code, Database, FileCode, Terminal, Globe, BookOpen, 
  Sparkles, ArrowRight, Server, Cpu, Layers, Braces, Hash, 
  FileJson, Layout, BarChart3, Binary, HardDrive, Network, Table, Box,
  Search, X, Check, Crown, GraduationCap
} from "lucide-react";

// Types for our resource cards
interface ResourceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  url: string;
  gradient: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ title, description, icon, url, gradient }) => {
  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative p-6 bg-gray-900 rounded-3xl border border-gray-800 hover:border-gray-700 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-900/10 overflow-hidden flex flex-col"
    >
      {/* Hover Gradient Background Effect */}
      <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500 -mr-20 -mt-20 pointer-events-none rounded-full`}></div>

      <div className="relative z-10 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-6">
          <div className="w-14 h-14 rounded-2xl bg-gray-800 flex items-center justify-center text-gray-200 group-hover:scale-110 group-hover:text-white transition-all duration-300 ring-1 ring-white/5 shadow-inner">
            {icon}
          </div>
          <div className="p-2 rounded-full bg-gray-800/50 text-gray-500 group-hover:text-white transition-colors">
            <ExternalLink size={16} />
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
          {title}
        </h3>
        <p className="text-gray-400 text-sm font-light leading-relaxed group-hover:text-gray-300 transition-colors flex-1">
          {description}
        </p>
      </div>
    </a>
  );
};

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
  gradient: string;
  url: string;
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price, period, features, isPopular, buttonText, gradient, url }) => {
  return (
    <div className={`relative p-8 rounded-3xl border flex flex-col h-full transition-transform duration-500 hover:-translate-y-2 ${isPopular ? 'bg-gray-900/80 border-fuchsia-500/50 shadow-2xl shadow-fuchsia-900/20' : 'bg-gray-900/40 border-gray-800'}`}>
      
      {isPopular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full shadow-lg border border-fuchsia-400/30">
          Most Popular
        </div>
      )}

      <div className={`absolute inset-0 bg-gradient-to-b ${gradient} opacity-5 rounded-3xl pointer-events-none`}></div>

      <div className="relative z-10 flex flex-col h-full">
        <h3 className="text-xl font-medium text-gray-300 mb-2">{title}</h3>
        <div className="flex items-baseline mb-6">
          <span className="text-4xl font-bold text-white tracking-tight">{price}</span>
          {period && <span className="text-gray-500 ml-2">{period}</span>}
        </div>

        <ul className="space-y-4 mb-8 flex-1">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
              <div className="mt-0.5 min-w-[18px] h-[18px] rounded-full bg-gray-800 flex items-center justify-center border border-gray-700">
                <Check size={10} className="text-fuchsia-400" />
              </div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <a 
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full py-3.5 rounded-xl font-semibold text-center transition-all duration-300 ${
            isPopular 
            ? 'bg-white text-black hover:bg-gray-200 hover:scale-[1.02] shadow-lg shadow-white/5' 
            : 'bg-gray-800 text-white hover:bg-gray-700 hover:text-white border border-gray-700'
          }`}
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};

const App = () => {
  const [activeTab, setActiveTab] = useState("web");
  const [searchQuery, setSearchQuery] = useState("");

  const openMainSite = () => {
    window.open("https://www.w3schools.com/", "_blank");
  };

  const openCourses = () => {
    window.open("https://campus.w3schools.com/collections/course-catalog", "_blank");
  };

  const categories = [
    { id: "web", label: "Web Building", icon: <Globe size={18} /> },
    { id: "courses", label: "Courses", icon: <GraduationCap size={18} /> },
    { id: "programming", label: "Programming", icon: <Terminal size={18} /> },
    { id: "backend", label: "Server Side", icon: <Server size={18} /> },
    { id: "data", label: "Data Science", icon: <BarChart3 size={18} /> },
    { id: "xml", label: "XML & JSON", icon: <FileCode size={18} /> },
    { id: "plans", label: "Plans & Pricing", icon: <Crown size={18} /> }
  ];

  const plans = [
    {
      title: "Free",
      price: "Free",
      period: "",
      features: [
        "All free tutorials",
        "Thousands of code examples",
        "Online 'Try it Yourself' editor",
        "Exercises and Quizzes",
        "Public Forum Access"
      ],
      buttonText: "Get Started",
      gradient: "from-gray-500 to-gray-700",
      url: "https://profile.w3schools.com/signup"
    },
    {
      title: "Plus",
      price: "$9.99",
      period: "/ month",
      isPopular: true,
      features: [
        "Ad-free browsing experience",
        "Personal Web Hosting",
        "Learning Progress Tracking",
        "Priority Support",
        "Increased Sandbox Limits"
      ],
      buttonText: "Go Plus",
      gradient: "from-fuchsia-500 to-purple-700",
      url: "https://order.w3schools.com/plans"
    },
    {
      title: "Full Access",
      price: "$69.99",
      period: "/ year",
      features: [
        "Unlock All Courses",
        "Professional Certifications",
        "Career Path Guidance",
        "Resume Builder Tool",
        "Everything in Plus included"
      ],
      buttonText: "Get Full Access",
      gradient: "from-amber-400 to-orange-600",
      url: "https://order.w3schools.com/plans"
    }
  ];

  const resources = {
    web: [
      {
        title: "HTML",
        description: "The language for building web pages.",
        icon: <Code size={28} />,
        url: "https://www.w3schools.com/html/default.asp",
        gradient: "from-orange-500 to-red-600"
      },
      {
        title: "CSS",
        description: "The language for styling web pages.",
        icon: <FileCode size={28} />,
        url: "https://www.w3schools.com/css/default.asp",
        gradient: "from-blue-400 to-blue-600"
      },
      {
        title: "JavaScript",
        description: "The language for programming web pages.",
        icon: <Terminal size={28} />,
        url: "https://www.w3schools.com/js/default.asp",
        gradient: "from-yellow-300 to-amber-500"
      },
      {
        title: "React",
        description: "A JavaScript library for building user interfaces.",
        icon: <Cpu size={28} />,
        url: "https://www.w3schools.com/react/default.asp",
        gradient: "from-cyan-400 to-blue-500"
      },
      {
        title: "jQuery",
        description: "A JavaScript library to simplify web development.",
        icon: <Layers size={28} />,
        url: "https://www.w3schools.com/jquery/default.asp",
        gradient: "from-blue-600 to-indigo-700"
      },
      {
        title: "Bootstrap",
        description: "A CSS framework for designing better web pages.",
        icon: <Layout size={28} />,
        url: "https://www.w3schools.com/bootstrap/bootstrap_ver.asp",
        gradient: "from-violet-500 to-purple-600"
      },
      {
        title: "Tailwind CSS",
        description: "A utility-first CSS framework for rapid UI development.",
        icon: <Sparkles size={28} />,
        url: "https://www.w3schools.com/tailwind/default.asp",
        gradient: "from-teal-400 to-cyan-500"
      },
      {
        title: "TypeScript",
        description: "JavaScript with syntax for types.",
        icon: <Braces size={28} />,
        url: "https://www.w3schools.com/typescript/default.asp",
        gradient: "from-blue-500 to-blue-700"
      },
      {
        title: "Angular",
        description: "A framework for dynamic web apps.",
        icon: <Box size={28} />,
        url: "https://www.w3schools.com/angular/default.asp",
        gradient: "from-red-500 to-red-700"
      }
    ],
    courses: [
      {
        title: "Course Catalog",
        description: "Browse the complete library of W3Schools certification courses.",
        icon: <GraduationCap size={28} />,
        url: "https://campus.w3schools.com/collections/course-catalog",
        gradient: "from-green-400 to-emerald-600"
      },
      {
        title: "Front End",
        description: "Master HTML, CSS, and JavaScript with the Front End Developer course.",
        icon: <Layout size={28} />,
        url: "https://campus.w3schools.com/collections/course-catalog",
        gradient: "from-pink-500 to-rose-600"
      },
      {
        title: "Back End",
        description: "Learn server-side logic with PHP, Python, and SQL certifications.",
        icon: <Server size={28} />,
        url: "https://campus.w3schools.com/collections/course-catalog",
        gradient: "from-indigo-500 to-purple-600"
      },
      {
        title: "Data Analytics",
        description: "Become a data expert with Python, SQL, and Statistics training.",
        icon: <BarChart3 size={28} />,
        url: "https://campus.w3schools.com/collections/course-catalog",
        gradient: "from-blue-500 to-cyan-600"
      },
      {
        title: "Python Masterclass",
        description: "Deep dive into Python programming from basics to advanced concepts.",
        icon: <BookOpen size={28} />,
        url: "https://campus.w3schools.com/collections/course-catalog",
        gradient: "from-yellow-400 to-orange-500"
      },
      {
        title: "SQL Certification",
        description: "Standardize your database skills with industry-recognized SQL training.",
        icon: <Database size={28} />,
        url: "https://campus.w3schools.com/collections/course-catalog",
        gradient: "from-gray-500 to-slate-700"
      }
    ],
    programming: [
      {
        title: "Python",
        description: "A popular programming language.",
        icon: <BookOpen size={28} />,
        url: "https://www.w3schools.com/python/default.asp",
        gradient: "from-yellow-400 to-blue-500"
      },
      {
        title: "Java",
        description: "A programming language used for mobile apps, web, etc.",
        icon: <Code size={28} />,
        url: "https://www.w3schools.com/java/default.asp",
        gradient: "from-red-400 to-orange-500"
      },
      {
        title: "C",
        description: "A general-purpose programming language.",
        icon: <Binary size={28} />,
        url: "https://www.w3schools.com/c/default.asp",
        gradient: "from-blue-500 to-indigo-600"
      },
      {
        title: "C++",
        description: "An extension of the C programming language.",
        icon: <Binary size={28} />,
        url: "https://www.w3schools.com/cpp/default.asp",
        gradient: "from-blue-600 to-blue-800"
      },
      {
        title: "C#",
        description: "A language developed by Microsoft.",
        icon: <Hash size={28} />,
        url: "https://www.w3schools.com/cs/default.asp",
        gradient: "from-purple-500 to-purple-700"
      },
      {
        title: "R",
        description: "A programming language for graphics and statistics.",
        icon: <BarChart3 size={28} />,
        url: "https://www.w3schools.com/r/default.asp",
        gradient: "from-blue-300 to-blue-500"
      },
      {
        title: "Kotlin",
        description: "A modern programming language for Android.",
        icon: <Cpu size={28} />,
        url: "https://www.w3schools.com/kotlin/default.asp",
        gradient: "from-orange-400 to-pink-500"
      },
      {
        title: "Go",
        description: "A programming language by Google.",
        icon: <Terminal size={28} />,
        url: "https://www.w3schools.com/go/default.asp",
        gradient: "from-cyan-400 to-blue-400"
      },
      {
        title: "Django",
        description: "A high-level Python Web framework.",
        icon: <Layers size={28} />,
        url: "https://www.w3schools.com/django/default.asp",
        gradient: "from-emerald-600 to-green-800"
      }
    ],
    backend: [
      {
        title: "SQL",
        description: "A standard language for accessing databases.",
        icon: <Database size={28} />,
        url: "https://www.w3schools.com/sql/default.asp",
        gradient: "from-gray-400 to-gray-600"
      },
      {
        title: "MySQL",
        description: "A widely used relational database system.",
        icon: <Database size={28} />,
        url: "https://www.w3schools.com/mysql/default.asp",
        gradient: "from-orange-400 to-orange-600"
      },
      {
        title: "PHP",
        description: "A server scripting language.",
        icon: <Server size={28} />,
        url: "https://www.w3schools.com/php/default.asp",
        gradient: "from-indigo-400 to-purple-500"
      },
      {
        title: "ASP",
        description: "A server-side scripting framework.",
        icon: <Server size={28} />,
        url: "https://www.w3schools.com/asp/default.asp",
        gradient: "from-blue-500 to-blue-700"
      },
      {
        title: "Node.js",
        description: "An open source server environment.",
        icon: <HardDrive size={28} />,
        url: "https://www.w3schools.com/nodejs/default.asp",
        gradient: "from-green-500 to-emerald-600"
      },
      {
        title: "Raspberry Pi",
        description: "A credit-card sized computer.",
        icon: <Cpu size={28} />,
        url: "https://www.w3schools.com/raspberrypi/default.asp",
        gradient: "from-red-600 to-red-800"
      },
      {
        title: "Git",
        description: "A distributed version control system.",
        icon: <Network size={28} />,
        url: "https://www.w3schools.com/git/default.asp",
        gradient: "from-orange-500 to-red-500"
      },
      {
        title: "AWS",
        description: "Amazon Web Services cloud training.",
        icon: <Globe size={28} />,
        url: "https://www.w3schools.com/aws/default.asp",
        gradient: "from-yellow-500 to-orange-500"
      }
    ],
    data: [
      {
        title: "AI",
        description: "Artificial Intelligence tutorial.",
        icon: <Cpu size={28} />,
        url: "https://www.w3schools.com/ai/default.asp",
        gradient: "from-emerald-400 to-teal-600"
      },
      {
        title: "Machine Learning",
        description: "Learn how to make machines learn.",
        icon: <Binary size={28} />,
        url: "https://www.w3schools.com/python/python_ml_getting_started.asp",
        gradient: "from-blue-500 to-cyan-500"
      },
      {
        title: "Data Science",
        description: "Learn how to analyze data.",
        icon: <BarChart3 size={28} />,
        url: "https://www.w3schools.com/datascience/default.asp",
        gradient: "from-fuchsia-500 to-pink-600"
      },
      {
        title: "NumPy",
        description: "Python library for working with arrays.",
        icon: <Table size={28} />,
        url: "https://www.w3schools.com/python/numpy/default.asp",
        gradient: "from-blue-400 to-indigo-500"
      },
      {
        title: "Pandas",
        description: "Python library for data analysis.",
        icon: <Table size={28} />,
        url: "https://www.w3schools.com/python/pandas/default.asp",
        gradient: "from-purple-500 to-indigo-600"
      },
      {
        title: "SciPy",
        description: "Scientific computation library.",
        icon: <Sparkles size={28} />,
        url: "https://www.w3schools.com/python/scipy/index.php",
        gradient: "from-blue-600 to-blue-800"
      },
      {
        title: "Statistics",
        description: "The science of analyzing data.",
        icon: <BarChart3 size={28} />,
        url: "https://www.w3schools.com/statistics/default.asp",
        gradient: "from-teal-500 to-emerald-600"
      },
      {
        title: "Excel",
        description: "The world's most used spreadsheet tool.",
        icon: <Table size={28} />,
        url: "https://www.w3schools.com/excel/default.asp",
        gradient: "from-green-600 to-green-800"
      }
    ],
    xml: [
      {
        title: "XML",
        description: "Extensible Markup Language.",
        icon: <FileCode size={28} />,
        url: "https://www.w3schools.com/xml/default.asp",
        gradient: "from-orange-400 to-orange-600"
      },
      {
        title: "XML AJAX",
        description: "Asynchronous JavaScript and XML.",
        icon: <Network size={28} />,
        url: "https://www.w3schools.com/xml/ajax_intro.asp",
        gradient: "from-blue-400 to-blue-600"
      },
      {
        title: "XML DOM",
        description: "Document Object Model for XML.",
        icon: <Layout size={28} />,
        url: "https://www.w3schools.com/xml/dom_intro.asp",
        gradient: "from-purple-400 to-purple-600"
      },
      {
        title: "JSON",
        description: "JavaScript Object Notation.",
        icon: <FileJson size={28} />,
        url: "https://www.w3schools.com/js/js_json_intro.asp",
        gradient: "from-yellow-500 to-orange-500"
      }
    ]
  };

  // Search Logic
  const allResources = Object.values(resources).flat();
  const isSearching = searchQuery.trim().length > 0;
  
  // Only search resources, not plans
  const displayResources = isSearching
    ? allResources.filter(resource => 
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : (activeTab !== 'plans' ? resources[activeTab as keyof typeof resources] : []);

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center p-6 md:p-12 relative overflow-x-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-fuchsia-900/20 rounded-full blur-[128px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-[128px] pointer-events-none"></div>

      <div className="max-w-7xl w-full mx-auto relative z-10 flex flex-col flex-1">
        
        {/* Header Section */}
        <div className="flex flex-col xl:flex-row items-center justify-between mb-12 gap-8">
          <div className="text-center xl:text-left">
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-900 border border-gray-800 text-xs font-semibold tracking-wider text-fuchsia-400 mb-4 uppercase">
                <Sparkles size={12} />
                Knowledge Base
             </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tight">
              Dev<span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-purple-600">Core</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-lg mx-auto xl:mx-0 font-light">
              Your centralized command center for web development documentation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full xl:w-auto items-center">
            {/* Search Bar */}
            <div className="relative w-full sm:w-80 group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-500 group-focus-within:text-fuchsia-500 transition-colors" />
              </div>
              <input
                type="text"
                className="block w-full pl-11 pr-11 py-4 bg-gray-900 border border-gray-800 rounded-2xl text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50 focus:border-transparent transition-all hover:border-gray-700 shadow-xl"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-white transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>

             {/* Get Certified Button */}
             <button 
              onClick={openCourses}
              className="group flex items-center gap-3 bg-gray-900 text-fuchsia-400 border border-fuchsia-900/50 px-6 py-4 rounded-2xl font-semibold hover:bg-fuchsia-950/30 hover:text-fuchsia-300 transition-all hover:scale-105 whitespace-nowrap w-full sm:w-auto justify-center"
            >
              <GraduationCap size={18} />
              <span>Get Certified</span>
            </button>

            {/* Launch Button */}
            <button 
              onClick={openMainSite}
              className="group flex items-center gap-4 bg-white text-gray-950 px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all hover:scale-105 hover:shadow-lg hover:shadow-white/10 whitespace-nowrap w-full sm:w-auto justify-center"
            >
              <span>Launch W3Schools</span>
              <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-fuchsia-600 transition-colors">
                  <ArrowRight size={12} />
              </div>
            </button>
          </div>
        </div>

        {/* Tab Navigation (Hidden when searching) */}
        {!isSearching && (
          <div className="flex flex-wrap justify-center xl:justify-start gap-3 mb-10 animate-in fade-in slide-in-from-top-4 duration-500">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === cat.id 
                    ? "bg-gray-800 text-white shadow-lg shadow-purple-900/20 ring-1 ring-purple-500/50" 
                    : "bg-gray-900/50 text-gray-500 hover:bg-gray-800 hover:text-gray-300"
                }`}
              >
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </div>
        )}

        {/* Search Results Header */}
        {isSearching && (
          <div className="mb-8 flex items-center gap-2 text-gray-300 animate-in fade-in duration-300">
            <Search size={18} className="text-fuchsia-500" />
            <span>Found {displayResources.length} results for "<span className="text-white font-semibold">{searchQuery}</span>"</span>
          </div>
        )}

        {/* Main Content Area */}
        <div className="animate-in fade-in zoom-in duration-500">
          
          {isSearching ? (
             // Search Results Grid
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {displayResources.length > 0 ? (
                 displayResources.map((resource, index) => (
                  <ResourceCard key={resource.title} {...resource} />
                ))
              ) : (
                <div className="col-span-full py-20 text-center text-gray-500 bg-gray-900/30 rounded-3xl border border-gray-800/50 border-dashed">
                  <Search size={48} className="mx-auto mb-4 opacity-20" />
                  <p className="text-xl">No resources found matching your search.</p>
                  <button 
                    onClick={() => setSearchQuery("")}
                    className="mt-4 text-fuchsia-400 hover:text-fuchsia-300 underline underline-offset-4"
                  >
                    Clear search and view all topics
                  </button>
                </div>
              )}
            </div>
          ) : activeTab === 'plans' ? (
            // Pricing Plans Grid
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
               {plans.map((plan, index) => (
                 <PricingCard key={plan.title} {...plan} />
               ))}
            </div>
          ) : (
            // Standard Resource Grid
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {displayResources.map((resource, index) => (
                <ResourceCard key={resource.title} {...resource} />
              ))}
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <p>© {new Date().getFullYear()} DevCore Interface.</p>
            <p className="flex items-center gap-2 mt-4 md:mt-0">
                Data source: <span className="text-gray-500 font-semibold">w3schools.com</span>
            </p>
        </div>

      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
}