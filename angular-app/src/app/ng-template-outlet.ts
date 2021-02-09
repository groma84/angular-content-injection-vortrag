import { Component } from "@angular/core";

@Component(
    {
        selector: 'template-outlet',
        template: `
            <ng-template #listItem let-itemText>
                <li>{{itemText}}</li>
            </ng-template>

            <ul>
                <ng-template *ngFor="let item of ['Apple', 'Banana', 'Cookie'];" 
                    [ngTemplateOutlet]="listItem" 
                    [ngTemplateOutletContext]="{$implicit: item}">
                </ng-template>
            </ul>
       `
    }
)
export class TemplateOutletComponent {}