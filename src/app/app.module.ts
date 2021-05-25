import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './components/card/card.component';
import { ButtonComponent } from './components/button/button.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { LoginComponent } from './pages/login/login.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { DefaultComponent } from './pages/default/default.component';
import { SingleProductComponent } from './pages/single-product/single-product.component';
import { MultipleProductComponent } from './pages/multiple-product/multiple-product.component';
import { ConnectComponent } from './pages/connect/connect.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    ButtonComponent,
    UserCardComponent,
    LoginComponent,
    AddProductComponent,
    DefaultComponent,
    SingleProductComponent,
    MultipleProductComponent,
    ConnectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
