import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-ng-content-selectors",
  template: `
    <style>
      .footer {
        border: 1px solid lightblue;
      }
    </style>
    <app-modal-selectors>
      <app-header></app-header>
      <app-text-wrapper content></app-text-wrapper>
      <div class="footer"><h5>Footer</h5></div>
      <p>
        This does get selected by the catch-all, because no other selector fits
      </p>
    </app-modal-selectors>
  `,
})
export class NgContentSelectorsComponent {}
