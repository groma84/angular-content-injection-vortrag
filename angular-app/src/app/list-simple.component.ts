import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from "@angular/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-list-simple",
  template: `
    <style></style>
    <div *ngIf="isLoading; else listitems">Loading...</div>
    <ng-template #listitems>
      <ul>
        <li *ngFor="let item of items">
          {{ item }}
        </li>
      </ul>
    </ng-template>
  `,
})
export class ListSimpleComponent {
  @Input()
  items: any[] = [];

  public isLoading = true;

  constructor(changeDetectorRef: ChangeDetectorRef) {
    setTimeout(() => {
      this.isLoading = false;
      changeDetectorRef.markForCheck();
    }, 2000);
  }
}
