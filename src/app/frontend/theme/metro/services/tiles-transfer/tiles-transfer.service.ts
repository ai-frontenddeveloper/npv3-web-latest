import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

import { Tile } from '../../interfaces/stage/stage.tile'

@Injectable({
  providedIn: 'root'
})
export class TilesTransferService {

  tilesTransfer:Tile[] = []

  tilesLoadBool = false
  tilesLoad = new Subject<boolean>()
  tilesLoadEvent = this.tilesLoad.asObservable()

  constructor() { }

  setTilesLoad(s) {
    this.tilesLoadBool = s
    this.tilesLoad.next()
  }
}
