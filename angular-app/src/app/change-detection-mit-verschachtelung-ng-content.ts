import { Component } from "@angular/core";

@Component(
    {
        selector: 'outer',
        template: `
            <middle>
                <inner></inner>
            </middle>
       `
    }
)
export class OuterComponent {
    ngOnInit(): void {
        console.log("- OuterComponent ngOnInit");
      }
      ngAfterContentInit(): void {
        console.log("- OuterComponent ngAfterContentInit");
      }
      ngAfterViewInit(): void {
        console.log("- OuterComponent ngAfterViewInit");
      }
}

@Component(
    {
        selector: 'middle',
        template: `<ng-content></ng-content>`
    }
)
export class MiddleComponent {
    ngOnInit(): void {
        console.log("--- MiddleComponent ngOnInit");
      }
      ngAfterContentInit(): void {
        console.log("--- MiddleComponent ngAfterContentInit");
      }
      ngAfterViewInit(): void {
        console.log("--- MiddleComponent ngAfterViewInit");
      }

}

@Component(
    {
        selector: 'inner',
        template: `<p>...</p>`
    }
)
export class InnerComponent {
    ngOnInit(): void {
        console.log("----- InnerComponent ngOnInit");
      }
      ngAfterContentInit(): void {
        console.log("----- InnerComponent ngAfterContentInit");
      }
      ngAfterViewInit(): void {
        console.log("----- InnerComponent ngAfterViewInit");
      }
}