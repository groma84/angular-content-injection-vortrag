import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from "@angular/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-text-wrapper",
  template: `
    <style>
      div {
        border: 1px solid hotpink;
      }
      .bold {
        font-weight: bold;
      }
    </style>
    <div class="bold">
      <h5>Wrapping text</h5>
      <app-text></app-text>
    </div>
  `,
})
export class TextWrapperComponent
  implements
    OnInit,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked {
  ngOnInit(): void {
    console.log("📦 ngOnInit");
  }
  ngAfterContentInit(): void {
    console.log("📦 ngAfterContentInit");
  }
  ngAfterContentChecked(): void {
    console.log("📦 ngAfterContentChecked");
  }
  ngAfterViewInit(): void {
    console.log("📦 ngAfterViewInit");
  }
  ngAfterViewChecked(): void {
    console.log("📦 ngAfterViewChecked");
  }

  @Input() makeBold = false;
}
