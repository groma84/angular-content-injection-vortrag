import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-fruit-list-item",
  template: `
    <style></style>
    <li>🍉🍋🍍 {{ item?.name }}</li>
  `,
})
export class FruitListItemComponent {
  @Input()
  item: {name: string} | undefined;
}
