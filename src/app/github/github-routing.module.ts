import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { RepolistComponent } from './repolist/repolist.component';
  
const routes: Routes = [
  { path: "", component: RepolistComponent }
];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GithubRoutingModule {}