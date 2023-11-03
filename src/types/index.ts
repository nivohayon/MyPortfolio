export interface IExperience {
  id: number;
  from: string;
  until: string;
  title: string;
  description: string;
  cardClickLink: string;
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
  cardClickLink: string;
}
