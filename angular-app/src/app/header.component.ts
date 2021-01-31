import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from "@angular/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-header",
  template: `
    <style>
      h4 {
        border: 1px solid orange;
      }
    </style>
    <h4>Header Component</h4>
  `,
})
export class HeaderComponent
  implements
    OnInit,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked {
  ngOnInit(): void {
    console.log("🐵 ngOnInit");
  }
  ngAfterContentInit(): void {
    console.log("🐵 ngAfterContentInit");
  }
  ngAfterContentChecked(): void {
    console.log("🐵 ngAfterContentChecked");
  }
  ngAfterViewInit(): void {
    console.log("🐵 ngAfterViewInit");
  }
  ngAfterViewChecked(): void {
    console.log("🐵 ngAfterViewChecked");
  }
}
