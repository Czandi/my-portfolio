export class Application {
  title: string;
  stack: string[];
  photoFileName: string;
  description: string;
  githubLink: string;
  demoLink: string;

  constructor(
    title: string,
    stack: string[],
    photoFileName: string,
    description: string,
    githubLink: string,
    demoLink?: string
  ) {
    this.title = title;
    this.stack = stack;
    this.photoFileName = photoFileName;
    this.description = description;
    this.githubLink = githubLink;

    if (demoLink) {
      this.demoLink = demoLink;
    } else {
      this.demoLink = '';
    }
  }
}
