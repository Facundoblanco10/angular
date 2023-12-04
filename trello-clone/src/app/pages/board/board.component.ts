import { Component } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Column, ToDo } from '../../models/todo.model';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [DragDropModule, NavbarComponent],
  templateUrl: './board.component.html',
  styles: [
    `
      /* Animate items as they're being sorted. */
      .cdk-drop-list-dragging .cdk-drag {
        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
      }

      /* Animate an item that has been dropped. */
      .cdk-drag-animating {
        transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
      }
    `,
  ],
})
export class BoardComponent {
  columns: Column[] = [
    {
      id: 'todo',
      title: 'To Do',
      todos: [
        {
          id: '1',
          title: 'First todo',
        },
        {
          id: '2',
          title: 'Second todo',
        },
        {
          id: '3',
          title: 'Third todo',
        },
      ],
    },
    {
      id: 'doing',
      title: 'Doing',
      todos: [
        {
          id: '4',
          title: 'Fourth todo',
        },
        {
          id: '5',
          title: 'Fifth todo',
        },
        {
          id: '6',
          title: 'Sixth todo',
        },
      ],
    },
    {
      id: 'done',
      title: 'Done',
      todos: [
        {
          id: '7',
          title: 'Seventh todo',
        },
        {
          id: '8',
          title: 'Eighth todo',
        },
        {
          id: '9',
          title: 'Ninth todo',
        },
      ],
    },
  ];

  todos: ToDo[] = [];
  doing: ToDo[] = [];
  done: ToDo[] = [];

  drop(event: CdkDragDrop<ToDo[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  getConnectedLists(currentColumnId: string): string[] {
    return this.columns
      .map(col => col.id)
      .filter(id => id !== currentColumnId);
  }

  addColumn() {
    this.columns.push({
      id: 'new ' + (this.columns.length + 1),
      title: 'New Column ' + (this.columns.length + 1),
      todos: [],
    });
  }
}
