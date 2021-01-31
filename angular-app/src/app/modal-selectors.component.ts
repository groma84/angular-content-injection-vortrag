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
  selector: "app-modal-selectors",
  template: `
    <style>
      .background {
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgba(0, 0, 0, 0.4);
      }
      .content {
        background-color: #eeeeee;
        margin: 15% auto;
        padding: 20px;
        border: 1px solid #888;
        width: 50%;
      }
    </style>
    <div class="background">
      <div class="content">
        <ng-content select="app-header"></ng-content>
        <ng-content select="[content]"></ng-content>
        <ng-content select=".footer" ></ng-content>
        <ng-content style="border: 1px solid red;"></ng-content>
        <a routerLink="/">[Close]</a>
      </div>
    </div>
  `,
})
export class ModalSelectorsComponent
  implements
    OnInit,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked {
  ngOnInit(): void {
    console.log("🔍 ngOnInit");
  }
  ngAfterContentInit(): void {
    console.log("🔍 ngAfterContentInit");
  }
  ngAfterContentChecked(): void {
    console.log("🔍 ngAfterContentChecked");
  }
  ngAfterViewInit(): void {
    console.log("🔍 ngAfterViewInit");
  }
  ngAfterViewChecked(): void {
    console.log("🔍 ngAfterViewChecked");
  }
}
