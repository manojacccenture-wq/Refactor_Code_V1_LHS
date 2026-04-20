"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import ApplyForm from "@/app/components/sections/career/ApplyForm";

interface JobDetailsData {
  [key: string]: {
    title: string;
    type: string;
    description: string;
    keySkills: string[];
    experience: string;
    location: string;
    mode: string;
    preferences: string;
  };
}

const jobDetailsMap: JobDetailsData = {
  "full-stack-developer": {
    title: "Full-Stack Developer",
    type: "Full Time",
    description: "Convert UI/UX designs into responsive applications; optimize for speed and scalability. Integrate APIs.",
    keySkills: ["HTML, CSS, JavaScript", "React UI Framework", "REST API, Git/GitHub basics"],
    experience: "2 years (embedded/Project exp. acceptable)",
    location: "Chennai",
    mode: "Hybrid",
    preferences: "Graduated in CA/IT with debugging skills",
  },
  "front-end-developer": {
    title: "Front end developer",
    type: "Full Time",
    description: "Convert UI/UX designs into responsive applications; optimize for speed and scalability. Integrate APIs.",
    keySkills: ["HTML, CSS, JavaScript", "React UI Framework", "REST API, Git/GitHub basics"],
    experience: "2 years (embedded/Project exp. acceptable)",
    location: "Chennai",
    mode: "Hybrid",
    preferences: "Graduated in CA/IT with debugging skills",
  },
  "ui-ux-designer": {
    title: "UI/UX Designer",
    type: "Full Time",
    description: "Convert UI/UX designs into responsive applications; optimize for speed and scalability. Integrate APIs.",
    keySkills: ["HTML, CSS, JavaScript", "React UI Framework", "REST API, Git/GitHub basics"],
    experience: "2 years (embedded/Project exp. acceptable)",
    location: "Chennai",
    mode: "Hybrid",
    preferences: "Graduated in CA/IT with debugging skills",
  },
};

export default function ApplyPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const jobDetails = jobDetailsMap[slug?.toLowerCase()?.replace(/ /g, "-")] || jobDetailsMap["full-stack-developer"];

  return (
    <div className="w-full min-h-screen bg-white flex flex-col p-28">
      <main className="flex-1 w-full">
        {/* Go Back Link */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 pb-4">
          <Link href="/career" className="text-primary text-sm font-semibold hover:opacity-80">
            ← Go back
          </Link>
        </div>

        {/* Main Content */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Sidebar - Job Details */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h1 className="text-primary text-3xl font-bold mb-2">{jobDetails.title}</h1>
                <p className="text-neutral-600 text-sm mb-8">{jobDetails.type}</p>

                {/* Job Details Cards */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-neutral-800 font-bold text-sm mb-2">Description</h3>
                    <p className="text-neutral-600 text-sm">{jobDetails.description}</p>
                  </div>

                  <div>
                    <h3 className="text-neutral-800 font-bold text-sm mb-2">Key Skills Required</h3>
                    {jobDetails.keySkills.map((skill, idx) => (
                      <p key={idx} className="text-neutral-600 text-sm">
                        {skill}
                      </p>
                    ))}
                  </div>

                  <div>
                    <h3 className="text-neutral-800 font-bold text-sm mb-2">Experience</h3>
                    <p className="text-neutral-600 text-sm">{jobDetails.experience}</p>
                  </div>

                  <div>
                    <h3 className="text-neutral-800 font-bold text-sm mb-2">Location</h3>
                    <p className="text-neutral-600 text-sm">{jobDetails.location}</p>
                  </div>

                  <div>
                    <h3 className="text-neutral-800 font-bold text-sm mb-2">Mode</h3>
                    <p className="text-neutral-600 text-sm">{jobDetails.mode}</p>
                  </div>

                  <div>
                    <h3 className="text-neutral-800 font-bold text-sm mb-2">Preferences</h3>
                    <p className="text-neutral-600 text-sm">{jobDetails.preferences}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Apply Form */}
            <div className="lg:col-span-2">
              <ApplyForm jobTitle={jobDetails.title} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
