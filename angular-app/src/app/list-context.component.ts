import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  Input,
  OnInit,
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
export class ListContextComponent
  implements
    OnInit,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked {
  ngOnInit(): void {
    console.log("📄 ngOnInit");
  }
  ngAfterContentChecked(): void {
    console.log("📄 ngAfterContentChecked");
  }
  ngAfterViewInit(): void {
    console.log("📄 ngAfterViewInit");
  }
  ngAfterViewChecked(): void {
    console.log("📄 ngAfterViewChecked");
  }
  ngAfterContentInit(): void {
    console.log("📄 ngAfterContentInit");
    console.log("📄 template", this.template);
  }

  @Input()
  items: any[] = [];

  @ContentChild(TemplateRef, { read: TemplateRef }) template!: TemplateRef<any>;
}
