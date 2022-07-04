import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GithubRoutingModule } from './github-routing.module';
import { RepolistComponent } from './repolist/repolist.component';

import { PrimeNGALLModule } from '../../primeng-all.module'
import { HttpClientModule } from '@angular/common/http';
import { MaterialALLModule } from '../../material-all.module';
import { CardComponent } from './card/card.component';
import { SpinnerModule } from '../spinner/spinner.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    RepolistComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    GithubRoutingModule,
    PrimeNGALLModule,
    MaterialALLModule,
    HttpClientModule,
    SpinnerModule,
    FlexLayoutModule
  ],
  exports:[ 
    RepolistComponent,
    CardComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class GithubModule { }
