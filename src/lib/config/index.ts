import type { Link } from "../types";

export const SITE = {
  title: "Hustle Hare",
  description: "Your place to get news and info on everthing reselling",
  author: "",
  //url: "https://astro-news-six.vercel.app",
  url: "https://hustlehare.com",
  //github: "https://github.com/Mrahmani71/astro-news",
  locale: "en-US",
  dir: "ltr",
  charset: "UTF-8",
  basePath: "/",
  postsPerPage: 4,
};

export const NAVIGATION_LINKS: Link[] = [
  {
    href: "/categories/reselling",
    text: "Reselling",
  },
  {
    href: "/categories/bots",
    text: "Bots",
  },
  {
    href: "/categories/tools",
    text: "Tools",
  },
  {
    href: "/categories/news-and-releases",
    text: "News & Releases",
  },
  

  // {
  //   href: "/categories/technology",
  //   text: "Technology",
  // },
  // {
  //   href: "/categories/programming",
  //   text: "Programming",
  // },
  // {
  //   href: "/categories/lifestyle",
  //   text: "Lifestyle",
  // },
  // {
  //   href: "/categories/productivity",
  //   text: "Productivity",
  // },
  // {
  //   href: "/categories/health",
  //   text: "Health",
  // },
  // {
  //   href: "/categories/finance",
  //   text: "Finance",
  // },
];

export const OTHER_LINKS: Link[] = [
  {
    href: "/about",
    text: "About us",
  },
  {
    href: "/authors",
    text: "Authors",
  },
  {
    href: "/contact",
    text: "Contact",
  },
  {
    href: "/privacy",
    text: "Privacy",
  },
  {
    href: "/terms",
    text: "Terms",
  },
  {
    href: "/cookie-policy",
    text: "Cookie Policy",
  },

];

export const SOCIAL_LINKS: Link[] = [
  {
    href: "https://github.com",
    text: "GitHub",
    icon: "github",
  },
  {
    href: "httpe://www.t.me",
    text: "Telegram",
    icon: "telegram",
  },
  {
    href: "https://twitter.com",
    text: "Twitter",
    icon: "newTwitter",
  },
  {
    href: "https://www.facebook.com",
    text: "Facebook",
    icon: "facebook",
  },
];
