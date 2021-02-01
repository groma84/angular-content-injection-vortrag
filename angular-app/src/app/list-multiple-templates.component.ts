import {
  ContentChildren,
  QueryList,
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  TemplateRef,
} from "@angular/core";
import { TemplateTypeDirective } from "./template-type.directive";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-list-multiple-templates",
  template: `
    <style></style>

    <ul>
      <div *ngFor="let item of items">
        <ng-template
          [ngTemplateOutlet]="itemTemplates.get(item.type) || null"
          [ngTemplateOutletContext]="{ $implicit: item }"
        >
        </ng-template>
      </div>
    </ul>
  `,
})
export class ListMultipleTemplatesComponent implements AfterContentInit {
  public itemTemplates = new Map<string, TemplateRef<any>>();
  
  @Input()
  items: any[] = [];

  /* 
  / If you are listening to QueryList's observable updates things are not as clear cut:
  / updates are often late, and already removed things are still showing up - and the order is never guaranteed!
  */
  @ContentChildren(TemplateTypeDirective)
  templates!: QueryList<TemplateTypeDirective>;

  ngAfterContentInit(): void {
    this.templates.toArray().forEach((v: TemplateTypeDirective) => {
      this.itemTemplates.set(v.templateType, v.template);
    });
  }
}
