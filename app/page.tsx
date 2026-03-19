// import Navbar from "./components/Navbar";
// import Skills from "./components/Skills";
// import Image from "next/image";
// import Link from "next/link";

// export default function Page() {
//   return (
//     <>
//       <Navbar />
//       <main className=" bg-gray-50 min-h-screen px-6">
//         <section className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-2 items-center py-14">
//           <div>
//             <p className="text-xs font-semibold uppercase tracking-[0.3em] text-pink-900">
//               Frontend Developer
//             </p>
//             <h1 className="mt-3 text-4xl sm:text-5xl font-bold font-serif text-pink-900">
//               HI, I&apos;M ADEEBA GUL
//             </h1>
//             <p className="mt-6 text-black max-w-xl mb-9">
//               I create clean interfaces in Next.js and Tailwind with pixel-perfect
//               design and modern, accessible UX.
//             </p>
//           <Skills />

//             <div className="mt-6 flex flex-wrap gap-3">
//               <Link
//                 href="/project"
//                 className="rounded-lg bg-pink-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-green-800 transition"
//               >
//                 View Projects
//               </Link>
//               <Link
//                 href="/contact"
//                 className=" rounded-lg border border-pink-900 px-4 py-2.5 text-sm font-semibold text-black hover:bg-green-800 transition hover:text-white"
//               >
//                 Contact Me
//               </Link>
//             </div>
//           </div>
//           <div className="relative rounded-2xl border border-gray-200 bg-white p-2 shadow-sm">
//             <Image
//               src="/Images/fp.jpg"
//               alt="Developer workspace"
//               width={500}
//               height={350}
//               className="h-100 w-full rounded-xl object-cover"
//             />
//           </div>
//          </section>

//       </main>
//     </>
//   );
// }
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="bg-gray-50 min-h-screen px-6 sm:px-8 lg:px-12">
        <section className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-2 items-center py-14">
          
          {/* Left Column: Text */}
          <div className="text-center lg:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-pink-900">
              Frontend Developer
            </p>

            <h1 className="mt-3 text-4xl sm:text-5xl font-bold font-serif text-pink-900">
              HI, I&apos;M ADEEBA GUL
            </h1>

            <p className="mt-6 text-black max-w-xl mx-auto lg:mx-0 mb-9">
              I create clean interfaces in Next.js and Tailwind with pixel-perfect
              design and modern, accessible UX.
            </p>

            <Skills />

            <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-3">
              <Link
                href="/project"
                className="rounded-lg bg-pink-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-green-800 transition"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="rounded-lg border border-pink-900 px-4 py-2.5 text-sm font-semibold text-black hover:bg-green-800 hover:text-white transition"
              >
                Contact Me
              </Link>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative rounded-2xl border border-gray-200 bg-white p-2 shadow-sm mt-10 lg:mt-0">
            <Image
              src="/Images/fp.jpg"
              alt="Developer workspace"
              width={500}
              height={350}
              className="w-full h-auto rounded-xl object-cover"
            />
          </div>
        </section>
      </main>
    </>
  );
}