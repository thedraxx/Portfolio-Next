export interface GeneralProyects {
  dataProject: [
    {
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
      repo: string;
      title: string;
      description: string;
      image: string;
      url: string;
      tecnologies: string;
      name: string;
    }
  ];
  projectToShow: "Web App" | "Mobile" | "Next.js" | "React" | "All";
}

export interface infoProyects {
  repo: string;
  title: string;
  description: string;
  image: string;
  url: string;
  tecnologies: string;
  name: string;
}

export interface TypeOfProyects {
  project: "Web App" | "Mobile" | "Next.js" | "React" | "All";
}
