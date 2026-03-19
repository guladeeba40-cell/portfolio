import Image from "next/image";

// sample project data
const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    tech: "Next.js, Tailwind CSS",
    image: "/po.jpg",
    description:
      "A personal portfolio built with Next.js and Tailwind CSS to showcase my frontend developer projects, skills, and experience.",
    liveUrl: "https://velvety-heliotrope-d3f3f5.netlify.app/",
    viewCode: "https://github.com/guladeeba40-cell/portfolio",
  },
  {
    id: 2,
    title: "IndoFood",
    tech: "HTML, CSS, JavaScript",
    image: "/food.jpg",
    description:
      "IndoFood is a responsive website showcasing traditional Indonesian dishes. It features interactive menus, high-quality food images, and a clean, user-friendly layout.",
    liveUrl: "https://incandescent-puppy-4186a5.netlify.app/",
    viewCode: "https://github.com/guladeeba40-cell/food-website",
  },
  {
    id: 3,
    title: "Perfume-Website",
    tech: "HTML, CSS",
    image: "/perfume.jpg",
    description:
      "My first project is a dynamic web app built with React and Redux, fetching data from an external API. It demonstrates state management, API integration, and interactive UI components.",
    liveUrl: "https://leafy-gnome-012a8d.netlify.app/",
    viewCode: "https://github.com/guladeeba40-cell/perfume-website",
  },
  // {
  //   id: 4,
  //   title: "Weather App",
  //   description: "A weather forecasting app using the OpenWeather API.",
  //   image: "/c.jpg",
  //   link: "#",
  // },
];

export default function ProjectGrid() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">My Projects</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white overflow-hidden rounded-xl border border-black shadow hover:shadow-lg transition hover:-translate-y-1"
          >
            <div className="relative w-full h-48">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            {/* project info */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-black">
                {project.title}
              </h3>
              <p className="text-xs text-zinc-500 mb-2">{project.tech}</p>
              <p className="mt-1 text-black text-sm">{project.description}</p>
              <div className="mt-4 flex gap-2">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-blue-600 bg-blue-600 px-3 py-1 text-xs font-medium text-white hover:bg-blue-700"
                >
                  Live Site
                </a>
                <a
                  href={project.viewCode}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-gray-700 px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-100"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
