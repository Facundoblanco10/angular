import { Component, inject } from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog';
import { BtnComponent } from '../btn/btn.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClose, faCheckToSlot, faBars, faUser, faTag, faCheckSquare, faClock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todo-dialog',
  standalone: true,
  imports: [BtnComponent, FontAwesomeModule],
  templateUrl: './todo-dialog.component.html'
})
export class TodoDialogComponent {

  faClose = faClose;
  faCheckToSlot = faCheckToSlot;
  faBars = faBars;
  faUser = faUser;
  faTag = faTag;
  faCheckSquare = faCheckSquare;
  faClock = faClock;

  private _dialogRef = inject(DialogRef)

  close() {
    this._dialogRef.close();
  }
}
