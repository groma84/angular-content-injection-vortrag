import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <h1>Content Projection Demo</h1>
    <nav>
      <ul>
        <li><a href=".">Angular component</a></li>

        <li><a href=".">ng-content simple</a></li>
        <li><a href=".">ng-content selectors and lifecycle</a></li>
        <li><a href=".">ng-content multiple layers</a></li>
        <li><a href=".">ng-content projecting twice</a></li>
        <li><a href=".">ng-content host-context</a></li>
        <li><a href=".">ng-content injector tree</a></li>

        <li><a href=".">ng-template simple</a></li>
        <li><a href=".">ng-template context</a></li>
        <li><a href=".">ng-template lifecycle</a></li>
        <li><a href=".">ng-template viewchildren/querylist</a></li>
        <li><a href=".">ng-template multiple templates</a></li>
        <li><a href=".">ng-template host-context</a></li>
        <li><a href=".">ng-template injector tree</a></li>
        <li><a href=".">ng-template performance</a></li>
      </ul>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  title = "content-projection-demo";
}
