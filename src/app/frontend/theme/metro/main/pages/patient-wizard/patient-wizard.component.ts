import { Component, OnInit } from '@angular/core'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { TopbarService } from '../../../services/topbar/topbar.service'

@Component({
  selector: 'app-patient-wizard',
  templateUrl: './patient-wizard.component.html',
  styleUrls: ['./patient-wizard.component.scss']
})
export class PatientWizardComponent implements OnInit {

  theme: string
  isLinear = false
  firstFormGroup: FormGroup
  secondFormGroup: FormGroup

  constructor(private topbarService: TopbarService, private _formBuilder: FormBuilder ) {

    this.theme = this.topbarService.themeName

    this.topbarService.themeEvent.subscribe(
      () => {
        this.theme = this.topbarService.themeName
      }
    )
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    })
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    })
  }
}
