import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponent } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';

import { ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomValidatorDirective } from './custom-validator.directive';

import { AppService } from './app.service';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/moment';
import * as moment from 'moment';
import { CalenderComponent } from './calender/calender.component';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DemoUtilsModule } from './calender/demo/module';

export function momentAdapterFactory() {
  return adapterFactory(moment);
};

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
	CustomValidatorDirective,
	CalenderComponent,
  ],
  imports: [
    BrowserModule,
	ReactiveFormsModule,
	HttpClientModule,
	AppRoutingModule,
	CalendarModule.forRoot({ provide: DateAdapter, useFactory: momentAdapterFactory }),
	DemoUtilsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }