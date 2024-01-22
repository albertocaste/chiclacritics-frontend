import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'spin-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spin-loader.component.html',
  styleUrl: './spin-loader.component.scss'
})
export class SpinLoaderComponent {
  @Input() color: string = 'grey';
  @Input() size: string = '3';
}
