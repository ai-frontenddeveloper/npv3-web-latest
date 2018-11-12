import { Component, OnInit } from '@angular/core'
import { TopbarService } from '../../../services/topbar/topbar.service'
import 'hammerjs'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  

  theme: string
  constructor(private topbarService: TopbarService) {
    this.theme = this.topbarService.themeName

    this.topbarService.themeEvent.subscribe(
      () => {
        this.theme = this.topbarService.themeName
      }
    )
  }

  ngOnInit() {
  }
}