import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {filter} from 'rxjs/operators';

import {ILegoBrick, ILegoAction} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class LegoCommonService {
  private readonly bricksSource = new BehaviorSubject<ILegoBrick[]>([]);
  private readonly actionsSource = new Subject<ILegoAction>();

  actions$: Observable<ILegoAction> = this.actionsSource.asObservable();
  bricks$: Observable<ILegoBrick[]> = this.bricksSource.asObservable();

  constructor() {
    this.actions$.pipe(
      filter(action => action.type === 'add_brick'),
    ).subscribe(action => {
      const blocks = [...this.bricksSource.value];
      const newBrick: ILegoBrick = {
        id: Date.now().toString(),
        type: action.data.type,
        data: action.data.data || {},
      };

      blocks.splice(action.data.position, 0, newBrick);
      this.bricksSource.next(blocks);
    });

    this.bricks$.subscribe(bricks => {
      console.log('bricks', bricks);
    });

    this.actions$.subscribe(action => {
      console.log(`action ${action.type}`, action.data);
    });
  }

  emit(action: ILegoAction) {
    this.actionsSource.next(action);
  }
}
