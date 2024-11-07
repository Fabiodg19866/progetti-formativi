import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-request',
  templateUrl: './http-request.component.html',
  styleUrls: ['./http-request.component.css']
})
export class HttpRequest {
  loadedPosts = [];

  constructor(private http: HttpClient) {}


  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.http
      .post(
        'https://course-angular-a68d5-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
        postData
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  onFetchPosts() {

    this.http
    .get(
      'https://course-angular-a68d5-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
      
    )
    .subscribe(responseData => {
      console.log(responseData);
    });

    // Send Http request
  }

  onClearPosts() {
    // Send Http request
  }
}
