import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@whatsapp/api-interfaces';
import { ContextMenuService } from "@whatsapp/ui";

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
  isSettingsPanelOpen = false;

  settingsChoices = [{
    name: "Benachrichtigung",
    path: "M12 21.7c.9 0 1.7-.8 1.7-1.7h-3.4c0 .9.8 1.7 1.7 1.7zm5.6-5.2v-4.7c0-2.7-1.8-4.8-4.3-5.4v-.6c0-.7-.6-1.3-1.3-1.3s-1.3.6-1.3 1.3v.6c-2.5.6-4.3 2.7-4.3 5.4v4.7l-1.7 1.7v.9h14.6v-.9l-1.7-1.7z"
  }, {
    name: "Datenschutz",
    path: "M14 1.102a8.273 8.273 0 0 1 8.273 8.273l-.001 2.804.084.003A4.86 4.86 0 0 1 27 17.037v12.43a4.86 4.86 0 0 1-4.86 4.86H5.86A4.86 4.86 0 0 1 1 29.467v-12.43a4.86 4.86 0 0 1 4.727-4.858V9.375A8.273 8.273 0 0 1 14 1.102zm0 18.458c-1.958 0-3.545 1.653-3.545 3.692s1.587 3.691 3.545 3.691 3.545-1.652 3.545-3.691c0-2.04-1.587-3.692-3.545-3.692zm0-14.766c-2.538 0-4.61 2-4.722 4.51l-.005.217-.001 2.655h9.455V9.521A4.727 4.727 0 0 0 14 4.794z",
    viewBox: "0 0 28 35"
  }, {
    name: "Sicherheit",
    path: "M12.027 2L4 5.568v5.35c0 4.95 3.425 9.58 8.027 10.704 4.602-1.124 8.027-5.753 8.027-10.703V5.568L12.027 2zm0 9.802h6.243c-.472 3.674-2.925 6.948-6.243 7.973v-7.964H5.784V6.727l6.243-2.774v7.849z"
  }, {
    name: "Design",
    path: "M12 1l3.22 3.22h4.56v4.56L23 12l-3.22 3.22v4.56h-4.56L12 23l-3.22-3.22H4.22v-4.56L1 12l3.22-3.22V4.22h4.56L12 1zm0 5v12c3.31 0 6-2.69 6-6a6.005 6.005 0 0 0-5.775-5.996L12 6z"
  }, {
    name: "Chat-Hintergrund",
    path: "M4.9 5.9h6.4V4.1H4.9c-1 0-1.8.8-1.8 1.8v6.4h1.8V5.9zm5.3 8l-3.6 4.4h10.7l-2.7-3.6-1.8 2.4-2.6-3.2zm6.2-4c0-.7-.6-1.3-1.3-1.3s-1.3.6-1.3 1.3.6 1.3 1.3 1.3 1.3-.6 1.3-1.3zm2.7-5.8h-6.4v1.8h6.4v6.4h1.8V5.9c0-1-.8-1.8-1.8-1.8zm0 16h-6.4v1.8h6.4c1 0 1.8-.8 1.8-1.8v-6.4h-1.8v6.4zM4.9 13.7H3.1v6.4c0 1 .8 1.8 1.8 1.8h6.4v-1.8H4.9v-6.4z"
  }, {
    name: "Tastaturkürzel",
    path: "M10.852 12.648h2.296L12 9zM20 8.691V6c0-1.102-.898-2-2-2h-2.691L13.41 2.102a2 2 0 0 0-2.828 0L8.692 4H6c-1.102 0-2 .898-2 2v2.691L2.102 10.59a2.004 2.004 0 0 0 0 2.832L4 15.32V18c0 1.102.898 2 2 2h2.691l1.899 1.898c.781.782 2.05.782 2.832 0L15.32 20H18c1.102 0 2-.898 2-2v-2.691l1.898-1.899a2.004 2.004 0 0 0 0-2.832zm-5.91 6.707L13.602 14h-3.204l-.488 1.398a.89.89 0 0 1-.84.602.888.888 0 0 1-.84-1.191l2.442-6.86C10.872 7.38 11.398 7 12 7c.602 0 1.129.379 1.34.941l2.441 6.86a.89.89 0 0 1-.84 1.187.868.868 0 0 1-.851-.59zm0 0"
  }, {
    name: "Hilfe",
    path: "M12 4.7c-4.5 0-8.2 3.7-8.2 8.2s3.7 8.2 8.2 8.2 8.2-3.7 8.2-8.2-3.7-8.2-8.2-8.2zm.8 13.9h-1.6V17h1.6v1.6zm1.7-6.3l-.7.7c-.7.6-1 1.1-1 2.3h-1.6v-.4c0-.9.3-1.7 1-2.3l1-1.1c.3-.2.5-.7.5-1.1 0-.9-.7-1.6-1.6-1.6s-1.6.7-1.6 1.6H8.7c0-1.8 1.5-3.3 3.3-3.3s3.3 1.5 3.3 3.3c0 .8-.4 1.4-.8 1.9z"
  }];

  public get CMS() { return this.contextMenuService; }

  constructor(private http: HttpClient, private contextMenuService: ContextMenuService) {
    console.log("process.env", process.env);
    console.log("process.env.TENOR_APIR_KEY", process.env.TENOR_APIR_KEY);
  }

  public OpenSettings() {
    this.isSettingsPanelOpen = true;
  }

  public CloseSettings() {
    this.isSettingsPanelOpen = false;
  }

  public HandleSettingChoiceClicked(index: number) {
    console.log("HandleSettingChoiceClicked | index", index);
    switch(index) {
      case 3: // Design
        this.dark = !this.dark;
        break;
    }
  }

}
