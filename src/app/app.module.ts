import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { CategoriesRowComponent } from './components/main-content/categories-row/categories-row.component';
import { AboutComponent } from './components/misc/about/about.component';
import { ContactComponent } from './components/misc/contact/contact.component';
import { Error404Component } from './components/misc/errors/error404/error404.component';
import { ProductsDisplayComponent } from './components/main-content/products-display/products-display.component';
import { ProductsDisplaySidebarComponent } from './components/main-content/products-display/products-display-sidebar/products-display-sidebar.component';
import { ProductsDisplayMainComponent } from './components/main-content/products-display/products-display-main/products-display-main.component';
import { CheckDescriptionPipe } from './pipes/check-description.pipe';
import { RegisterationComponent } from './components/authentication/registeration/registeration.component';
import { SignInComponent } from './components/authentication/sign-in/sign-in.component';
import { PasswordEncryptPipe } from './pipes/password-encrypt.pipe';
import { CartComponent } from './components/private/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    MainContentComponent,
    CategoriesRowComponent,
    AboutComponent,
    ContactComponent,
    Error404Component,
    ProductsDisplayComponent,
    ProductsDisplaySidebarComponent,
    ProductsDisplayMainComponent,
    CheckDescriptionPipe,
    RegisterationComponent,
    SignInComponent,
    PasswordEncryptPipe,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
