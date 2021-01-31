import { ChangeDetectionStrategy, Component, ContentChild, ElementRef } from "@angular/core";
import { TagDirective } from "./tag.directive";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-layer1",
  template: `
    <style>
      :host {
        display: block;
        border: 1px solid red;
        padding: 5px;
      }
    </style>
    <app-layer2>
      <ng-container content>
        <ng-content select="[content]"></ng-content>
      </ng-container>
    </app-layer2>
  `,
})
export class Layer1Component {
  @ContentChild(TagDirective) projectedContent: any;

  ngAfterContentInit() {
    console.log('Layer1Component, ngAfterContentInit, projectedContent', this.projectedContent);
  }
}
