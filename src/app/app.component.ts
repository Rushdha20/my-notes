import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HeaderComponent]
})
export class AppComponent {
  notes: string[] = ['Note 1', 'Note 2', 'Note 3'];
  newNote: string = '';

  addNote() {
    if (this.newNote.trim() !== '') {
      this.notes.push(this.newNote);
      this.newNote = '';
    }
  }
}
