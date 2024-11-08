import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { charactersData, nenTypeData } from '../../../data/quiz';
import { CharactersDataProps, NenTypesProps } from '../../../types/types';
import { CharacterCardComponent } from "../../components/character-card/character-card.component";
import { HexagonComponent } from '../../components/hexagon/hexagon.component';
import { NenDiagramComponent } from '../../components/nen-diagram/nen-diagram.component';

declare let gtag: Function;

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CharacterCardComponent, NenDiagramComponent, HexagonComponent],
  templateUrl: './result.component.html',
})
export class ResultComponent implements OnInit {
  private route = inject(Router);

  nenTypeResult!: NenTypesProps;
  relatedCharacters!: CharactersDataProps[];

  ngOnInit(): void {
    var result = localStorage.getItem("@hxhquiz:");

    if (result) {
      var nenCategory = nenTypeData.find(nen => nen.type.toString() === result);
      if (nenCategory) {
        this.nenTypeResult = nenCategory;

        var characters = charactersData.filter(character => character.type.toString() === result);
        if (characters) {
          this.relatedCharacters = characters;
        }
      }
    } else {
      this.route.navigate(["/"]);
    }
  }

  onRestart() {
    this.trackButtonClick();
    localStorage.removeItem("@hxhquiz:");
    this.route.navigate(["/"]);
  }

  trackButtonClick() {
    gtag('event', 'restart_quiz', {});
  }
}
