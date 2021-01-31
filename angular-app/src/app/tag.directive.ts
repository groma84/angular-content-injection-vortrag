import { Directive, Input } from "@angular/core";

@Directive({selector: '[tag]'})
export class TagDirective {
    @Input()
    tag = '';
}