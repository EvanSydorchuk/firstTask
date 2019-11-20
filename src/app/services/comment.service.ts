import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private comments = [];

  constructor() { }

  getComments() {
    this.generateComments();
  
    this.comments[1].subComments.push({
      id: 12,
      text: '123',
      commentDeepLevel:2,
      subComments:[],
      parentId:1
    },{
        id: 13,
        text: 'lorem',
        commentDeepLevel:2,
        subComments:[],
        parentId:1
      });
  
    console.table(this.comments);

    return this.comments;
  }

  generateComments() {
    for(let i = 0; i < 10; i++) {
      this.comments.push({
        id: i,
        text: 'comment ' + i.toString(),
        commentDeepLevel:1,
        subComments:[],
        parentId:i
      });
    }
  }
}
