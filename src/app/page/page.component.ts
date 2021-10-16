import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'l1-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit {
  text = '';

  constructor(private _router: Router, private _service: AppService) { }

  ngOnInit(): void {
    this._service.observable.subscribe((text) => {
      this.text = text;
    });
  }

  navigateToLogin(): void {
    this._service.setText(this.text);
    this._router.navigate(['/login']);
  }
}
