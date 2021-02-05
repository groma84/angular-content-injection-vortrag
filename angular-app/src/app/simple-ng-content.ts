import { Component } from "@angular/core";

@Component(
    {
        selector: 'outer-component',
        template: `
        <h1>...</h1>
        <fancy-modal>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Duis a ornare massa.
            </p>
        </fancy-modal>
       `
    }
)
export class OuterSimpleComponent {/* ... */}

@Component(
    {
        selector: 'fancy-modal',
        template: `
            <header>...</header>
            <ng-content>
            
            </ng-content>
            <footer>...</footer>
       `
    }
)
export class FancyModal {/* ... */}

