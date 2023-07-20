import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-are-you-sure',
  templateUrl: './are-you-sure.component.html',
  styleUrls: ['./are-you-sure.component.scss'],
})
export class AreYouSureComponent implements OnInit {
  @Input('del') del: boolean = false;
  @Input('cancel') cancel: boolean = false;

  message: string;

  ngOnInit(): void {
    this.confirms();
  }
  confirms() {
    if (this.del) {
      this.message = 'Bist du sicher dass du den Artikel löschen möchtest';
      return this.message;
    } else if (this.cancel) {
      this.message =
        'Bist du sicher dass du deine Änderungen verwerfen möchtest';
      return this.message;
    } else {
      return;
    }
  }
}
