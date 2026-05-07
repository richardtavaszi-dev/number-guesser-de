import { Component, signal } from '@angular/core';
import { GameItem } from './game-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
    tip: string = ""
    guesses: GameItem[] = []
    generatedNumber: number = this.getRandomNummer(0, 50)
    gi: GameItem = new GameItem(0, "")
    endOfGame: boolean = false
    tipCounter: number = 0
    getRandomNummer(min: number, max: number): number{
    return Math.floor(Math.random() * (max - min + 1) ) + min;}

  check(){
    this.tipCounter++ 

   
    let tipNumber = parseInt(this.tip)
    if(this.generatedNumber == tipNumber){
      this.guesses.push( new GameItem(tipNumber, "Sikerült!"))
      this.endOfGame = true
    }
    else if(this.generatedNumber > tipNumber){
      this.guesses.push(new GameItem(tipNumber, "Nagyobbra gondoltam!"))
    }
    else{this.guesses.push(new GameItem(tipNumber, "Kisebbre gondoltam!"))}
    this.tip = "";
  }
}
