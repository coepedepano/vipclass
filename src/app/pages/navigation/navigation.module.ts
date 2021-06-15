import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { MenuActionComponent } from './menu-action/menu-action.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    MenuComponent,
    HomeComponent,
    FooterComponent,
    NotFoundComponent,
    MenuActionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule
  ],
  exports:[
    MenuComponent,
    HomeComponent,
    FooterComponent,
    NotFoundComponent,
    MenuActionComponent
  ]
})
export class NavigationModule { }
