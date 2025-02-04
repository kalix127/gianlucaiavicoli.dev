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
    socials: Array<{
      title: string;
      to: string;
      icon: string;
      target?: string;
    }>;
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
