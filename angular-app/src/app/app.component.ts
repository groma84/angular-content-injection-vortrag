import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <style>
      .active {
        font-weight: bold;
      }
    </style>
    <h1>Content Projection Demo</h1>
    <nav>
      <ul>
      
        <li><a routerLink="/ng-content-simple" routerLinkActive="active">ng-content simple</a></li>
        <li><a>ng-content selectors and lifecycle</a></li>
        <li><a>ng-content multiple layers</a></li>
        <li><a>ng-content projecting twice</a></li>
        <li><a>ng-content host-context</a></li>
        <li><a>ng-content injector tree</a></li>

        <li><a>ng-template simple</a></li>
        <li><a>ng-template context</a></li>
        <li><a>ng-template lifecycle</a></li>
        <li><a>ng-template viewchildren/querylist</a></li>
        <li><a>ng-template multiple templates</a></li>
        <li><a>ng-template host-context</a></li>
        <li><a>ng-template injector tree</a></li>
        <li><a>ng-template performance</a></li>
      </ul>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  title = "content-projection-demo";
}
