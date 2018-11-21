import {NgModule} from '@angular/core';
import {LegoCommonModule} from 'lego-common';

import {LegoSiteComponent} from './lego-site.component';
import {BRICKS_INFO_TOKEN} from 'lego-common';
import {BricksModule} from 'lego-site/bricks';
import {bricks} from './bricksData';

@NgModule({
  imports: [
    LegoCommonModule,
    BricksModule,
  ],
  declarations: [LegoSiteComponent],
  exports: [LegoSiteComponent],
  providers: [
    {
      provide: BRICKS_INFO_TOKEN,
      useValue: bricks,
    }
  ]
})
export class LegoSiteModule {
}
