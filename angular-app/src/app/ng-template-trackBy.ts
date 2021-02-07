import {
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Input,
  QueryList,
  TemplateRef,
} from "@angular/core";
import { timer } from "rxjs";
import { TemplateTypeDirective } from "./template-type.directive";

@Component({
    selector: "shopping-list",
    template: `
        <list-with-templates-trackBy 
          [trackByFn]="trackByName" 
          [items]="shoppingListEntries">
            <ng-template [templateType]="'fruit'" let-cartEntry>
                <li>🍉🍋🍍 {{ cartEntry.name }}</li>
            </ng-template>

            <ng-template [templateType]="'sweets'" let-cartEntry>
                <li>🍩🍪🍬 {{ cartEntry.name }}</li>
            </ng-template>
        </list-with-templates-trackBy>
    `
})
export class ShoppingLisWithTrackByComponent {
    trackByDefault = (index: number, item: any) => item;
    trackByName = (index: number, item: any) => item.name;

    shoppingListEntries = [
        { name: "Apple", type: "fruit" },
        { name: "Banana", type: "fruit" },
        { name: "Cookie", type: "sweets" },
      ];

    constructor(changeDetectorRef: ChangeDetectorRef) {
      timer(2_000, 2_000)
      .subscribe(() => {
        this.shoppingListEntries = this.shoppingListEntries
                                    .map(x => Object.assign({}, x));
        changeDetectorRef.markForCheck();
      });
    }
}

@Component({
  selector: "list-with-templates-trackBy",
  template: `
    <ul>
      <ng-template
        *ngFor="let item of items; trackBy: trackByFn"
        [ngTemplateOutlet]="templates.get(item.type) || null"
        [ngTemplateOutletContext]="{ $implicit: item }"
      >
      </ng-template>
    </ul>
  `,
})
export class ListWithTemplatesTrackByComponent {
  @Input() trackByFn: (index: number, item: any) => any = (_, item) => item;
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
