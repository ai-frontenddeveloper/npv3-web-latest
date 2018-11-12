import { Component, OnInit } from '@angular/core'
import { trigger, state, style, animate, transition } from '@angular/animations'
import { TopbarService } from '../../services/topbar/topbar.service'

@Component({
  selector: 'app-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.scss'],
  animations: [
    trigger('taskbar', [
      state('show', style({
        transform: 'translateY(0)'
      })),
      state('hide', style({
        transform: 'translateY(100%)'
      })),
      transition('show => hide', animate('250ms ease-out')),
      transition('hide => show', animate('250ms ease-in'))
    ])
  ]
})
export class TaskbarComponent implements OnInit {

  showTaskbar = false
  theme: string
  date: Date
  copyright: string = 'All Rights Reserved @ Nexuspro V3'

  constructor(private topbarService: TopbarService) {

    this.theme = this.topbarService.themeName

    this.topbarService.themeEvent.subscribe(
      () => {
        this.theme = this.topbarService.themeName
      }
    )
  }

  ngOnInit() {
    setInterval(() => {
      this.date = new Date()
    }, 1000)
  }

  get taskbar() {
    return this.showTaskbar ? 'show' : 'hide'
  }

  toggleTaskbar() {
    this.showTaskbar = !this.showTaskbar
  }
}
