import {NgModule} from '@angular/core';
import {BrickTextComponent} from './text.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [BrickTextComponent],
  exports: [BrickTextComponent]
})
export class BrickTextModule {
}
