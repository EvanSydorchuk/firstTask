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

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.comments = this.commentService.getComments();
  }

}
