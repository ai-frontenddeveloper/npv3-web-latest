import { Component, OnInit, HostListener } from '@angular/core'
import { Router } from '@angular/router'
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', './login.responsive.component.scss']
})
export class LoginComponent implements OnInit {

  model: any = {}

  hide = true
  constructor(private router: Router) { }

  ngOnInit() {

  }

  onSubmit(submitForm) {
    this.router.navigate(["stage/tiles"])
  }
}

