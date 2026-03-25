
import ProjectGrid from "../components/ProjectGrid";

export default function ProjectsPage() {
  return (
    <>
      {/* <main className="pt-16 bg-gray-50">
        <section id="projects" className="py-24">
          <div className="max-w-7xl mx-auto  px-2">
            <h1 className=" text-pink-900 text-3xl font-bold text-center mb-0 mt-0">
              My Projects
            </h1>
            <ProjectGrid />
          </div> */}
          
          
          
<main className="pt-4 bg-gray-50">
  <section id="projects" className="py-0">
    <div className="max-w-7xl mx-auto px-2">
      
      <h1 className="text-pink-900 text-3xl font-bold text-center mb-0 ">
        My Projects
      </h1>

      <ProjectGrid />

    </div>
  </section>
</main>
        
      
    </>
  );
}