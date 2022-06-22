import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommonComponentsModule } from '../common-components/common-components.module';

import { ProjectComponent } from './project.component';
import { ProjectsRoutingModule } from './projects-routing.module';


@NgModule({
  declarations: [
    ProjectComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    CommonComponentsModule
  ]
})
export class ProjectsModule { }
