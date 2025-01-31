export default defineAppConfig({
  site: {
    title: "site_title",
    description: "site_description",
    ogImage: "/og.png",
    ogImageColor: "dark",
  },
  theme: {
    color: "zinc",
    radius: 0.5,
  },
  socials: [
    {
      title: "github_profile",
      icon: "mdi:github",
      to: "https://github.com/kalix127",
      target: "_blank",
    },
    {
      title: "linkedin_profile",
      icon: "mdi:linkedin",
      to: "https://linkedin.com/in/gianluca-iavicoli-684b32262",
      target: "_blank",
    },
    {
      title: "reddit_profile",
      icon: "mdi:reddit",
      to: "https://reddit.com/user/kalix127",
      target: "_blank",
    },
    {
      title: "x_profile",
      icon: "mdi:twitter",
      to: "https://x.com/kalix127",
      target: "_blank",
    },
  ],
  footer: {
    credits: {
      title: "kalix127",
      to: "https://github.com/kalix127",
    },
  },
});
