import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TopbarService {

  showHideVal = true
  themeName: string = 'dark-colors'

  showHide = new Subject<boolean>()
  theme = new Subject<string>()

  showHideEvent = this.showHide.asObservable()
  themeEvent = this.theme.asObservable()

  constructor() { }

  setTheme(t) {
    this.themeName = t
    this.theme.next()
  }

  setShowHide(s) {
    this.showHideVal = s
    this.showHide.next()
  }

}


