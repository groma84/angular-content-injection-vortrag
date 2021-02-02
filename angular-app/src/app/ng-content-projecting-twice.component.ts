import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-ng-content-projecting-twice",
  template: `
    <app-content-twice>
      <p>This content only appears once!</p>
    </app-content-twice>
  `,
})
export class NgContentProjectingTwiceComponent {}
