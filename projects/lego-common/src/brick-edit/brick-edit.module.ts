import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BrickEditComponent} from './brick-edit.component';
import {AddButtonModule} from '../add-button/add-button.module';

@NgModule({
  imports: [
    CommonModule,
    AddButtonModule,
  ],
  declarations: [BrickEditComponent],
  exports: [BrickEditComponent]
})
export class BrickEditModule {
}
