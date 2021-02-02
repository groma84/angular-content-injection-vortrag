import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  Input,
  TemplateRef,
} from "@angular/core";
import { TwoService } from "./two.service";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-list-injector",
  providers: [TwoService],
  template: `
    <ul>
    <!-- don't use ngFor without a reasonable trackBy in lists! -->
      <div *ngFor="let item of items; trackBy: trackBy">
        <ng-template
          [ngTemplateOutlet]="template"
          [ngTemplateOutletContext]="{ $implicit: item }"
        >
        </ng-template>
      </div>
    </ul>
  `,
})
export class ListInjectorComponent {
  @Input()
  items: any[] = [];

  @ContentChild(TemplateRef) template!: TemplateRef<any>;

  // this would be the default trackBy if none is given
  // public readonly trackBy = (index: number, item: any): any => item;
  public readonly trackBy = (index: number, item: any): string => item.name;
}
