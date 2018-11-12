import { Component, OnInit } from '@angular/core'
import { Tile } from '../../interfaces/stage/stage.tile'
import { Accordion } from '../../interfaces/menu/menu.accordion'
import { TilesTransferService } from '../../services/tiles-transfer/tiles-transfer.service'
import { TopbarService } from '../../services/topbar/topbar.service'


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuTilesFav:Tile[] = [];
  menuTilesRec:Tile[] = [];
  menuAccordian:Accordion[] = [];
  theme: string;

  constructor(private tilesTransferService: TilesTransferService, private topbarService: TopbarService ) { 
    this.theme = this.topbarService.themeName

    this.topbarService.themeEvent.subscribe(
      () => {
        this.theme = this.topbarService.themeName
      }
    )
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
      if (element.group == 'menu-fav') {
        this.menuTilesFav.push(element)
      }
      if (element.group == 'menu-recent') {
        this.menuTilesRec.push(element)
      }
      if (element.group == 'accordion') {
        this.menuAccordian.push(element)
      }
    })
  }

}
