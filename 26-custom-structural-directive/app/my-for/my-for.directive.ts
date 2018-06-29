import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[myFor][myForOf]'
  // We can two different selector so we can use both versions
})
export class MyForDirective {

  @Input()
  set myForOf(collection) {
    this.view.clear();
    // We need to clear the view because we just want new objects to be created in the view not just appending to the existing view.
    collection.forEach((item, index) => {
      this.view.createEmbeddedView(this.template, {
        // We can take advantage of the ViewContainerRef and createEmbeddedView to iterate thorugh the collection
        // ..and through $imlicit give access to the each element inside a collection just like we did when we create components.
        $implicit: item,
        index
      });
    });
  }

  constructor(
    private view: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}

}
