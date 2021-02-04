import { Component, Directive, HostBinding, Injectable, Input } from "@angular/core";

@Directive({selector: '[bold]'})
export class SomeDirective {
    @Input() 
    @HostBinding('class.bold')
    bold: boolean = false;
}

@Injectable()
export class SimpleService {
    public shouldBeBold = true;
}

@Component(
    {
        selector: 'app-my-component',
        providers: [SimpleService],
        template: `
        <style>.bold { font-weight: bold}</style>
        <h1>My Component</h1>
        <p [bold]="simpleService.shouldBeBold">This text can be bold (or not)?</p>`
    }
)
export class MyComponent {
    constructor(public readonly simpleService: SimpleService) {}
}
