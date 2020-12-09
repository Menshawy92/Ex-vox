export class Comments {
  id: number;
  title: string;
  body: string;

  constructor(createDefault = false, comment: any = null) {
    if (createDefault) {
      this.id = 0;
      this.title = '';
      this.body = '';
    }
    if (comment) {
      this.id = comment.id;
      this.title = comment.title;
      this.body = comment.body;
    }
  }
}