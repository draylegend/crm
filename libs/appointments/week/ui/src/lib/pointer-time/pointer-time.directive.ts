import { Directive, Input } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'section[pointerTime]',
  standalone: true,
})
export class PointerTimeDirective {
  @Input() pointerTime = '';
}
