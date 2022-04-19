import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsersComponent } from './users/users.component';
import { FormComponent } from './form/form.component';
import { BgColorDirective } from './bg-color.directive';
import { DateAgoPipe } from './dateAgo.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsersComponent,
    FormComponent,
    BgColorDirective,
    DateAgoPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
