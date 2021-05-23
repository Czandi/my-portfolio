export class Graphic {
  title: string;
  photoFileName: string;
  description: string;

  constructor(title: string, photoFileName: string, description: string) {
    this.title = title;
    this.photoFileName = photoFileName;
    this.description = description;
  }
}
