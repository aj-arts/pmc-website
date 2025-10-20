import { Linkedin } from "lucide-react";

const officers = [
  {
    name: "Prisha Velhal",
    role: "President",
    description: "Leading strategic initiatives and driving club growth.",
    linkedinUrl: "#"
  },
  {
    name: "Nira Patel", 
    role: "Vice President",
    description: "Supporting operations and member development.",
    linkedinUrl: "#"
  },
  {
    name: "Brennan Kelly",
    role: "Vice President of Finance", 
    description: "Managing financial resources and budget planning.",
    linkedinUrl: "#"
  },
  {
    name: "Adwaith Renjith",
    role: "Finance Chair",
    description: "Overseeing financial operations and reporting.",
    linkedinUrl: "#"
  },
  {
    name: "Dhaya Raja",
    role: "Marketing Lead",
    description: "Building brand presence and community engagement.",
    linkedinUrl: "#"
  },
  {
    name: "Vikram Vasudevan",
    role: "Outreach Coordinator", 
    description: "Building partnerships and expanding our network.",
    linkedinUrl: "#"
  },
  {
    name: "Fatehjot Gogia",
    role: "Operations Coordinator",
    description: "Coordinating logistics and event management.",
    linkedinUrl: "#"
  },
  {
    name: "Josiah Liebert",
    role: "Event Coordinator",
    description: "Planning and executing club events and activities.",
    linkedinUrl: "#"
  },
  {
    name: "Deepti Ravidath",
    role: "Technical Lead",
    description: "Leading technical initiatives and digital innovation.",
    linkedinUrl: "#"
  },
  {
    name: "Lauren Gliane",
    role: "UX Design Lead",
    description: "Creating user-centered design solutions.",
    linkedinUrl: "#"
  },
  {
    name: "Rebeca Moreno Rodriguez",
    role: "Full-Stack Engineer",
    description: "Developing web applications and technical solutions.",
    linkedinUrl: "#"
  },
  {
    name: "Ajinkya Gokule",
    role: "Systems Architect",
    description: "Designing scalable technical systems.",
    linkedinUrl: "#"
  }
];

const getRoleTagColor = (role: string) => {
  if (role.includes("President")) return "bg-purple-500";
  if (role.includes("Vice President")) return "bg-blue-400";
  if (role.includes("Finance")) return "bg-green-500";
  if (role.includes("Marketing")) return "bg-pink-500";
  if (role.includes("Outreach") || role.includes("Operations") || role.includes("Event")) return "bg-orange-500";
  if (role.includes("Technical") || role.includes("Engineer") || role.includes("Architect") || role.includes("Design")) return "bg-indigo-500";
  return "bg-blue-600";
};

export default function Officers() {
  return (
    <section id="officers" className="bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-purple-400">OUR</span>{" "}
            <span className="text-blue-600">TEAM</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the passionate leaders driving innovation and building the future of product management.
          </p>
        </div>

        {/* Board Members Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Board Members</h2>
          <p className="text-lg text-gray-500">
            Our executive team leading strategic initiatives and community growth.
          </p>
        </div>

        {/* Officers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {officers.map((officer, index) => (
            <div
              key={officer.name}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Role Tag */}
              <div className="mb-4">
                <span className={`inline-block px-3 py-1 rounded-full text-white text-sm font-medium ${getRoleTagColor(officer.role)}`}>
                  {officer.role}
                </span>
              </div>

              {/* Name */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {officer.name}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {officer.description}
              </p>

              {/* LinkedIn Button */}
              <a
                href={officer.linkedinUrl}
                className="inline-flex items-center space-x-2 px-4 py-2 border border-blue-200 rounded-lg text-blue-600 hover:bg-blue-50 transition-colors duration-200"
              >
                <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center">
                  <Linkedin className="w-3 h-3 text-white" />
                </div>
                <span className="font-medium">Connect on LinkedIn</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
