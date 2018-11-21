import {Component, Input} from '@angular/core';
import {ILegoBrick} from 'lego-common';

@Component({
  selector: 'lego-site-brick-text',
  templateUrl: './text.template.html',
  styles: []
})
export class BrickTextComponent {
  @Input() brick: ILegoBrick;
}
