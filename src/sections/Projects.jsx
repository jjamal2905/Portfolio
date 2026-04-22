import { ArrowUpRight, GitBranch } from "lucide-react";
import { LuGithub } from "react-icons/lu";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton"

const projects = [
  {
    title: "Flappy Bird Game",
    description: "A fun and addictive game built using Unity, where players control a bird to navigate through obstacles. The game features smooth mechanics, engaging graphics, and responsive controls, providing an enjoyable gaming experience.",
    video: "projects/flappy.mp4",
    tags: ["Unity", "C#"],
    github: "https://github.com/jjamal2905/Flappy-Bird.git",
  },
  {
    title: "Secure File Encryption and Decryption Software",
    description: "A software application that allows users to securely encrypt and decrypt their data using various encryption algorithms. The software provides a user-friendly interface for selecting files, choosing encryption methods, and managing encrypted data effectively.",
    image: "projects/Encryption_Decryption.png",
    tags: ["SQL", "Cryptography"],
    github: "https://github.com/jjamal2905/secure-file-encryption-and-decryption.git",
  },
  {
    title: "Student Management System Using AI Face Recognition",
    description: "A student management system that incorporates AI face recognition technology to enhance security and streamline attendance tracking. The system allows for efficient management of student records while ensuring accurate identification through facial recognition.",
    image: "projects/Student_Attendance.png",
    tags: ["Python", "Open CV", "React"],
    github: "https://github.com/jjamal2905/Student-Attendence-system-using-Facial-recognition.git",
  },
  {
    title: "Smart Waste Management System",
    description: "A smart waste management system that utilizes IoT sensors and data analytics to optimize waste collection and disposal processes. The system provides real-time monitoring of waste levels, enabling efficient route planning for waste collection vehicles and promoting sustainable waste management practices.",
    video: "projects/waste.mp4",
    tags: ["TKinter", "Python"],
    github: "https://github.com/jjamal2905/Smart-Waste-Management-System.git",
  },
]


export const Projects = () => {
  return(
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-delay-100 text-secondary-foreground">
            Projects made 
            <span className="font-serif italic font-normal text-white"> by me.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to 
            innovative tools that solve problems to games you can enjoy.
            
            
            
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} 
            className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
            style={{animationDelay: `${(idx + 1) * 100}ms`}}
            >

              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                {project.video ? (
                  <video
                    src={project.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <img 
                    src={project.image}
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                )}
                <div
                   className="absolute inset-0
                   bg-gradient-to-t from via-card/50
                   to-transparent opacity-60" 
                  />
                  {/*Overlay links*/}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    
                    {/*<a href={project.link} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                      <ArrowUpRight className="w-5 h-5" />
                    </a>*/}
                    <a href={project.github} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                      <LuGithub className="w-5 h-5" />
                    </a>
                  </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                  <LuGithub
                  className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                    />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA*/}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <a
          href="https://github.com/jjamal2905">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
          </a>
        </div>
      </div>

    </section>
  );
};