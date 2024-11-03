import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [],
  templateUrl: './character-card.component.html',
})
export class CharacterCardComponent {
  @Input() image_url!: string;
  @Input() name!: string;
}
