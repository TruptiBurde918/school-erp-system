import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing-module';
import { NavbarComponent } from './layout/navbar-component/navbar-component';
import { FooterComponent } from './layout/footer-component/footer-component';

@NgModule({
  declarations: [NavbarComponent,FooterComponent],
  imports: [CommonModule, MainRoutingModule],
  exports: [NavbarComponent,FooterComponent]
})
export class MainModule {}
