import {Injectable} from '@angular/core';
import {ReplaySubject} from 'rxjs';

import {ILegoBrick} from '../interfaces';

@Injectable()
export class BrickService {
  data$ = new ReplaySubject<ILegoBrick>(1);
}
