"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import ApplyForm from "@/app/components/sections/career/ApplyForm/ApplyForm";
import Button from "@/app/components/ui/Button";

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
  const slug = params.slug as string;

  const jobDetails = jobDetailsMap[slug?.toLowerCase()?.replace(/ /g, "-")] || jobDetailsMap["full-stack-developer"];

  return (
    <div className="w-full min-h-screen bg-white flex flex-col md:p-28">
      <main className="flex-1 w-full">
        {/* Go Back Link */}
        <div className="max-w-7xl  mt-[20%] md:mt-[0%] ">
          <Button href="/career" className="text-primary " variant="outline">
            ← Go back
          </Button>
        </div>

        {/* Main Content */}
        <section className="max-w-7xl mx-auto px-4 md:px-0 py-2">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Sidebar - Job Details */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h2 className="text-primary  font-bold-token mb-2">{jobDetails.title}</h2>
                <p className=" mb-8">{jobDetails.type}</p>

                {/* Job Details Cards */}
                <div className="space-y-6">
                  <div>
                    <h6 className=" font-bold-token  mb-2">Description</h6>
                    <p className=" ">{jobDetails.description}</p>
                  </div>

                  <div>
                    <h6 className=" font-bold-token  mb-2">Key Skills Required</h6>
                    {jobDetails.keySkills.map((skill, idx) => (
                      <p key={idx} className=" ">
                        {skill}
                      </p>
                    ))}
                  </div>

                  <div>
                    <h6 className="font-bold-token  mb-2">Experience</h6>
                    <p className=" ">{jobDetails.experience}</p>
                  </div>

                  <div>
                    <h6 className="font-bold-token  mb-2">Location</h6>
                    <p className=" ">{jobDetails.location}</p>
                  </div>

                  <div>
                    <h6 className="font-bold-token  mb-2">Mode</h6>
                    <p className=" ">{jobDetails.mode}</p>
                  </div>

                  <div>
                    <h6 className="font-bold-token  mb-2">Preferences</h6>
                    <p className=" ">{jobDetails.preferences}</p>
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
