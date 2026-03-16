import Navbar from "../components/Navbar";
import ProjectGrid from "../components/ProjectGrid";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 bg-gray-50">
        <section id="projects" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className=" text-pink-900 text-3xl font-bold text-center mb-12">
              My Projects
            </h1>
            <ProjectGrid />
          </div>
        </section>
      </main>
    </>
  );
}