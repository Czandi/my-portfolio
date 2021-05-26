export class Graphic {
  title: string;
  photoFileName: string;
  description: string;
  link: string;

  constructor(
    title: string,
    photoFileName: string,
    description: string,
    link: string
  ) {
    this.title = title;
    this.photoFileName = photoFileName;
    this.description = description;
    this.link = link;
  }
}
