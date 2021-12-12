import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@whatsapp/api-interfaces';

@Component({
  selector: 'wa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');

  dark = true;
  openChat: any = null;

  constructor(private http: HttpClient) {}

}
