import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Para usar ngIf



@Component({
  
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule,CommonModule],

  styleUrl: './app.component.css',
  templateUrl: './app.component.html',

})
export class AppComponent {

  name: string = '';
  names:  string[] = [];

  addName(): void {

    console.log('click event working ok')

    if (this.name.trim()) {
      this.names.push(this.name);
      this.name = '';
    }
  }
}