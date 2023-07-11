import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropwdown]',
})
export class DropwdownDirective {
  @HostBinding('class.open') isOpen = false;
  @HostListener('click') toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  constructor() {}
}
