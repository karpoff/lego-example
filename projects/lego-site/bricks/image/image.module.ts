import {NgModule} from '@angular/core';
import {BrickImageComponent} from './image.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [BrickImageComponent],
  exports: [BrickImageComponent]
})
export class BrickImageModule {
}
