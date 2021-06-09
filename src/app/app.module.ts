import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { ButtonComponent } from './components/button/button.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { NavigationModule } from './pages/navigation/navigation.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConnectComponent } from './pages/connect/connect.component';
//import { AddNewComponent } from './pages/product/add-new/add-new.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ButtonComponent,
    UserCardComponent,
    ConnectComponent,
    //AddNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NavigationModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
