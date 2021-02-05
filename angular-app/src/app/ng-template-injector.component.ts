import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from "@angular/core";
import { FirstService } from "./first.service";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-ng-template-injector",
  providers: [FirstService],
  template: `
    <app-list-injector [items]="items">
      <ng-template let-item>
        <app-list-item-injector [item]="item"></app-list-item-injector>
      </ng-template>
    </app-list-injector>
  `,
})
export class NgTemplateInjectorComponent {
  public items: any[] = [
    { name: 'first item', num: '3' },
    { name: 'second item', num: '17' },
    { name: 'third item', num: '21' },
    { name: 'fourth item', num: '36' },
  ];

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {
    this.schedule();
  }

  private schedule(): void {
    setTimeout(() => {
      // with default trackBy the items get recreated in the DOM
      // with a trackBy that tracks a "static" value this is not the case
      this.items = this.items.map(x => Object.assign({}, x));
      this.changeDetectorRef.markForCheck();
      this.schedule();
    }, 5000);
  }
}
