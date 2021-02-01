import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-sweets-list-item",
  template: `
    <style></style>
    <li>🍩🍪🍬 {{ item?.name }}</li>
  `,
})
export class SweetsListItemComponent {
  @Input()
  item: {name: string} | undefined;
}
