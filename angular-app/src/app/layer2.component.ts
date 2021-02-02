import { AfterContentInit, ChangeDetectionStrategy, Component, ContentChild, ContentChildren, ElementRef, QueryList } from "@angular/core";
import { TagDirective } from "./tag.directive";
import { TwoService } from "./two.service";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-layer2",
  providers: [TwoService],
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
  @ContentChild(TagDirective) projectedContent: TagDirective | undefined;
  @ContentChildren(TagDirective, {descendants: true}) projectedContentList!: QueryList<TagDirective>;

  ngAfterContentInit() {
    // this does not work, it's always undefined
    console.log('Layer2Component, ngAfterContentInit, projectedContent', this.projectedContent);

    // this does not work either
    console.log('Layer2Component, ngAfterContentInit, projectedContentList.length', this.projectedContentList.length);
  }
}
