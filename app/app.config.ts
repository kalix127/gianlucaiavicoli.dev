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
  skills: {
    languages: [
      {
        name: "HTML5",
        icon: "vscode-icons:file-type-html",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        name: "CSS3",
        icon: "vscode-icons:file-type-css",
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        name: "JavaScript",
        icon: "vscode-icons:file-type-js-official",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        name: "TypeScript",
        icon: "vscode-icons:file-type-typescript-official",
        url: "https://www.typescriptlang.org",
      },
      {
        name: "Bash",
        icon: "devicon-plain:bash",
        url: "https://www.gnu.org/software/bash",
      },
      {
        name: "Lua",
        icon: "vscode-icons:file-type-lua",
        url: "https://www.lua.org/start.html",
      },
    ],
    frameworks: [
      {
        name: "Vue.js",
        icon: "vscode-icons:file-type-vue",
        url: "https://vuejs.org",
      },
      {
        name: "Nuxt.js",
        icon: "vscode-icons:file-type-nuxt",
        url: "https://nuxt.com",
      },
      {
        name: "Tailwind CSS",
        icon: "vscode-icons:file-type-tailwind",
        url: "https://tailwindcss.com",
      },
      {
        name: "Sass/SCSS",
        icon: "vscode-icons:file-type-scss2",
        url: "https://sass-lang.com",
      },
      {
        name: "Vitest",
        icon: "vscode-icons:file-type-vitest",
        url: "https://vitest.dev",
      },
      {
        name: "Cypress",
        icon: "vscode-icons:file-type-cypress",
        url: "https://www.cypress.io",
      },
    ],
    tools: [
      { name: "Linux", icon: "devicon:linux", url: "https://www.linux.org" },
      { name: "Vim", icon: "devicon:vim", url: "https://www.vim.org" },
      {
        name: "Tmux",
        icon: "vscode-icons:file-type-light-tmux",
        url: "https://github.com/tmux/tmux",
      },
      { name: "Git", icon: "vscode-icons:file-type-git", url: "https://git-scm.com" },
      { name: "GitHub", icon: "mdi:github", url: "https://github.com" },
      {
        name: "GitHub Actions",
        icon: "devicon:githubactions",
        url: "https://github.com/features/actions",
      },
      {
        name: "Docker",
        icon: "vscode-icons:file-type-docker",
        url: "https://www.docker.com",
      },
      {
        name: "Nginx",
        icon: "vscode-icons:file-type-nginx",
        url: "https://nginx.org",
      },
      {
        name: "Cloudflare",
        icon: "devicon:cloudflare",
        url: "https://www.cloudflare.com",
      },
      { name: "Vercel", icon: "vscode-icons:file-type-vercel", url: "https://vercel.com" },
      {
        name: "Prisma",
        icon: "vscode-icons:file-type-prisma",
        url: "https://www.prisma.io",
      },
      {
        name: "Vite",
        icon: "vscode-icons:file-type-vite",
        url: "https://vitejs.dev",
      },
    ],
  },
  footer: {
    credits: {
      title: "kalix127",
      to: "https://github.com/kalix127",
    },
  },
});
