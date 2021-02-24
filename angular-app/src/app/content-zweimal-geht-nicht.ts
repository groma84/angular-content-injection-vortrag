import { Component } from "@angular/core";

@Component(
    {
        selector: 'outer-layer',
        template: `
            <inner-layer>
                <p>💰💰💰</p>
            </inner-layer>
       `
    }
)
export class OuterLayerComponent {}

@Component(
    {
        selector: 'inner-layer',
        template: `
        <div>
            <h3>Money</h3>
            <ng-content></ng-content>
        </div>
        <div *ngIf="true">
            <h3>More money</h3>
            <ng-content></ng-content>
        </div>
        `
    }
)
export class InnerLayerComponent {}
