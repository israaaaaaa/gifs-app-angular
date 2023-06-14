    import { Injectable } from '@angular/core';
    import {HttpClient, HttpParams} from '@angular/common/http';
    import { Gif, SearchResponse } from '../interfaces/gifs.interfaces'; 
    
    @Injectable({providedIn: 'root'})
    export class GifsService {
        
        public gifsList: Gif[] = [];
        private _tagHistory: string[] = []; 
        private apiKey: string = 'q9ilu03munMWHtsTaNIxjVriNccS1Url';
        private serviceUrl: string = 'https://api.giphy.com/v1/gifs';
        constructor(private http : HttpClient) { 
            this.loadLocalstorage();
        }
        
        private saveLocalstorage():void {
            localStorage.setItem('history',JSON.stringify(this._tagHistory));
        }

        private loadLocalstorage():void  {
            if(localStorage.getItem('history'))
            this._tagHistory = JSON.parse(localStorage.getItem('history')!);
        }

        public get tagHistory() {
            return [...this._tagHistory];
        }

        public organizeHistory(tag:string) {
            tag = tag.toLowerCase();
            if(this._tagHistory.includes(tag)){
                this._tagHistory = this._tagHistory.filter(oldTag => oldTag !== tag)
            }

            this._tagHistory.unshift(tag);
            this._tagHistory = this._tagHistory.splice(0,10);
            this.saveLocalstorage();
        }

        public searchTag(tag :string) {
            
            if(tag.length===0) {
                return
            }
            this.organizeHistory(tag);

            const params = new HttpParams()
            .set('api_key',this.apiKey)
            .set('limit', '10')
            .set('q', tag);

            this.http.get<SearchResponse>(`${this.serviceUrl}/search`, { params })
            .subscribe(resp => {
                this.gifsList = resp.data;
            });
        }  
    }