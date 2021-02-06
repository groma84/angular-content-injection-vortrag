import {
  Component,
  ContentChildren,
  Input,
  QueryList,
  TemplateRef,
} from "@angular/core";
import { TemplateTypeDirective } from "./template-type.directive";

@Component({
    selector: "shopping-list",
    template: `
        <list-with-templates [items]="shoppingListEntries">
            <ng-template [templateType]="'fruit'" let-cartEntry>
                <li>🍉🍋🍍 {{ cartEntry.name }}</li>
            </ng-template>

            <ng-template [templateType]="'sweets'" let-cartEntry>
                <li>🍩🍪🍬 {{ cartEntry.name }}</li>
            </ng-template>
        </list-with-templates>
    `
})
export class ShoppingListComponent {
    shoppingListEntries = [
        { name: "Apple", type: "fruit" },
        { name: "Banana", type: "fruit" },
        { name: "Cookie", type: "sweets" },
        { name: "Pork", type: "meat" },
      ];
}

@Component({
  selector: "list-with-templates",
  template: `
    <ul>
      <ng-template
        *ngFor="let item of items"
        [ngTemplateOutlet]="templates.get(item.type) || null"
        [ngTemplateOutletContext]="{ $implicit: item }"
      >
      </ng-template>
    </ul>
  `,
})
export class ListWithTemplatesComponent {
  @Input() items: any[] = [];

  templates = new Map<string, TemplateRef<any>>();

  @ContentChildren(TemplateTypeDirective) templateTypes!: QueryList<TemplateTypeDirective>;

  ngAfterContentInit(): void {
    this.templateTypes.forEach((templateTypeDirective: TemplateTypeDirective) => {
        this.templates.set(templateTypeDirective.templateType, templateTypeDirective.template);
      }
    );
  }
}
