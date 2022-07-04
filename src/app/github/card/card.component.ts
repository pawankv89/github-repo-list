import { Component, Input, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-card',
  template: `
   
    <span>
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo mr-1 color-fg-muted">
    <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
    </svg>
    <span style="padding-left: 5px;" ><b><a href="{{data.clone_url}}" target="_blank">{{data.name}}</a></b><span class="visibility-box" style="padding-left: 5px; padding-right: 5px; margin-left: 5px;">Public</span></span>
    </span>

    <div>{{data.description}}</div>

    <span *ngIf="data.language">
    <span class="repo-language-color" style="background-color: #F05138"></span>
    <span style="padding-left: 5px;">{{data.language}}</span>
    </span>
    
    <span class="left-padding-item" *ngIf="data.stargazers_count">
    <svg aria-hidden="true" height="15" width="15" viewBox="0 0 24 24" version="1.1" data-view-component="true">
    <path fill-rule="evenodd" d="M12 .25a.75.75 0 01.673.418l3.058 6.197 6.839.994a.75.75 0 01.415 1.279l-4.948 4.823 1.168 6.811a.75.75 0 01-1.088.791L12 18.347l-6.117 3.216a.75.75 0 01-1.088-.79l1.168-6.812-4.948-4.823a.75.75 0 01.416-1.28l6.838-.993L11.328.668A.75.75 0 0112 .25zm0 2.445L9.44 7.882a.75.75 0 01-.565.41l-5.725.832 4.143 4.038a.75.75 0 01.215.664l-.978 5.702 5.121-2.692a.75.75 0 01.698 0l5.12 2.692-.977-5.702a.75.75 0 01.215-.664l4.143-4.038-5.725-.831a.75.75 0 01-.565-.41L12 2.694z"></path>
    </svg>
    <span style="padding-left: 5px;">{{data.stargazers_count}} stars</span>
    </span>

    <span class="left-padding-item" *ngIf="data.watchers_count">
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-eye mr-2">
    <path fill-rule="evenodd" d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"></path>
    </svg>
    <span style="padding-left: 5px;">{{data.watchers_count}} watching</span>
    </span>

    <span class="left-padding-item" *ngIf="data.forks">
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo-forked mr-2">
    <path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
    </svg>
    <span style="padding-left: 5px;">{{data.forks}} fork</span>
    </span>

    <span class="left-padding-item" *ngIf="data.open_issues_count">
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo-forked mr-2">
    <path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
    </svg>
    <span style="padding-left: 5px; color: red">{{data.open_issues_count}} issues</span>
    </span>

    <div>
    <span style="background-color: #F05138"></span>
    <!-- <span>Updated on {{getDateConverted(data.created_at)}}</span> -->
    <!-- <span>Updated on {{getDateConverted(data.updated_at)}}</span> -->
    <span>Updated on {{getDateConverted(data.pushed_at)}}</span>
    </div>
    <!-- -->
    `,
  styles: [`
    :host {
      display: block;
      padding: 32px;
      border: 1px solid black;
      border-radius: 8px;
      margin-right: 10px;
      margin-left: 10px;
      margin-bottom: 10px;
      margin-top: 10px;
    };
    .left-padding-item {
      padding-left: 20px;
    };
    .repo-language-color {
        position: relative;
        top: 1px;
        display: inline-block;
        width: 12px;
        height: 12px;
        border: 1px solid var(--color-primer-border-contrast);
        border-radius:50%
    };
    .visibility-box {
    border-radius: 25px;
    border: 1px solid #050802;
    padding: 2px;
}
    `]
})
export class CardComponent {
  @Input() data: any;
  datePipe = new DatePipe('en-US');
  //date = new Date('2019-11-18T18:29:31Z').toLocaleDateString("en-us")

  getDateConverted(datestring: any) {
    const startDate = new Date(datestring).toLocaleDateString("en-us");
    var date = this.datePipe.transform(startDate, "d MMM y"); // yyyy-MM-dd  MMMM d, y MMM d, y
    return date;
  }
}


