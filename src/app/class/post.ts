export class Post {
   public title: string;
   public content: string;
   public loveIts: number;
   public created_at: Date;

   constructor(){
       this.created_at = new Date();
   }
}
