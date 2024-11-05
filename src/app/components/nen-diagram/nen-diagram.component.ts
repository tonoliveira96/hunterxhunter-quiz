import { Component } from '@angular/core';
import { NenTypeComponent } from '../nen-type/nen-type.component';

@Component({
  selector: 'app-nen-diagram',
  standalone: true,
  imports: [NenTypeComponent],
  templateUrl: './nen-diagram.component.html',
})
export class NenDiagramComponent {

}
