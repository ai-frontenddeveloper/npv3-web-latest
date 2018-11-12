import { Component, OnInit, HostListener } from '@angular/core'
import { trigger, state, style, animate, transition } from '@angular/animations'
import { TopbarService } from '../../services/topbar/topbar.service'
import { StageService } from '../../services/stage/stage.service';
import { TilesTransferService } from '../../services/tiles-transfer/tiles-transfer.service';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.scss'],
  animations: [
    trigger('stage', [
      state('show', style({
        top: '0',
        height: 'calc(100vh - 2rem)'
      })),
      state('hide', style({
        top: '4rem',
        height: 'calc(100vh - 6rem)'
      })),
      transition('show => hide', animate('300ms ease-out')),
      transition('hide => show', animate('300ms ease-in'))
    ])
  ]
})
export class StageComponent implements OnInit {

  theme: string
  themee: any
  show = false

  constructor(private topbarService: TopbarService,
              private stageService: StageService,
              private tilesTransferService: TilesTransferService) {

    this.theme = this.topbarService.themeName

    this.topbarService.themeEvent.subscribe(
      () => {
        this.theme = this.topbarService.themeName
      }
    )
  }

  ngOnInit() {
    this.stageService.GetTiles().subscribe(tiles => {
      tiles['Tiles'].forEach(element => {
        this.tilesTransferService.tilesTransfer.push(element)
      })
      this.tilesTransferService.setTilesLoad(true)
    })
  }

  Resize($event) {
    this.show = !$event
  }

  get stage() {
    return this.show ? 'show' : 'hide'
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
  }
}