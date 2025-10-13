import { Calendar, Briefcase, GraduationCap } from "lucide-react";

interface TimelineItem {
  id: number;
  title: string;
  organization: string;
  period: string;
  description: string;
  skills: string[];
  type: "work" | "education" | "certification";
}

const timelineItems: TimelineItem[] = [
  {
    id: 1,
    title: "IT Manager",
    organization: "Merapi Online Corporation",
    period: "October 2022 - January 2025",
    description:
      "Led technical team (Support, Network, Developer) and managed entire IT infrastructure including hardware, software, and networks. Designed and implemented automated parking system that significantly increased operational efficiency and reduced labor costs. Built on-premise containerized servers (Docker, LXC) saving external infrastructure subscription costs.",
    skills: [
      "Docker",
      "LXC",
      "Proxmox",
      "Laravel",
      "Node.js",
      "React.js",
      "MariaDB",
      "Zabbix",
      "Team Leadership",
    ],
    type: "work",
  },
  {
    id: 2,
    title: "Software Engineer (Freelance)",
    organization: "Sinergi Visi Utama",
    period: "2023",
    description:
      "Built web application for recording and managing reading interest data for Community Reading Gardens (TGM) & Mobile Library Units (UPK). Responsible for the entire development cycle from database design to user interface implementation.",
    skills: [
      "Laravel",
      "PHP",
      "Database Design",
      "Full-Stack Development",
      "UI/UX Design",
    ],
    type: "work",
  },
  {
    id: 3,
    title: "IT System Administrator (Freelance)",
    organization: "PT Sadasa Akademi Indonesia",
    period: "2023",
    description:
      "Deployed 'Sehatcerdas' application on government Virtual Private Server (VPS). Configured server environment, database, and web server to ensure optimal and secure application performance.",
    skills: [
      "VPS Management",
      "Server Configuration",
      "Database Administration",
      "Web Server Setup",
      "Security Configuration",
    ],
    type: "work",
  },
  {
    id: 4,
    title: "IT Support & Infrastructure Specialist",
    organization: "Merapi Online Corporation",
    period: "May 2018 - September 2022",
    description:
      "Built, managed, and monitored server and network infrastructure for operational stability and security. Managed virtualization and container-based servers (Docker, LXC Proxmox) for scalable applications. Developed and deployed internal web applications based on business needs. Implemented system security policies and performed regular data backups.",
    skills: [
      "Docker",
      "LXC",
      "Proxmox",
      "System Administration",
      "Network Management",
      "Web Development",
      "Database Management",
    ],
    type: "work",
  },
  {
    id: 5,
    title: "Machine Learning Participant",
    organization: "Bangkit Academy by Google, GoTo, & Traveloka",
    period: "2022",
    description:
      "Completed intensive independent study program with industry curriculum covering Machine Learning fundamentals, TensorFlow, and data processing. Developed capstone project 'Bank Sampah' application with deep learning model using TensorFlow for automatic waste classification into 5 categories. Enhanced soft skills including time management, critical thinking, and English proficiency.",
    skills: [
      "Machine Learning",
      "TensorFlow",
      "Deep Learning",
      "Data Processing",
      "Python",
      "Project Management",
    ],
    type: "certification",
  },
  {
    id: 6,
    title: "S1 Informatika",
    organization: "Universitas AKPRIND Indonesia",
    period: "September 2019 - August 2025",
    description:
      "Bachelor's degree in Informatics with GPA 3.91. Focused on software engineering, system analysis, database design, and web development technologies.",
    skills: [
      "Software Engineering",
      "System Analysis",
      "Database Design",
      "Web Development",
      "Algorithm Design",
    ],
    type: "education",
  },
  {
    id: 7,
    title: "Teknik Komputer dan Jaringan",
    organization: "SMK Negeri 1 Sukoharjo",
    period: "2015 - 2018",
    description:
      "Vocational High School specializing in Computer and Network Engineering. Won 1st place in LKS 2017 at district level for IT Network System Administration, demonstrating excellence in network infrastructure and system administration.",
    skills: [
      "Network Administration",
      "System Administration",
      "Hardware Maintenance",
      "Network Security",
    ],
    type: "education",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-20 py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="reveal mb-16 text-center opacity-0">
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-subtitle mx-auto">
            My professional journey and educational background in IT management
            and full-stack development
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          {timelineItems.map((item, index) => (
            <div
              key={item.id}
              className="reveal relative pb-12 pl-8 opacity-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Timeline connector */}
              {index < timelineItems.length - 1 && (
                <div className="absolute left-[15px] top-[34px] h-full w-0.5 bg-gradient-to-b from-primary/80 to-primary/20"></div>
              )}

              {/* Timeline dot */}
              <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-secondary">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                  {item.type === "work" ? (
                    <Briefcase size={14} />
                  ) : (
                    <GraduationCap size={14} />
                  )}
                </div>
              </div>

              <div className="rounded-lg border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-4 flex flex-col justify-between gap-2 md:flex-row md:items-center">
                  <div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="font-medium text-primary">
                      {item.organization}
                    </p>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Calendar size={16} className="mr-1" />
                    <span className="text-sm">{item.period}</span>
                  </div>
                </div>

                <p className="mb-4 text-muted-foreground">{item.description}</p>

                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="rounded-full bg-secondary px-2 py-1 text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
