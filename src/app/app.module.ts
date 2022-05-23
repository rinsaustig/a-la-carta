import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { Section1Component } from './components/section1/section1.component';
import { OrderComponent } from './components/order/order.component';
import { PreFooterComponent } from './components/pre-footer/pre-footer.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselModule } from './components/carousel/carousel.module';
import { counterReducer } from 'src/app/components/carousel/store/carousel.reducer';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    Section1Component,
    OrderComponent,
    PreFooterComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
    CarouselModule,
    StoreModule.forRoot({ count: counterReducer }),
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
