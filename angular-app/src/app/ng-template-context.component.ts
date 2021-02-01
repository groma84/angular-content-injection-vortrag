import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-ng-template-context",
  template: `
    <style></style>
    <app-list-context [items]="['Apple', 'Banana', 'Cookie']">
      <ng-template let-item let-index="index" let-first="first">
        <li [ngStyle]="{ 'font-weight': first ? 'bold' : 'normal' }">
          {{ index }} {{ item }}
        </li>
      </ng-template></app-list-context
    >
  `,
})
export class NgTemplateContextComponent {}
