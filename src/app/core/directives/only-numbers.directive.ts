import { Directive, ElementRef, HostListener, Optional } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: 'input[onlyNumbers]'
})
export class OnlyNumbersDirective {
  constructor(
    private elementRef: ElementRef,
    @Optional() private ngControl: NgControl
  ) {}

  @HostListener('input', ['$event'])
  onInputChange(event: InputEvent) {
    const initialValue: string = this.ngControl?.value ?? this.elementRef.nativeElement.value;
    const onlyNumbersValue: string = initialValue.replace(/[^0-9]*/g, '');
    this.ngControl?.control?.setValue(onlyNumbersValue) ?? this.setElementRefValue(onlyNumbersValue);

    event.preventDefault();
    event.stopPropagation();
  }

  private setElementRefValue(newValue: string): void {
    this.elementRef.nativeElement.value = newValue;
  }

}
