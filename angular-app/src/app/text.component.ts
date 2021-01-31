import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  OnInit,
} from "@angular/core";
import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-text",
  template: `
    <style>
      p {
        border: 1px solid limegreen;
      }
    </style>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla
      pulvinar neque at convallis. Donec a imperdiet nunc, nec molestie metus.
    </p>
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
}
