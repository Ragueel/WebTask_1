import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';

@Component({
    selector: 'l1-page',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    text = '';

    constructor(private _service: AppService) { }

    ngOnInit(): void {
    }
}
