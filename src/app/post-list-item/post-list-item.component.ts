import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../class/post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor() { }

  ngOnInit(): void {
  }

  getColor(){
    if (this.post.loveIts < 0) {
      return 'red';
    }else if(this.post.loveIts > 0){
      return 'green';
    }
  }

  onLoveIt(title: string){
    if (this.post.title === title) {
      this.post.loveIts ++;
    }
  }

  onDontLoveIt(title: string){
    if (this.post.title === title) {
      this.post.loveIts --;
    }
  }
}
