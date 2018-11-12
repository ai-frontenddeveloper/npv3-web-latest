import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { Tile } from '../../interfaces/stage/stage.tile'

@Injectable({
  providedIn: 'root'
})
export class StageService {
  
  constructor ( private http: HttpClient) { }
  
  GetTiles () {
    return this.http.get<Tile[]>('./assets/json/tiles.json')
  }
}