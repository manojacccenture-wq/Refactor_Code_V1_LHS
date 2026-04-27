export interface JobDetails {
  title: string;
  type: string;
  description: string;
  keySkills: string[];
  experience: string;
  location: string;
  mode: string;
  preferences: string;
}

export const jobDetailsMap: Record<string, JobDetails> = {
  "full-stack-developer": {
    title: "Full-Stack Developer",
    type: "Full Time",
    description:
      "Convert UI/UX designs into responsive applications; optimize for speed and scalability. Integrate APIs.",
    keySkills: ["HTML, CSS, JavaScript", "React UI Framework", "REST API, Git/GitHub basics"],
    experience: "2 years (embedded/Project exp. acceptable)",
    location: "Chennai",
    mode: "Hybrid",
    preferences: "Graduated in CA/IT with debugging skills",
  },
  "front-end-developer": {
    title: "Front end developer",
    type: "Full Time",
    description:
      "Convert UI/UX designs into responsive applications; optimize for speed and scalability. Integrate APIs.",
    keySkills: ["HTML, CSS, JavaScript", "React UI Framework", "REST API, Git/GitHub basics"],
    experience: "2 years (embedded/Project exp. acceptable)",
    location: "Chennai",
    mode: "Hybrid",
    preferences: "Graduated in CA/IT with debugging skills",
  },
  "ui-ux-designer": {
    title: "UI/UX Designer",
    type: "Full Time",
    description:
      "Convert UI/UX designs into responsive applications; optimize for speed and scalability. Integrate APIs.",
    keySkills: ["HTML, CSS, JavaScript", "React UI Framework", "REST API, Git/GitHub basics"],
    experience: "2 years (embedded/Project exp. acceptable)",
    location: "Chennai",
    mode: "Hybrid",
    preferences: "Graduated in CA/IT with debugging skills",
  },
};

export function getJobBySlug(slug: string): JobDetails {
  const normalised = slug?.toLowerCase()?.replace(/ /g, "-");
  return jobDetailsMap[normalised] ?? jobDetailsMap["full-stack-developer"];
}
