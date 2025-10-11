import React from "react";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaNodeJs,
  FaDocker,
  FaLinux,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiLaravel,
  SiExpress,
  SiMariadb,
  SiMysql,
  SiProxmox,
  SiZotero,
  SiSynology,
} from "react-icons/si";
import { MdStorage, MdSmartToy } from "react-icons/md";
import { BsBox } from "react-icons/bs";

const Skills = () => {
  return (
    <section id="skills" className="bg-secondary/30 py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="reveal mb-16 text-center opacity-0">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle mx-auto">
            Technologies and tools I use to build robust, scalable solutions
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          {/* Frontend Technologies */}
          <div className="reveal mb-12 opacity-0">
            <h3 className="mb-6 text-center text-xl font-semibold">
              Frontend Development
            </h3>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5">
              {[
                {
                  name: "HTML5",
                  icon: <FaHtml5 className="text-orange-500" />,
                },
                { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
                {
                  name: "Tailwind CSS",
                  icon: <SiTailwindcss className="text-cyan-400" />,
                },
                {
                  name: "JavaScript",
                  icon: <FaJs className="text-yellow-400" />,
                },
                {
                  name: "React.js",
                  icon: <FaReact className="text-blue-400" />,
                },
              ].map((tech, index) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center rounded-lg bg-card p-4 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-2 text-3xl">{tech.icon}</div>
                  <div className="text-sm font-medium">{tech.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Technologies */}
          <div className="reveal mb-12 opacity-0">
            <h3 className="mb-6 text-center text-xl font-semibold">
              Backend Development
            </h3>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6">
              {[
                { name: "PHP", icon: <FaPhp className="text-purple-500" /> },
                {
                  name: "Laravel",
                  icon: <SiLaravel className="text-red-500" />,
                },
                {
                  name: "Node.js",
                  icon: <FaNodeJs className="text-green-500" />,
                },
                {
                  name: "Express.js",
                  icon: <SiExpress className="text-gray-600" />,
                },
                {
                  name: "MariaDB",
                  icon: <SiMariadb className="text-blue-800" />,
                },
                { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
              ].map((tech, index) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center rounded-lg bg-card p-4 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-2 text-3xl">{tech.icon}</div>
                  <div className="text-sm font-medium">{tech.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Infrastructure & DevOps */}
          <div className="reveal mb-12 opacity-0">
            <h3 className="mb-6 text-center text-xl font-semibold">
              Infrastructure & DevOps
            </h3>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6">
              {[
                {
                  name: "Docker",
                  icon: <FaDocker className="text-blue-500" />,
                },
                { name: "LXC", icon: <BsBox className="text-orange-500" /> },
                {
                  name: "Proxmox",
                  icon: <SiProxmox className="text-orange-600" />,
                },
                {
                  name: "Linux",
                  icon: <FaLinux className="text-yellow-500" />,
                },
                { name: "Zabbix", icon: <SiZotero className="text-red-600" /> },
                {
                  name: "Synology NAS",
                  icon: <SiSynology className="text-blue-600" />,
                },
                { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
                {
                  name: "GitHub",
                  icon: <FaGithub className="text-gray-800" />,
                },
              ].map((tech, index) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center rounded-lg bg-card p-4 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-2 text-3xl">{tech.icon}</div>
                  <div className="text-sm font-medium">{tech.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
