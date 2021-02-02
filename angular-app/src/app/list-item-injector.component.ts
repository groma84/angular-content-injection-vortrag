import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  Optional,
} from "@angular/core";
import { ListInjectorComponent } from "./list-injector.component";
import { OneService } from "./one.service";
import { TwoService } from "./two.service";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-list-item-injector",
  template: `
    <style></style>
    <li>{{ localCounter }}: {{ item?.name }} -- {{ item?.num }}</li>
  `,
})
export class ListItemInjectorComponent<
  T extends { name: string; num: number }
> {
  public static counter = 1;

  public readonly localCounter: number;

  @Input()
  item: T | undefined;

  constructor(
    @Optional() oneService: OneService,
    @Optional() twoService: TwoService,
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {
    console.log("oneService", oneService);
    console.log("twoService", twoService);

    this.localCounter = ListItemInjectorComponent.counter++;

    this.scheduleIncrementNum();
  }

  private scheduleIncrementNum(): void {
    setTimeout(() => {
      if (this.item) {
        this.item.num = +this.item.num + 1;
      }
      // to get updates in the view we need this here
      // or have to use ChangeDetectionStrategy.Default
      // this.changeDetectorRef.markForCheck();

      this.scheduleIncrementNum();
    }, 2000);
  }
}
