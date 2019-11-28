import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponent } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';

import { ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomValidatorDirective } from './custom-validator.directive';

import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
	CustomValidatorDirective,
  ],
  imports: [
    BrowserModule,
	ReactiveFormsModule,
	HttpClientModule,
	AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }