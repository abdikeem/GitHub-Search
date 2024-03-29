import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
// import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersDetailsComponent,
    // SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
