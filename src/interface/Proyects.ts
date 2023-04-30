export interface GeneralProyects {
  dataProject: [
    {
      ESDescription: string;
      repo: string;
      title: string;
      description: string;
      image: string;
      url: string;
      tecnologies: string;
      name: string;
    }
  ];
}

export interface Projects {
  dataProject: [
    {
      ESDescription: string;
      repo: string;
      title: string;
      description: string;
      image: string;
      url: string;
      tecnologies: string;
      name: string;
    }
  ];
  projectToShow: "Web App" | "Mobile" | "Next.js" | "React" | "Web App" | "All";
}

export interface infoProyects {
  repo: string;
  title: string;
  description: string;
  image: string;
  url: string;
  tecnologies: string;
  name: string;
  ESDescription: string;
}

export interface TypeOfProyects {
  project: "Web App" | "Mobile" | "Next.js" | "React" | "All";
}
