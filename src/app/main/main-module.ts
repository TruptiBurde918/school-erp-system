import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing-module';
import { NavbarComponent } from './layout/navbar-component/navbar-component';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, MainRoutingModule],
  exports: [NavbarComponent]
})
export class MainModule {}
