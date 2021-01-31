import { AfterContentInit, ChangeDetectionStrategy, Component, ContentChild, ElementRef } from "@angular/core";
import { TagDirective } from "./tag.directive";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-layer2",
  template: `
    <style>
      :host {
        display: block;
        border: 1px solid blue;
      }
    </style>

    <ng-content select="[content]"></ng-content>
  `,
})
export class Layer2Component implements AfterContentInit {
  @ContentChild(TagDirective) projectedContent: any;

  ngAfterContentInit() {
    // this does not work, it's always undefined
    console.log('Layer2Component, ngAfterContentInit, projectedContent', this.projectedContent);
  }
}
