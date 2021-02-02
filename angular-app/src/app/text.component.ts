import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  OnInit,
  Optional,
} from "@angular/core";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ModalSimpleComponent } from "./modal-simple.component";
import { OneService } from "./one.service";
import { TagDirective } from "./tag.directive";
import { TwoService } from "./two.service";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-text",
  template: `
    <style>
      p {
        border: 1px solid limegreen;
      }

      :host-context(app-text-wrapper) {
        color: red;
      }

      :host-context(app-list-item) {
        color: lightblue;
      }
    </style>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla
      pulvinar neque at convallis. Donec a imperdiet nunc, nec molestie metus.
    </p>
    <app-list-item></app-list-item>
  `,
})
export class TextComponent
  implements
    OnInit,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked {
  ngOnInit(): void {
    console.log("📜 ngOnInit");
  }
  ngAfterContentInit(): void {
    console.log("📜 ngAfterContentInit");
  }
  ngAfterContentChecked(): void {
    console.log("📜 ngAfterContentChecked");
  }
  ngAfterViewInit(): void {
    console.log("📜 ngAfterViewInit");
  }
  ngAfterViewChecked(): void {
    console.log("📜 ngAfterViewChecked");
  }

  constructor(
    @Optional() oneService: OneService,
    @Optional() twoService: TwoService
  ) {
    console.log("oneService", oneService);
    console.log("twoService", twoService);
  }
}
