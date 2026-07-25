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
      value: "It's a Surprise",
      note: "I'll be gifting each of you a saree to wear for the traditional ceremony. For Haldi, Carnival, and Reception, feel free to wear whatever you'd like while following the general dress code — take a look at some",
      link: { url: "/inspo", label: "outfit inspo" } as { url: string; label: string } | null,
    },
    {
      label: "Carnival Dance",
      value: "Choreographed",
      note: "Some of our dancer bridesmaids will help to choreograph a bridesmaid dance. Details coming soon.",
      link: null as { url: string; label: string } | null,
    },
  ],
  roster: [
    {
      name: "Teju",
      role: "Maid of Honor",
      intro: "Teju is my dearest sister, and I've had the privilege of knowing and growing up with her my entire life. She's been my constant source of love, support, and laughter through every stage of life, and I couldn't imagine this journey without her by my side.",
      photo: "/bridesmaids/teju.jpg",
      photoPosition: "center 25%",
    },
    {
      name: "Bhumika",
      role: "Bridesmaid",
      intro: "Bhumika is my cutest baby cousin, my built-in bestie, and the one I share everything with. I've basically raised her (lol), and she'll always be my little baby. But as much as I like to say I raised her, I've learned so much from her too. I'm grateful to have them in my life.",
      photo: "/bridesmaids/bhumika.jpg",
    },
    {
      name: "Sanjana",
      role: "Bridesmaid",
      intro: "I met Sanjana during my undergraduate years, and ever since, she's been my 2 a.m. friend, the person I can call about absolutely anything. Through every high, low, and everything in between, she's been a constant source of support, laughter, and honest advice.",
      photo: "/bridesmaids/sanjana.jpg",
    },
    {
      name: "Archana",
      role: "Bridesmaid",
      intro: "I met Archana on the very first day of college, and we've shared so many great memories ever since. From bunking classes to getting ready together and dancing the night away, she's always made every moment more fun.",
      photo: "/bridesmaids/archana.jpg",
    },
    {
      name: "Sowmya",
      role: "Bridesmaid",
      intro: "I've known Sowmya Akka since school, when she was my senior. While she's my sister's best friend, she's also become a close friend to me and someone I've always looked up to. I'll never forget my first visit to Ohio, where she took such great care of me and truly went above and beyond to make me feel at home.",
      photo: "/bridesmaids/sowmya.jpg",
      photoZoom: 1.3,
    },
    {
      name: "Nitisha",
      role: "Bridesmaid",
      intro: "I've known Nitisha since school, and somehow our friendship started with a chance meeting in the restroom. Since then, it's been endless conversations, so much love, and countless laughs. Even after she moved to Delhi, our friendship never skipped a beat. She's one of the funniest and most cheerful people I know.",
      photo: "/bridesmaids/nitisha.jpg",
    },
    {
      name: "Sravani",
      role: "Bridesmaid",
      intro: "I've known Sravani since school, and somehow we ended up sharing the same school, intermediate, and undergrad journey. She's been my go-to study buddy, someone who patiently listens to all my thoughts, and a friend who's always there when you need her.",
      photo: "/bridesmaids/sravani.jpg",
    },
    {
      name: "Neha",
      role: "Bridesmaid",
      intro: "Neha is my cutest roommate and one of the most caring people I know. She's my painting, cooking, walking and Bridgerton buddy, and somehow always finds a way to keep my belly full haha. Whether it's trying out new recipes or just spending time together, she brings so much warmth and joy into everyday moments.",
      photo: "/bridesmaids/neha.jpg",
    },
    {
      name: "Sonu",
      role: "Bridesmaid",
      intro: "I met Sonu during my Master's. Even though she went to a different school, it's easy to forget, since we became so close so fast. She's hardworking, endlessly positive, and brings cheer wherever she goes. From spontaneous GRWMs to countless fun memories along the way, she's been a constant source of joy in my life.",
      photo: "/bridesmaids/sonu.jpg" as string | null,
    },
    {
      name: "Harshitha",
      role: "Bridesmaid",
      intro: "Harshitha and I grew up together. She's a close family friend, and our friendship actually spans generations, since her mom and my mom grew up together too. I've always admired her love for animals. She exudes such calmness and is one of the easiest people to just hang out with.",
      photo: "/bridesmaids/harshitha.jpg",
    },
  ] as {
    name: string;
    role: string;
    intro: string;
    photo: string | null;
    photoPosition?: string;
    photoZoom?: number;
  }[],
  contact: {
    email: "priya@example.com",
    hashtag: "#BridesmaidsForPriya",
  },
} as const;
