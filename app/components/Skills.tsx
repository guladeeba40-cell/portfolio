const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Git / GitHub",
    "UI/UX",
];

export default function Skills() {
    return (
        <section id="skills" className="space-y-4 max-w-4xl mx-auto">
            <div className="text-left">
                <h2 className="text-md font-semibold uppercase tracking-[0.25em] text-pink-950">
                    Skills
                </h2>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {skills.map((skill) => (
                    <div
                        key={skill}
                        className="flex h-20 max-w-md min-h-0 flex-col items-center justify-center rounded-xl border border-gray-200 bg-white px-2 text-xs sm:text-sm font-medium text-gray-800 shadow-sm"
                    >
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    );
}