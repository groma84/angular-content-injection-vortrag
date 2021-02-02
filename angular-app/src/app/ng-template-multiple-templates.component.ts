import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-ng-template-multiple-templates",
  template: `
    <app-list-multiple-templates
      [items]="[
        { name: 'Apple', type: 'fruit' },
        { name: 'Banana', type: 'fruit' },
        { name: 'Cookie', type: 'sweets' }
      ]"
    >
      <!-- if there is no corresponding template found the item is silently not displayed at all! -->
      <ng-template let-item [templateType]="'fruit'">
        <app-fruit-list-item [item]="item"></app-fruit-list-item>
      </ng-template>

      <ng-template let-item [templateType]="'sweets'">
        <app-sweets-list-item [item]="item"></app-sweets-list-item>
      </ng-template>
    </app-list-multiple-templates>
  `,
})
export class NgTemplateMultipleTemplatesComponent {}
