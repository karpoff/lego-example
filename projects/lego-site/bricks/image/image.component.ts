import {Component, Input} from '@angular/core';
import {ILegoBrick} from 'lego-common';

@Component({
  selector: 'lego-site-brick-image',
  templateUrl: './image.template.html',
  styles: []
})
export class BrickImageComponent {
  @Input() brick: ILegoBrick;
}
