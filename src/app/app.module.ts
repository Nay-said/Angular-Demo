import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomValidatorDirective } from './custom-validator.directive';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/moment';
import * as moment from 'moment';
import { DynamicButtonComponent } from './abstract-components/dynamic-button/dynamic-button.component';
import { DynamicButtonDemoComponent } from './dynamic-button-demo/dynamic-button-demo.component';

import { PlaygroundComponent } from './playground/playground.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoUtilsModule } from './calender/demo/module';
import { TestAreaComponent } from './playground/test-area/test-area.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule, MatIconModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { TxtUploadComponent } from './abstract-components/txt-upload/txt-upload.component';
import { FormArrayComponent } from './forms/form-array/form-array.component';

export function momentAdapterFactory() {
  return adapterFactory(moment);
};

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    CustomValidatorDirective,
    DynamicButtonComponent,
    DynamicButtonDemoComponent,
    TestAreaComponent,
    PlaygroundComponent,
    TxtUploadComponent,
    FormArrayComponent
  ],
  imports: [
    BrowserModule,
	  ReactiveFormsModule,
	  HttpClientModule,
	  AppRoutingModule,
	  CalendarModule.forRoot({ provide: DateAdapter, useFactory: momentAdapterFactory }),
	  DemoUtilsModule,
    BrowserAnimationsModule,
    MatButtonModule,  
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }