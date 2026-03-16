import Image from "next/image";

// sample project data
const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A personal portfolio built with Next.js and Tailwind CSS.",
    image: "/a.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "E-commerce Website",
    description: "A full-stack e-commerce site built with React and Node.js.",
    image: "/images/e.jpg",
    link: "/project",
  },
  {
    id: 3,
    title: "Blog Platform",
    description: "A modern blogging platform with Markdown support.",
    image: "/b.jpg",
    link: "#",
  },
  {
    id: 4,
    title: "Weather App",
    description: "A weather forecasting app using the OpenWeather API.",
    image: "/c.jpg",
    link: "#",
  },
];

export default function ProjectGrid() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">My Projects</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            className="text-black block overflow-hidden rounded-xl border border-black shadow hover:shadow-lg transition hover:-translate-y-1"
          >
            <div className="relative w-full h-48">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-black">
                {project.title}
              </h3>
              <p className="mt-1 text-black text-sm">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}