import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownDirective } from './dropdown.directive';
import { HoverDirective } from './hover.directive';
@NgModule({
  declarations: [
    DropdownDirective,
    HoverDirective
  ],
  exports: [
    CommonModule,
    DropdownDirective,
    HoverDirective
  ]
})
export class CompartidoModule {}
