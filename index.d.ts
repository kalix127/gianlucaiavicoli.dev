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
    footer: {
      credits: {
        title: string;
        to: string;
      };
    };
  }
}

export {};
