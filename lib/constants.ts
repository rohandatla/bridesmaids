export const BRIDESMAID_DATA = {
  bride: "Priya",
  partner: "Rohan",
  wedding: {
    dateFull: "November 24–25, 2026",
    dateIso: "2026-11-24",
    arrivalDate: "November 23, 2026",
    location: "Granbury, TX",
  },
  ask: {
    heading: "Will You Be My Bridesmaid?",
    subheading: "I'm getting married — and I need my girls next to me when it happens.",
  },
  message: {
    title: "A Few Words",
    askLine: "It would mean a lot to me if you'd stand with me as a bridesmaid.",
    paragraphs: [
      "Life has a way of changing, but some people remain constants through it all. You've been one of those people for me.",
      "Thank you for the friendship, the memories, and for being someone I could always count on. As Rohan and I begin this new chapter together, I can't imagine celebrating such an important day without you beside me.",
      "It would mean a lot to me if you'd stand with me as one of my bridesmaids.",
    ],
  },
  details: [
    {
      label: "Arrival",
      value: "Night of Nov 23",
      note: "Please arrive by the evening of Nov 23, and plan to be at the venue early on both Nov 24 and Nov 25. Bridesmaids are needed both days — please let me know if you can't attend both.",
      link: null as { url: string; label: string } | null,
    },
    {
      label: "Attire",
      value: "TBD",
      note: "Dress details are still being finalized — color, style, and where to order will be shared soon.",
      link: null as { url: string; label: string } | null,
    },
    {
      label: "Bachelorette Party",
      value: "TBD",
      note: "Planning in progress — stay tuned.",
      link: null as { url: string; label: string } | null,
    },
    {
      label: "Carnival Dance",
      value: "Choreographed",
      note: "Some of our dancer bridesmaids will help to choreograph a bridesmaid dance. Details coming soon.",
      link: null as { url: string; label: string } | null,
    },
  ],
  roster: [
    { name: "Teju", role: "Maid of Honor" },
    { name: "Bhumika", role: "Bridesmaid" },
    { name: "Sanjana", role: "Bridesmaid" },
    { name: "Archana", role: "Bridesmaid" },
    { name: "Sowmya", role: "Bridesmaid" },
    { name: "Nitisha", role: "Bridesmaid" },
    { name: "Neha", role: "Bridesmaid" },
    { name: "Sravani", role: "Bridesmaid" },
    { name: "Sonu", role: "Bridesmaid" },
    { name: "Harshitha", role: "Bridesmaid" },
  ] as { name: string; role: string }[],
  contact: {
    email: "priya@example.com",
    hashtag: "#BridesmaidsForPriya",
  },
} as const;
