import {Component, Inject, OnInit} from '@angular/core';
import {LegoCommonService} from '../lego/lego-common.service';
import {filter} from 'rxjs/internal/operators';
import {BRICKS_INFO_TOKEN} from '../tokens';

@Component({
  selector: 'lego-add-modal',
  templateUrl: './add-modal.template.html',
  styles: []
})
export class AddModalComponent implements OnInit {
  show = false;
  position = 0;

  types: any[] = [];

  constructor(private legoService: LegoCommonService,
              @Inject(BRICKS_INFO_TOKEN) private bricksInfo) {
    for (const blockType of Object.keys(bricksInfo)) {
      this.types.push({
        type: blockType,
        title: bricksInfo[blockType].title,
      });
    }
  }

  ngOnInit() {
    this.legoService.actions$.pipe(
      filter(action => action.type === 'add_request'),
    ).subscribe(action => {
      this.show = true;
      this.position = action.data.position;
    });
  }

  select(type: string) {
    this.legoService.emit({
      type: 'add_brick',
      data: {
        type,
        data: this.bricksInfo[type].data || {},
        position: this.position,
      },
    });
    this.onClose();
  }

  onClose() {
    this.show = false;
    this.position = 0;
  }
}
