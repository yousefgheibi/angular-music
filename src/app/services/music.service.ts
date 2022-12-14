import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(private _http: HttpClient) { }

  suggestedPlayListsUrl = environment.baseUrl;
  playlistUrl = environment.playlistUrl;

  getSuggestedPlayLists(){
    return this._http.get(this.suggestedPlayListsUrl);
  }

  getCategroyItems(id: number,size: number){
    return this._http.get(this.playlistUrl + `playListId=${id}&page=1&size=${size}`);
  }
}

