export interface OtherActivity {
  id: string;
  title: string;
  status: string;
  organisation: string;
  image: string | null;
  description: string;
}

export const otherActivitiesData: OtherActivity[] = [
  {
    id: "emcee",
    title: "College Fest Emcee",
    status: "Event Host / Emcee",
    organisation: "Pre-University College",
    image: "/otheractivities/emcee.jpeg",
    description:
      "Hosted and coordinated a college fest as an Emcee before an audience of 2,000+ attendees, managing stage proceedings, audience engagement, announcements, and event transitions.",
  },
  {
    id: "technical-mentor",
    title: "Technical Session Mentor",
    status: "Mentor / Session Facilitator",
    organisation: "College / Student Community",
    image:"/otheractivities/sessionmentor.png",
    description:
      "Mentored students and conducted technical sessions, helping participants understand development concepts, tools, and practical approaches to building projects.",
  },
  {
    id: "workshop-speaker",
    title: "Technical Workshop Speaker",
    status: "Speaker / Session Facilitator",
    organisation: "College / Student Community",
    image:"/otheractivities/session1.jpeg",
    description:
      "Delivered technical sessions and interactive workshops, sharing practical knowledge and guiding students through technical concepts and project development.",
  },
  {
    id: "radio-storytelling",
    title: "Radio Storytelling Session",
    status: "Storytelling Speaker",
    organisation: "Radio / Community Platform",
    image: "/otheractivities/akashwani.png",
    description:
      "Delivered a storytelling session on radio, engaging listeners through narrative-driven communication and demonstrating public speaking, creativity, and audience engagement.",
  },
];
