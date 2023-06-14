import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gif-card',
  templateUrl: './gif-card.component.html'
})
export class GifCardComponent implements OnInit{

  public ngOnInit():void {
    if(!this.gif) {
      throw new Error('gif required');
    }
  }

  @Input()
  public gif! :Gif;
}
