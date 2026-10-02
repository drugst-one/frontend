import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';

@Component({
  selector: 'app-config-change-dialog',
  standalone: true,
  imports: [ButtonModule, DialogModule],
  templateUrl: './config-change-dialog.component.html'
})
export class ConfigChangeDialogComponent {
  @Input() visible = false;
  @Input() source?: 'task' | 'view' | 'global';
  @Output() accepted = new EventEmitter<void>();
  @Output() dismissed = new EventEmitter<void>();
}
