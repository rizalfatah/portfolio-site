
import React from 'react';
import { Calendar, Briefcase, GraduationCap } from 'lucide-react';

interface TimelineItem {
  id: number;
  title: string;
  organization: string;
  period: string;
  description: string;
  skills: string[];
  type: 'work' | 'education';
}

const timelineItems: TimelineItem[] = [
  {
    id: 1,
    title: "Senior Backend Engineer",
    organization: "TechCorp Inc.",
    period: "June 2022 - Present",
    description: "Lead a team of 5 engineers developing scalable microservices architecture. Implemented distributed tracing and monitoring systems, resulting in 40% reduction in MTTR for production issues.",
    skills: ["Node.js", "Kubernetes", "Kafka", "MongoDB", "CI/CD", "Team Leadership"],
    type: "work"
  },
  {
    id: 2,
    title: "Backend Developer",
    organization: "DataFlow Systems",
    period: "April 2020 - May 2022",
    description: "Designed and implemented RESTful APIs and real-time data processing pipelines handling 10M+ daily events. Optimized database queries, reducing response times by 60%.",
    skills: ["Python", "Django", "PostgreSQL", "Redis", "Docker", "AWS"],
    type: "work"
  },
  {
    id: 3,
    title: "Master's in Computer Science",
    organization: "Tech University",
    period: "September 2018 - March 2020",
    description: "Specialized in Distributed Systems and Cloud Computing. Master's thesis on fault-tolerant microservices architecture.",
    skills: ["Distributed Systems", "Cloud Computing", "Algorithm Design", "System Architecture"],
    type: "education"
  },
  {
    id: 4,
    title: "Junior Backend Developer",
    organization: "StartupHub",
    period: "June 2016 - August 2018",
    description: "Developed and maintained backend services for a SaaS product. Implemented authentication, payment processing, and notification systems.",
    skills: ["JavaScript", "Express.js", "MySQL", "API Design", "Git"],
    type: "work"
  },
  {
    id: 5,
    title: "Bachelor's in Software Engineering",
    organization: "University of Technology",
    period: "September 2012 - May 2016",
    description: "Graduated with honors. Focused on software engineering principles, database systems, and web development.",
    skills: ["Software Engineering", "Data Structures", "Web Development", "Algorithms"],
    type: "education"
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 reveal opacity-0">
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-subtitle mx-auto">
            My professional journey and educational background in backend development
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {timelineItems.map((item, index) => (
            <div key={item.id} className="relative pl-8 pb-12 reveal opacity-0" style={{ animationDelay: `${index * 100}ms` }}>
              {/* Timeline connector */}
              {index < timelineItems.length - 1 && (
                <div className="absolute left-[15px] top-[34px] w-0.5 h-full bg-gradient-to-b from-primary/80 to-primary/20"></div>
              )}

              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-8 h-8 rounded-full flex items-center justify-center bg-secondary">
                <div className="w-6 h-6 rounded-full flex items-center justify-center bg-primary text-white">
                  {item.type === 'work' ? (
                    <Briefcase size={14} />
                  ) : (
                    <GraduationCap size={14} />
                  )}
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-primary font-medium">{item.organization}</p>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Calendar size={16} className="mr-1" />
                    <span className="text-sm">{item.period}</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, idx) => (
                    <span key={idx} className="px-2 py-1 text-xs rounded-full bg-secondary">
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
