import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-content-twice",
  template: `
    <style></style>
    <div *ngIf="true">
      <h3>First ng-content</h3>
      <ng-content></ng-content>
    </div>
    <div *ngIf="true">
      <h3>Second ng-content</h3>
      <ng-content></ng-content>
    </div>
    <div *ngIf="true">
      <h3>Third ng-content</h3>
      <ng-content></ng-content>
    </div>
  `,
})
export class ContentTwiceComponent {}
