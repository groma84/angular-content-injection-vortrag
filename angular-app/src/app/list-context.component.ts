import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  Input,
  TemplateRef,
  ViewChild,
} from "@angular/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-list-context",
  template: `
    <style></style>

    <h3>Template in same component</h3>
    <ng-template #listItemInSameComponent let-item="item">
      <li style="color: hotpink;">{{ item }}</li>
    </ng-template>
    <ul>
      <div *ngFor="let item of items">
        <ng-container
          *ngTemplateOutlet="listItemInSameComponent; context: { item: item }"
        >
        </ng-container>
      </div>
    </ul>

    <h3>Template via ContentChild</h3>
    <ul>
      <div *ngFor="let item of items; let index = index; let first = first">
        <ng-template
          [ngTemplateOutlet]="template"
          [ngTemplateOutletContext]="{
            $implicit: item,
            index: index,
            first: first
          }"
        >
        </ng-template>
      </div>
    </ul>
  `,
})
export class ListContextComponent implements AfterContentInit {
  ngAfterContentInit(): void {
    console.log("template", this.template);
  }

  @Input()
  items: any[] = [];

  @ContentChild(TemplateRef, { read: TemplateRef }) template!: TemplateRef<any>;
}
