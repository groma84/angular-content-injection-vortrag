import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-ng-template-simple",
  template: `
    <app-list-simple [items]="['Apple', 'Banana', 'Cookie']"></app-list-simple>
  `,
})
export class NgTemplateSimpleComponent {}
