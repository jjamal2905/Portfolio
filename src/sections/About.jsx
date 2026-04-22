import {Code2, Lightbulb, Rocket, User, Users} from 'lucide-react'

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "I write clean and maintainable code that follows industry best practices, ensuring that my software is easy to understand and modify."
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "I optimize the performance of my applications by implementing efficient algorithms and data structures."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "I work well in teams and am always willing to share my knowledge and help others grow."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "I am always looking for new and innovative ways to solve problems and improve my software."
  },

]


export const About = () => {
  return( 
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Turning ideas into reality,
              <span className="font-serif italic font-normal text-white"> one line of code at a time.</span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I am a software engineer with a strong foundation in full-stack development and a passion for building scalable,
                 user-centric applications. My core expertise lies in technologies like C#, JavaScript, and React,
                 supported by modern styling tools such as Tailwind CSS. I have experience designing responsive web interfaces and developing backend systems using Node.
                 js and Java, ensuring seamless integration between client and server. With a solid understanding of Git and GitHub Actions,
                  I follow efficient version control practices and automate workflows to maintain high-quality, reliable codebases.
              </p>
              <p>
                Beyond web development, I actively explore mobile development and interactive application design using Unity,
                 where I combine logic and creativity to build engaging user experiences. My programming versatility spans across Python and Java,
                  allowing me to approach problems from multiple perspectives and choose the most effective tools for each task.
                   I am particularly interested in creating applications that are not only functional but also intuitive and performance-driven.
              </p>
              <p>
                I also have a growing focus on AI/ML and computer vision, leveraging technologies like OpenCV and Python to develop intelligent systems.
                 From experimenting with machine learning models to integrating AI features into real-world applications,
                  I enjoy pushing the boundaries of what software can achieve. I am driven by continuous learning and innovation,
                   always seeking opportunities to expand my skill set and contribute to impactful, future-ready solutions.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to create meaningful software that solves real problems and makes people’s lives easier.
                 I’m driven by curiosity, creativity, and a constant desire to improve—always learning, always building,
                  and always pushing myself to grow. For me, it’s not just about writing code, but about crafting solutions that have real impact and purpose."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div key={idx} 
              className="glass rounded-2xl p-6 glow-border animate-fade-in"
              style={{animationDelay: `${(idx + 1) * 100}ms`}}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};