import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-repolist',
  templateUrl: './repolist.component.html',
  styleUrls: ['./repolist.component.scss']
})

export class RepolistComponent implements OnInit {

  user = 'pawankv89';
  page = 0;
  posts: any = [];
  loading = false;
  repositories = '';
  userdetails: any;

  constructor(private service: GithubService) { }

  ngOnInit(): void {
    this.getGitHubUser();
    this.getGitHubUserRepos();
  }

  getGitHubUser() {
    let options = {};
    options = { page: this.page };
    this.service.getGitHubUser(this.user, options)
      .subscribe((response: any) => {
        if (response?.public_repos) {
          this.repositories = response.public_repos;
          this.userdetails = response;
        }
      });
  }

  getGitHubUserRepos() {
    this.loading = true;
    let options = {};
    options = { page: this.page };
    this.service.getGitHubUserRepos(this.user, options)
      .subscribe((response: any) => {
        this.loading = false;
        if (response?.length > 0) {
          this.posts = this.posts.concat(response);
          this.page = this.page + 1;
        }
      });
  }

  onScroll() {
    this.getGitHubUserRepos();
  }

  onClickPost(post: any) {
    console.log(post);
  }
}