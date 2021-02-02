import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-ng-content-injector-tree",
  template: `
      <app-layer1>
        <app-text content></app-text>
      </app-layer1>
  `,
})
export class NgContentInjectorTreeComponent {}
