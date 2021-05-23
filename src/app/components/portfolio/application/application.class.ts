export class Application {
  title: string;
  stack: string[];
  photoFileName: string;
  description: string;

  constructor(
    title: string,
    stack: string[],
    photoFileName: string,
    description: string
  ) {
    this.title = title;
    this.stack = stack;
    this.photoFileName = photoFileName;
    this.description = description;
  }
}
