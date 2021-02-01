import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-root",
  template: `
    <style>
      .active {
        font-weight: bold;
      }
    </style>
    <h1>Content Projection Demo</h1>
    <nav>
      <span>ng-content</span>
      <ul>
        <li><a routerLink="/ng-content-simple" routerLinkActive="active">simple</a></li>
        <li><a routerLink="/ng-content-selectors" routerLinkActive="active">selectors and lifecycle</a></li>
        <li><a routerLink="/ng-content-two-layers" routerLinkActive="active">multiple layers/checkifsomethingexists/contentchild</a></li>
        <li><a routerLink="/ng-content-projecting-twice" routerLinkActive="active">projecting twice</a></li>
        <li><a routerLink="/ng-content-host-context" routerLinkActive="active">host-context</a></li>
        <li><a routerLink="/ng-content-injector-tree" routerLinkActive="active">injector tree</a></li>
      </ul>

      <span>ng-template</span>
      <ul>
        <li><a routerLink="/ng-template-simple" routerLinkActive="active">simple</a></li>
        <li><a routerLink="/ng-template-context" routerLinkActive="active">context</a></li>
        <li><a routerLink="/todo" routerLinkActive="active">lifecycle</a></li>
        <li><a routerLink="/todo" routerLinkActive="active">multiple templates</a></li>
        <li><a routerLink="/todo" routerLinkActive="active">viewchildren/querylist</a></li>
        <li><a routerLink="/todo" routerLinkActive="active">host-context</a></li>
        <li><a routerLink="/todo" routerLinkActive="active">injector tree/change detection</a></li>
        <li><a routerLink="/todo" routerLinkActive="active">performance</a></li>
      </ul>
    </nav>

    <hr />

    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  title = "content-projection-demo";
}
