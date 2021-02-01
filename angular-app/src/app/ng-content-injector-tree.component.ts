import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-ng-content-simple",
  template: `
    <style></style>
    <app-modal-simple [tag]="'myTag'">
      <app-text></app-text>
    </app-modal-simple>
  `,
})
export class NgContentInjectorTreeComponent {}
