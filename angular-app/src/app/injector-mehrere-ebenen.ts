import { Component, Optional } from "@angular/core";
import { LayerThreeService } from "./layer-three.service";
import { LayerTwoService } from "./layer-two.service";

@Component(
    {
        selector: 'layer-one',
        template: `
        <layer-two>
            <inner-text></inner-text>
        </layer-two>`,
    }
)
export class LayerOneComponent {}

@Component(
    {
        selector: 'layer-two',
        template: `
        <layer-three>
            <ng-content></ng-content>
        </layer-three>`,
        providers: [LayerTwoService]
    }
)
export class LayerTwoComponent {}

@Component(
    {
        selector: 'layer-three',
        template: `<ng-content></ng-content>`,
        providers: [LayerThreeService]
    }
)
export class LayerThreeComponent {}

@Component(
    {
        selector: 'inner-text',
        template: `<p>Are both services injected here?</p>`
    }
)
export class InnerTextComponent {
    constructor(
        @Optional() layerTwoService: LayerTwoService,
        @Optional() layerThreeService: LayerThreeService
    ) {
        console.log('injected services', {
            layer2Service: layerTwoService, 
            layer3Service: layerThreeService});
    }
}