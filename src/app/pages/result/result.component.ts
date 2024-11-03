import { Component } from '@angular/core';
import { CharacterCardComponent } from "../../components/character-card/character-card.component";
import { NenTypeComponent } from "../../components/nen-type/nen-type.component";

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [NenTypeComponent, CharacterCardComponent],
  templateUrl: './result.component.html',
})
export class ResultComponent {

}
