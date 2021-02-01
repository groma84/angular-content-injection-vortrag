import { Input, Directive, TemplateRef } from "@angular/core";

@Directive({ selector: "[templateType]" })
export class TemplateTypeDirective {
  @Input() templateType: string = "";

  constructor(public readonly template: TemplateRef<any>) {}
}
