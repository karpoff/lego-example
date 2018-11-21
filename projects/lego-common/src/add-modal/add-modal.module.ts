import {NgModule} from '@angular/core';
import {AddModalComponent} from './add-modal.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [AddModalComponent],
  exports: [AddModalComponent]
})
export class AddModalModule {
}
