import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { ListingsComponent } from '../listings/listings.component';
import { CalenderComponent } from '../calender/calender.component';
import { HomeComponent } from '../home/home.component';
import { DynamicButtonDemoComponent } from '../dynamic-button-demo/dynamic-button-demo.component';
import { PlaygroundComponent } from '../playground/playground.component';
import { FormArrayComponent } from '../forms/form-array/form-array.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'angularTest', component: HomeComponent},
  { path: 'dynamic-form', component: ContactUsComponent},
  { path: 'form-array', component: FormArrayComponent},
	{ path: 'listings', component: ListingsComponent},
  { path: 'calendar', component: CalenderComponent},
  { path: 'dynamic-button', component: DynamicButtonDemoComponent},
  { path: 'playground', component: PlaygroundComponent}
]

@NgModule({
  declarations: [],
  imports: [
	RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
	RouterModule
  ]
})
export class AppRoutingModule { }
export const routingComponents = [
  HomeComponent, 
  ContactUsComponent, 
  ListingsComponent,
  CalenderComponent,
  DynamicButtonDemoComponent,
  PlaygroundComponent
]