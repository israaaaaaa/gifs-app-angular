import { Component,ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
    selector: 'gif-search-box',
    template: `
    <h5>Buscar</h5>
    <input type="text" class="form-control" placeholder="Buscar gifs..." (keyup.enter)="searchTag(txtTagInput.value)" #txtTagInput>
    `
})

export class SearchComponent {

    // @ViewChild('txtTagInput')
    // tagInput: ElementRef<HTMLInputElement>;

    constructor(private gifsService: GifsService) { 
        
        this.gifsService.searchTag(this.gifsService.tagHistory.shift() || '');
    }

    searchTag(newTag:string) {
        this.gifsService.searchTag(newTag);
        
        console.log(newTag);
    }
}