import {
  ChangeDetectionStrategy,
  Component,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import { OneService } from "./one.service";
import { TwoService } from "./two.service";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-modal-simple",
  template: `
    <style>
      .background {
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgba(0, 0, 0, 0.4);
      }
      .content {
        background-color: #eeeeee;
        margin: 15% auto;
        padding: 20px;
        border: 1px solid #888;
        width: 50%;
      }
    </style>
    <div class="background">
      <div class="content">
        <ng-content></ng-content>
        <a routerLink="/">[Close]</a>
      </div>
    </div>
  `,
})
export class ModalSimpleComponent {}
