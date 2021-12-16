import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'wa-settings-panel',
  templateUrl: './settings-panel.component.html',
  styleUrls: ['./settings-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsPanelComponent  {

  @Input()
  profilePicSrc = "";

  @Input()
  name = "<Name>";

  @Input() 
  info = "<Info>"

  @Input()
  choices: { name: string, path: string, viewBox?: string }[] = [];

  @Output()
  closePanel = new EventEmitter();

  @Output()
  clickChoice = new EventEmitter<number>();

  // constructor() { }

  public ClosePanel() {
    this.closePanel.emit();
  }

  public EmitChoiceClicked(index: number) {
    this.clickChoice.emit(index);
  }

}
