import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private subject = new BehaviorSubject<string>('');
  public observable = this.subject.asObservable();

  public setText(text: string) {
    this.subject.next(text);
  }
}
