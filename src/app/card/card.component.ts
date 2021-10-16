import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../services/app.service';

@Component({
  selector: 'l1-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  text: string = 'Hi, there';
  showText = false;
  arr = [1, 2, 3];

  constructor(private _router: Router, private _service: AppService) {}

  ngOnInit(): void {}

  onClick(event: any): void {
    this.showText = !this.showText;
  }

  navigateToPage(): void {
    this._service.setText(this.text);
    this._router.navigate(['/page']);
  }
}
