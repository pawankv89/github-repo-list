import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  // Get Json Placeholder Post
  private url = 'http://jsonplaceholder.typicode.com/posts';

  //Git Hub Base URL
  private gitHubBaseURL = 'https://api.github.com/users/';

  constructor(private httpClient: HttpClient) { }

  // Get Json Placeholder Post
  getPosts() {
    return this.httpClient.get(this.url);
  }

  // Get Json Placeholder Post
  getPostsFromLocal() {
    return this.httpClient.get<any>('assets/posts.json')
      .toPromise()
      .then(res => <any[]>res)
      .then(data => { return data; });
  }

    // Get Git Hub User
    getGitHubUser(user: any, bodyParams: any) {
      return this.httpClient.get(this.gitHubBaseURL + user);
    }

     // Get Git Hub User Repos
     getGitHubUserRepos(user: any, urlParams: any) {
      const params = new HttpParams({ fromObject: urlParams });
      return this.httpClient.get(this.gitHubBaseURL + user + '/repos', {params});
    }
}
