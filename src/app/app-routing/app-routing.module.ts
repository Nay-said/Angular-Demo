import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { ListingsComponent } from '../listings/listings.component';
import { CalenderComponent } from '../calender/calender.component';

const routes: Routes = [
	{ path: '', component: ContactUsComponent},
	{ path: 'listings', component: ListingsComponent},
	{ path: 'calendar', component: CalenderComponent},
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
export const routingComponent = [ContactUsComponent, ListingsComponent]