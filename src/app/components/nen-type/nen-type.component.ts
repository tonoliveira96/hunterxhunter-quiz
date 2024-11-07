import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nen-type',
  standalone: true,
  imports: [],
  templateUrl: './nen-type.component.html',
})
export class NenTypeComponent {
  @Input() simbol!: string;

  @Input() classColor!: string;
  @Input() classPosition!: string;
  @Input() classAnimation!: string;

  @Input() description!: string;
  @Input() classDescription!: string;
  @Input() title!: string;
}
