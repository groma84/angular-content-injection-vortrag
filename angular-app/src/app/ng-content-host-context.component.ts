import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-ng-content-simple",
  template: `
    <style></style>
    <app-text-wrapper [makeBold]="true"></app-text-wrapper>
  `,
})
export class NgContentHostContextComponent {}
