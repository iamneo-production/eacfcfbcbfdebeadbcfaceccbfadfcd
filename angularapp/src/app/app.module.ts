import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodayComponent } from './today/today.component';
import { NewFoodComponent } from './component/new-food/new-food.component';
import { HeaderComponent } from './component/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    TodayComponent,
    NewFoodComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }