import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {

  @Input() title?:string;
  @Input() content?:string;
  @Input() likes:number = 0;
  



  addLike(){
    this.likes++;
  }
}
