import { Component, OnInit } from '@angular/core';
import { CommentService } from '../../services/comment.service';
import { Comment } from '../../models/comment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  comments: any = [];
  result: any;

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.comments = this.commentService.getComments();
  }

  add(item, text) {
    if(text) {
      let newComment : Comment = {
        id: this.getRandomInt(20,1000),
        text:text,
        commentDeepLevel: ++item.commentDeepLevel,
        subComments: [],
        parentId: item.id
      };
      item.subComments = [...item.subComments, newComment];
    }
  }

  remove(item) {
     this.removeNestedComment(this.comments,item.parentId, item.id);
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  removeNestedComment(arr, parentId, childId) {
    if(parentId == childId) {                                          
      this.comments = this.comments.filter(el=> el.id != parentId);  
      return;
    }

    let found = arr.find(node => node.id == parentId);

    if(found) {
        // I could use filter once more, but I wanted to use another approach to remove obj in arr 
        for(var i = found.subComments.length - 1; i >= 0; i--) {
          if(found.subComments[i].id === childId) {
            found.subComments.splice(i, 1);                         
          }
        }
    }
    else {
      arr.forEach(element => {
        return this.removeNestedComment(element.subComments, parentId, childId);
      });
    }
  }
}
