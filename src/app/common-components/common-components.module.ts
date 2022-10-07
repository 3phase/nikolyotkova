import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AppRoutingModule } from '../app-routing.module';
import { NavbarComponent } from '../navbar/navbar.component';


@NgModule({
  declarations: [
    NavbarComponent
  ],
  exports: [
    NavbarComponent,
    TranslateModule
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    TranslateModule
  ]
})
export class CommonComponentsModule { }
