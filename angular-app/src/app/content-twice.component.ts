import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-content-twice",
  template: `
    <div *ngIf="true">
      <h3>First ng-content</h3>
      <ng-content></ng-content>
    </div>
    <div *ngIf="false">
      <h3>Second ng-content</h3>
      <ng-content></ng-content>
    </div>
  `,
})
export class ContentTwiceComponent {}
