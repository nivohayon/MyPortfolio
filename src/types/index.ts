export type Theme = 'light' | 'dark';

export enum localStorageKeys {
  theme = 'theme',
}

export interface IExperience {
  id: number;
  from: string;
  until: string;
  title: string;
  description: string;
  mainLink: string;
  links: {
    title: string;
    url: string;
  }[];
  skills: string[];
}

export interface IProject {
  id: number;
  previewUrl: string;
  title: string;
  description: string;
  skills: string[];
  mainLink: string;
  installCount: string;
}
