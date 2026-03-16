// export default function ContactPage() {
//   return (
//     <section className="min-h-screen bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
//       <div className="mx-auto w-full max-w-3xl bg-white p-6 rounded-2xl shadow-md">
//         <div className="mb-6">
//           <p className="text-sm uppercase tracking-[0.3em] text-pink-900 font-semibold">
//             Contact
//           </p>
//           <h1 className="mt-2 text-3xl font-bold text-pink-900">Let&apos;s work together</h1>
//           <p className="mt-2 text-black">
//             Feel free to send me a message. I&apos;ll get back within 24 hours.
//           </p>
//         </div>

//         <form className="space-y-4" action="mailto:guladeeba40@gmail.com" method="post" encType="text/plain">
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//               Email
//             </label>
//             <input
//               id="email"
//               name="email"
//               type="email"
//               required
//               placeholder="you@example.com"
//               className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-pink-900 shadow-sm focus:border-pink-900 focus:outline-none focus:ring-2 focus:ring-blue-200"
//             />
//           </div>
//           <div>
//             <label htmlFor="message" className="block text-sm font-medium text-pink-900">
//               Message
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               rows={5}
//               required
//               placeholder="Tell me about your project, timeline, and goals."
//               className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full rounded-lg bg-pink-900 px-4 py-2.5 text-sm font-semibold text-white  transition"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }
"use client";

import { FormEvent, useState } from "react";

type ContactErrors = {
  name?: string;
  email?: string;
  message?: string;
};

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<ContactErrors>({});

  const validateForm = () => {
    const newErrors: ContactErrors = {};

    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Enter a valid email";
    if (!message) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully");
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-3xl bg-white p-6 rounded-2xl shadow-md">
        <div className="mb-6">
          <p className="text-sm uppercase tracking-[0.3em] text-pink-900 font-semibold">Contact</p>
          <h1 className="mt-2 text-3xl font-bold text-pink-900">Let&apos;s work together</h1>
          <p className="mt-2 text-black">Feel free to send me a message. I&apos;ll get back within 24 hours.</p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-pink-900">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-700"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="mt-1 block w-full rounded-lg border border-gray-700 px-3 py-2 text-gray-700"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message"
              className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          <button type="submit" className="w-full rounded-lg bg-pink-900 px-4 py-2 text-white">Send Message</button>
        </form>
      </div>
    </section>
  );
}