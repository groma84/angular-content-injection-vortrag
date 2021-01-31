import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-ng-content-two-layers",
  template: `
    <style></style>
    <app-layer1>
      <p content [tag]="'myContent'">
      An ancient 📜, unrolled to reveal text on papyrus or parchment paper. 
      May be used to represent the study of history or official documents, such as a diploma.
      </p>
    </app-layer1>
  `,
})
export class NgContentTwoLayersComponent {}
