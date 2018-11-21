import {Component, OnInit} from '@angular/core';

import {ILegoBrick} from '../interfaces';
import {LegoCommonService} from './lego-common.service';

@Component({
  selector: 'lego-common',
  templateUrl: './lego-common.template.html',
  styles: []
})
export class LegoCommonComponent implements OnInit {
  bricks: ILegoBrick[] = [];

  constructor(private legoService: LegoCommonService) { }

  ngOnInit() {
    this.legoService.bricks$.subscribe(bricks => this.bricks = bricks);
  }
}
