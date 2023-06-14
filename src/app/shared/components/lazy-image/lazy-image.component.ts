import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html'
})
export class SharedLazyImageComponent implements OnInit {

@Input()
public url!: string;

@Input()
public alt: string = '';

public hasLoaded: boolean = false;

ngOnInit(): void {
  if(!this.url) {
    throw new Error('No se encontro la url');
  }
}

onLoad() {
  setTimeout(() => {this.hasLoaded = true; }, 1000);
  
}

}
