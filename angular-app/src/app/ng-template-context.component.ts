import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-ng-template-context",
  template: `
    <app-list-context [items]="['Apple', 'Banana', 'Cookie']">
      <ng-template let-item let-index="index" let-first="first">
        <app-list-item
          [first]="first"
          [index]="index"
          [item]="item"
        ></app-list-item>
      </ng-template
    ></app-list-context>
  `,
})
export class NgTemplateContextComponent {}
