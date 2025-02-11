declare module "nuxt/schema" {
  interface AppConfig {
    site: {
      title: string;
      description: string;
      ogImage?: string;
      ogImageColor?: string;
    };
    theme: {
      color: string;
      radius: number;
    };
    socials: {
      email: string;
      github: string;
      repository: string;
      linkedin: string;
      reddit: string;
      x: string;
    };
    skills: {
      languages: Array<{
        name: string;
        icon: string;
        url: string;
      }>;
      frameworks: Array<{
        name: string;
        icon: string;
        url: string;
      }>;
      tools: Array<{
        name: string;
        icon: string;
        url: string;
      }>;
    };
    projects: {
      personal: Array<Project>;
      contributions: Array<Project>;
    };
    certifications: Array<{
      title: string;
      issuer: string;
      icon: string;
      url: string;
    }>;
    footer: {
      credits: {
        title: string;
        to: string;
      };
    };
  }
}

export interface Project {
  github?: string; // <github-username>/<github-repo>
  title: string;
  description: string;
  sourceUrl?: string;
  websiteUrl?: string;
  previewUrl?: string;
  icons?: {
    light?: string;
    dark?: string;
  };
}

export {};
