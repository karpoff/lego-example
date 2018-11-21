import {Component, ComponentFactoryResolver, Inject, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {ILegoBrick} from '../interfaces';
import {BRICK_DATA_SERVICE_TOKEN, BRICKS_INFO_TOKEN} from '../tokens';
import {BrickService} from './brick.service';

@Component({
  selector: 'lego-brick-edit',
  templateUrl: './brick-edt.template.html',
  styles: [],
  providers: [
    {
      provide: BRICK_DATA_SERVICE_TOKEN,
      useClass: BrickService,
    }
  ]
})
export class BrickEditComponent implements OnInit {
  @Input() brick: ILegoBrick;
  @Input() position: number;

  @ViewChild('content', {read: ViewContainerRef}) container: ViewContainerRef;

  error = '';

  constructor(@Inject(BRICKS_INFO_TOKEN) private bricksInfo,
              private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {

    if (!this.bricksInfo[this.brick.type]) {
      this.error = 'Нет такого блока';
      return;
    }

    if (!this.bricksInfo[this.brick.type].component) {
      this.error = 'Компонента для блока не зарегистрирована';
      return;
    }

    const component = this.bricksInfo[this.brick.type].component;

    try {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
      const componentRef = this.container.createComponent<any>(componentFactory);
      componentRef.instance.brick = this.brick;
    } catch (e) {
      console.error(e);
      this.error = 'Компонента для блока не загружена';
      return;
    }
  }
}
