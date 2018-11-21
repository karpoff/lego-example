import {Component, Input} from '@angular/core';
import {LegoCommonService} from '../lego/lego-common.service';

@Component({
  selector: 'lego-add-button',
  templateUrl: './add-button.template.html',
  styles: []
})
export class AddButtonComponent {
  @Input() position: number;

  constructor(private legoService: LegoCommonService) {
  }

  onClick() {
    this.legoService.emit({
      type: 'add_request',
      data: {
        position: this.position,
      }
    });
  }
}
