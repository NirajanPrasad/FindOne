import {
  videoAnimation,
  voiceArtist,
  developerImg,
  michael,
  holly,
  russell,
  landon,
  ctaImg,
} from "../assets/index";

export const NavLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "services",
    title: "Services",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "review",
    title: "Reviews",
  },
];

export const NavProfile = {
  title1: "Login",

  title2: "Get Started",
};

export const HeroSection = {
  slogan: "one you need",
  description:
    "For ambitious companies around the world, wallet makes moving money as simple, borderless and programmable as the rest of the internet.",
  button: "Join now",
};

export const PopularSection = {
  slogan: "Logo Design",
  description:
    "A logo is a word, symbol, or design that represents something. A logo can help people identify the brand of a business and remember it",
  button: "Explore",
};

export const StatsData = [
  {
    data: "10K+",
    service: "Happy Customers",
  },
  {
    data: "25+",
    service: "Category",
  },
  {
    data: "96%",
    service: "Customer Satisfaction",
  },
];

export const PopularServicesList = [
  {
    service: "Video & Animation",
    image: videoAnimation,
  },

  {
    service: "Voice Artist",
    image: voiceArtist,
  },

  {
    service: "Developer",
    image: developerImg,
  },
];

export const FeatureSection = [
  {
    heading: "Best in every budget",
    description:
      "we deliver best service for every budget. We offer you the quality and a professional experience along with your custom order",
  },
  {
    heading: "We value your time",
    description:
      "We are dedicated to your success. We value your time and work quickly and efficiently, so we have estimates within days or hours of your request.",
  },
  {
    heading: "Payment protection",
    description:
      "We offer payment protection and secure payment services for any kind of transaction. Our service is convenient and simple with no hidden charges.",
  },
  {
    heading: "24/7 support",
    description:
      "Our support team is available 24/7 from the many countries around the world. Whether it's quick technical support, or help with more complex issues, we've got you covered.",
  },
];

export const TestimonialSection = [
  {
    feedback:
      "Great service provided. This was my second time using the service, and everything went exactly as I wanted it to. The proofreading alone made all the difference in the world to me. The overall process was user friendly, which I appreciate very much.",
    image: michael,
    name: "Michael Hoffman",
    profession: "Senior Engineer",
    positionCss: "row-start-1 row-end-3 justify-self-end",
  },
  {
    feedback:
      "I could not be happier with my service. The company is great, the people are friendly and helpful, and I would them to anyone.",
    image: holly,
    name: "Holly Marshall",
    profession: "Designer",
    positionCss: "h-[20rem]",
  },
  {
    feedback:
      "This is a feedback on the service I received fromfreelancer. The service was great, the writer kept to their word and delivered wellwithin a reasonable time. They worked hard and  communicative throughout the process.",
    image: russell,
    name: "Russell Welch",
    profession: "Senior Writer",
    positionCss:
      "row-start-3 row-end-4 justify-self-end col-start-1 col-end-2 ",
  },
  {
    feedback:
      "A quick word about FindOne. Framer is forever changing the experience of designing for the web. Forget about a design tool. Once you get the basics, you're not on a design tool anymore. You're product story in the medium itself. As friendly & powerful as it is.",
    image: landon,
    name: "Landon Morgan",
    profession: "CEO",
    positionCss: "row-start-2 row-end-4 h-[26rem]",
  },
];

export const TestimonialDes = {
  heading: "What clients say about us",
  description:
    "We provide top-notch customer service, and it's what keeps us coming back. Our clients love us for our high quality work and fast around times.",
  button: "About us",
};

export const CTASection = {
  heading: "Become a freealncer now with Find One",
  paragraph:
    "Optimize your business and personal workflow with FindOne. Become a freelancer, skillsed persons are most welcome on our platform. Put your skills here to earn passive income",
  button: "Join now",
  image: ctaImg,
  bgImage: "",
};

export const FooterLinks = [
  {
    title: "Categories",
    CssClass: "row-start-1 row-end-3",
    links: [
      { id: "1", name: "Logo Design", link: "" },
      { id: "2", name: "Graphic Designer", link: "" },
      { id: "3", name: "Data Analaytics", link: "" },
      { id: "4", name: "Web Developer", link: "" },
      { id: "5", name: "Content Writing", link: "" },
      { id: "6", name: "Video & Animation", link: "" },
      { id: "7", name: "Digital Marketing", link: "" },
      { id: "8", name: "Music & Audio", link: "" },
    ],
  },
  {
    title: "About",
    CssClass: "row-start-1 row-end-3",
    links: [
      { id: "1", name: "Carrers", link: "" },
      { id: "2", name: "Press & News", link: "" },
      { id: "3", name: "Partnerships", link: "" },
      { id: "4", name: "How it works", link: "" },
      { id: "5", name: "News", link: "" },
      { id: "6", name: "Invester", link: "" },
      { id: "7", name: "Security", link: "" },
      { id: "8", name: "Sitemap", link: "" },
    ],
  },
  {
    title: "Terms",
    CssClass: "row-start-1 row-end-2",
    links: [
      { id: "1", name: "Privicy Policy", link: "" },
      { id: "2", name: "Terms & Condition", link: "" },
      { id: "3", name: "Copyright Policy", link: "" },
    ],
  },
  {
    title: "For clients",
    CssClass: "row-start-1 row-end-3",
    links: [
      { id: "1", name: "How to Hire", link: "" },
      { id: "2", name: "Talent Marketplace", link: "" },
      { id: "3", name: "Project Catalog", link: "" },
      { id: "4", name: "Talent Scoutg", link: "" },
      { id: "5", name: "Enterprise", link: "" },
      { id: "6", name: "Hire Worldwide", link: "" },
    ],
  },
  {
    title: "For Talent",
    CssClass: "row-start-2 row-end-3 col-start-3 col-end-4 self-end",
    links: [
      {
        id: "1",
        name: "Find Work",
        link: "/",
      },
      {
        id: "2",
        name: "Direct Contracts",
        link: "/",
      },
      {
        id: "3",
        name: "Worldwide Jobs",
        link: "/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    iconCss: "fa-brands fa-twitter fa-xl",
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-2",
    iconCss: "fa-brands fa-linkedin fa-xl",
    link: "https://www.linkedin.com/",
  },
  {
    id: "social-media-3",
    iconCss: "fa-brands fa-youtube fa-xl",
    link: "https://www.youtube.com/",
  },
];
