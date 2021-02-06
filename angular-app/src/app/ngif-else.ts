import { Component, Input } from "@angular/core";

@Component(
    {
        selector: 'ngif-else',
        template: `
            <ng-container *ngIf="!!name; else noNameGiven">
                <p>Hallo, {{name}}!</p>
            </ng-container>

            <ng-template #noNameGiven>
                <p>Leider weiß ich deinen Namen noch nicht. Trotzdem: Hallo!</p>
            </ng-template>
       `
    }
)
export class NgIfElseComponent {
    @Input() name: string | undefined;
}