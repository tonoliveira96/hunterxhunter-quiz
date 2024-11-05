import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { nenTypeData } from '../../../data/quiz';
import { NenTypesProps } from '../../../types/types';
import { CharacterCardComponent } from "../../components/character-card/character-card.component";
import { HexagonComponent } from '../../components/hexagon/hexagon.component';
import { NenDiagramComponent } from '../../components/nen-diagram/nen-diagram.component';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CharacterCardComponent, NenDiagramComponent, HexagonComponent],
  templateUrl: './result.component.html',
})
export class ResultComponent implements OnInit {
  private route = inject(Router);

  nenTypeResult!: NenTypesProps;

  ngOnInit(): void {
    var result = localStorage.getItem("@hxhquiz:");

    if (result) {
      var nenCategory = nenTypeData.find(nen => nen.type.toString() === result);
      if (nenCategory) {
        this.nenTypeResult = nenCategory;
      }
    }
  }

  onRestart() {
    this.route.navigate(["/"]);
  }

}
