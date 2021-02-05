import { Component, ContentChild } from "@angular/core";
import { TagDirective } from "./tag.directive";

@Component(
    {
        selector: 'layer1',
        template: `
            <layer2>
                <div [tag]="'tagged'">Cool content</div>
            </layer2>
       `
    }
)
export class FirstLayerComponent {}

@Component(
    {
        selector: 'layer2',
        template: `
        <layer3>
            <ng-content></ng-content>
        </layer3>`
    }
)
export class SecondLayerComponent {
    @ContentChild(TagDirective) tagDirective!: TagDirective;

    ngAfterContentInit(): void {
        console.log('SecondLayerComponent', this.tagDirective);
    }
}

@Component(
    {
        selector: 'layer3',
        template: `<ng-content></ng-content>`
    }
)
export class ThirdLayerComponent {
    @ContentChild(TagDirective) tagDirective!: TagDirective;

    ngAfterContentInit(): void {
        console.log('ThirdLayerComponent', this.tagDirective);
    }
}