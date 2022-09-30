export enum ContactType {
  github = 'github',
  linkedin = 'linkedin',
  twitter = 'twitter',
  youtube = 'youtube',
  email = 'email',
  buymeacoffee = 'buymeacoffee',
}

export interface Contact {
  twitter: string;
  site: string;
  calendly?: string;
  links: Record<ContactType, string>;
}

export const contact: Contact = {
  twitter: '@AlaDouagi',
  site: 'aladouagi.com',
  calendly: 'https://calendly.com/ala-douagi',
  links: {
    github: 'https://github.com/AlaDouagi',
    linkedin: 'https://www.linkedin.com/in/aladouagi/',
    twitter: 'https://twitter.com/AlaDouagi',
    youtube: 'https://www.youtube.com/channel/UCVMDeX73B545cTLwNre5S7w',
    email: 'mailto:ala.douagi@gmail.com',
    buymeacoffee: 'https://www.buymeacoffee.com/aladouagi',
  },
};
