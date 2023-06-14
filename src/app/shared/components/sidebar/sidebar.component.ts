import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {


  public constructor(private gifsService:GifsService) {
  }

  public get tags() {
    return this.gifsService.tagHistory; 
  }

  public searchAgain(tag: string) {
    this.gifsService.searchTag(tag);
  }

}
