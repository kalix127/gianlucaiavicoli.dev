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
  socials: {
    email: "mailto:info@gianlucaiavicoli.dev",
    github: "https://github.com/kalix127",
    repository: "https://github.com/kalix127/Portfolio",
    linkedin: "https://linkedin.com/in/gianluca-iavicoli-684b32262",
    reddit: "https://reddit.com/user/kalix127",
    x: "https://x.com/kalix127",
  },
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
  projects: {
    personal: [
      {
        title: "KalixOS",
        description: "projects.descriptions.kalixos",
        link: "https://github.com/kalix127/kalixos",
        previewUrl: "/img/projects/kalixos.gif",
        icons: {
          light: "manjaro",
          dark: "manjaro",
        },
      },
      {
        title: "Tailwind Battles",
        description: "projects.descriptions.tailwind_battle",
        link: "https://github.com/kalix127/tailwind-battle-solutions",
        previewUrl: "/img/projects/tailwind-battles.webp",
        icons: {
          light: "tailwind-battles",
          dark: "tailwind-battles",
        },
      },
    ],
    contributions: [
      {
        github: "unovue/inspira-ui",
        title: "Inspira UI",
        description: "projects.descriptions.inspira_ui",
        link: "https://github.com/unovue/inspira-ui",
        icons: {
          light: "inspira-light",
          dark: "inspira-dark",
        },
      },
      {
        github: "unovue/shadcn-vue",
        title: "Shadcn-Vue",
        description: "projects.descriptions.shadcn_vue",
        link: "https://github.com/unovue/shadcn-vue",
        icons: {
          light: "shadcn-vue",
          dark: "shadcn-vue",
        },
      },
      {
        github: "ZTL-UwU/shadcn-docs-nuxt",
        title: "Shadcn Docs",
        description: "projects.descriptions.shadcn_docs",
        link: "https://github.com/ZTL-UwU/shadcn-docs-nuxt",
        icons: {
          light: "shadcn-docs-light",
          dark: "shadcn-docs-dark",
        },
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
