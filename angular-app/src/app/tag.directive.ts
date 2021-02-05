import { Directive, HostBinding, Input } from "@angular/core";

@Directive({selector: '[tag]'})
export class TagDirective {
    @Input()
    @HostBinding('attr.data-tag')
    tag: string | undefined = '';
}