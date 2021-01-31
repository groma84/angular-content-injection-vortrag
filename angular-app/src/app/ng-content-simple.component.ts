import { Component } from "@angular/core";

@Component({
  selector: "app-ng-content-simple",
  template: `
    <style></style>
    <app-modal-simple>
      <h4>Some text:</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
        fringilla pulvinar neque at convallis. Donec a imperdiet nunc, nec
        molestie metus.</p>
    </app-modal-simple>
  `,
})
export class NgContentSimpleComponent {}
