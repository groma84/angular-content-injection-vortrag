import { Component } from "@angular/core";

@Component(
    {
        /* ... */
        template: `
            <ng-content select="p"></ng-content>
            <ng-content select=".my-class"></ng-content>
            <ng-content select="[attr]"></ng-content>
            <ng-content></ng-content>
       `
    }
)
export class WithSelectors {/* ... */}

