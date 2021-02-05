import { Component, ContentChild, Optional } from "@angular/core";
import { FirstService } from "./first.service";
import { TagDirective } from "./tag.directive";
import { SecondService } from "./second.service";

@Component(
    {
        selector: 'layer-one',
        template: `<layer-two><is-injected></is-injected></layer-two>`,
    }
)
export class LayerOneComponent {}

@Component(
    {
        selector: 'layer-two',
        template: `<layer-three><ng-content></ng-content></layer-three>`,
        providers: [FirstService]
    }
)
export class LayerTwoComponent {}

@Component(
    {
        selector: 'layer-three',
        template: `<ng-content></ng-content>`,
        providers: [SecondService]
    }
)
export class LayerThreeComponent {}

@Component(
    {
        selector: 'is-injected',
        template: `<p>Are both services injected here?</p>`
    }
)
export class IsInjectedComponent {
    constructor(
        @Optional() firstService: FirstService,
        @Optional() secondService: SecondService
    ) {
        console.log('injected services', {firstService, secondService});
    }
}