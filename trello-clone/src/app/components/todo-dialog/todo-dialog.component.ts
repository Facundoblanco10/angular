import { Component, inject } from '@angular/core';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { BtnComponent } from '../btn/btn.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClose, faCheckToSlot, faBars, faUser, faTag, faCheckSquare, faClock } from '@fortawesome/free-solid-svg-icons';
import { ToDo } from '../../models/todo.model';

interface InputData {
  todo: ToDo;
}
interface OutputData {
  rta: boolean;
}
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

  todo!: ToDo;

  private _dialogRef = inject(DialogRef<OutputData>)
  private data: InputData = inject(DIALOG_DATA)

  constructor() {
    this.todo = this.data.todo;
  }

  close() {
    this._dialogRef.close({
      rta: true
    });
  }

  closeWithRta(rta: boolean) {
    this._dialogRef.close({
      rta: rta
    });
  }
}
