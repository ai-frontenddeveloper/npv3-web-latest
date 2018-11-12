import { Component, OnInit } from '@angular/core'
import { TilesTransferService } from '../../../services/tiles-transfer/tiles-transfer.service'
import { Tile } from '../../../interfaces/stage/stage.tile'

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.scss']

})
export class TilesComponent implements OnInit {

  theme: string
  themee: any
  desktopTiles: Tile[] = []
  show = false

  constructor(private tilesTransferService: TilesTransferService) {
  }

  ngOnInit() {
    if (this.tilesTransferService.tilesLoadBool) {
      this.GetTiles()
    }
    this.tilesTransferService.tilesLoadEvent.subscribe(
      () => {
        this.GetTiles()
      }
    )
  }

  GetTiles() {
    this.tilesTransferService.tilesTransfer.forEach(element => {
      if (element.group == 'desktop') {
        this.desktopTiles.push(element)
      }
    })
  }
}