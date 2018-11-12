import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { trigger, state, style, animate, transition } from '@angular/animations'
import { TopbarService } from '../../services/topbar/topbar.service'

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
  animations: [
    trigger('topbar', [
      state('show', style({
        transform: 'scaleY(1)'
      })),
      state('hide', style({
        transform: 'scaleY(0)'
      })),
      transition('show => hide', animate('300ms ease-out')),
      transition('hide => show', animate('300ms ease-in'))
    ])
  ]
})
export class TopbarComponent implements OnInit {

  showTopbar = true
  theme: string
  @Output() resize = new EventEmitter()
  fullscreen = false
  progressValue = 0
  progressShow = false
  mScreenIcon = 'fullscreen'
  mThemeIcon = 'brightness_low'

  constructor(
    private topbarService: TopbarService) {

    this.theme = this.topbarService.themeName

    this.topbarService.themeEvent.subscribe(
      () => {
        this.theme = this.topbarService.themeName
      }
    )
  }

  ngOnInit() {
    let link = document.createElement('link')
    link.id = 'theme'
    link.rel = 'stylesheet'
    link.href = './assets/css/dx.dark.css'
    document.head.appendChild(link)
  }

  get topbar() {
    return this.showTopbar ? 'show' : 'hide'
  }
  get pin() {
    return !this.showTopbar ? 'show' : 'hide'
  }

  toggleTopbar() {
    this.showTopbar = !this.showTopbar
    this.resize.emit(this.showTopbar)

    if (this.showTopbar)
      this.topbarService.setShowHide(true)
    else
      this.topbarService.setShowHide(false)
  }

  toggleTheme() {
    var counter = 11
    var interval = setInterval(() => {
      this.progressShow = true
      this.progressValue = 100 - (counter * 10)
      counter--
      if (counter < 0) {
        this.progressShow = false
        clearInterval(interval)
        if (this.theme == 'dark-colors') {
          this.topbarService.setTheme('light-colors')
          this.mThemeIcon = 'brightness_high'

          let link = document.getElementById('theme')
          link['href'] = './assets/css/dx.light.css'
          document.head.appendChild(link)
        }
        else {
          this.topbarService.setTheme('dark-colors')
          this.mThemeIcon = 'brightness_low'

          let link = document.getElementById('theme')
          link['href'] = './assets/css/dx.dark.css'
          document.head.appendChild(link)
        }
      }
    }, 100)
  }

  toggleFullScreen() {
    if (!this.fullscreen) {
      this.mScreenIcon = 'fullscreen_exit'
      this.fullscreen = true

      let elem = document.body
      let methodToBeInvoked = elem.requestFullscreen ||
        elem['webkitRequestFullScreen'] || elem['mozRequestFullScreen'] ||
        elem['msRequestFullScreen']
      if (methodToBeInvoked) methodToBeInvoked.call(elem)
    }
    else {
      this.fullscreen = false
      this.mScreenIcon = 'fullscreen'

      let elem = document
      let methodToBeInvoked = elem['exitFullscreen'] ||
        elem['webkitExitFullscreen'] || elem['mozCancelFullScreen'] ||
        elem['msExitFullscreen']
      if (methodToBeInvoked) methodToBeInvoked.call(elem)
    }
  }
}
