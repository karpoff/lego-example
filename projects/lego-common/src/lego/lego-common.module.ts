import {NgModule} from '@angular/core';
import {LegoCommonComponent} from './lego-common.component';
import {BrickEditModule} from '../brick-edit/brick-edit.module';
import {AddButtonModule} from '../add-button/add-button.module';
import {AddModalModule} from '../add-modal/add-modal.module';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    BrickEditModule,
    AddButtonModule,
    AddModalModule,
  ],
  declarations: [LegoCommonComponent],
  exports: [LegoCommonComponent]
})
export class LegoCommonModule {
}
