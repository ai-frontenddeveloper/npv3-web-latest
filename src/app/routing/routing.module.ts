import { NgModule } from '@angular/core'
import { Routes, RouterModule } from "@angular/router"
import { LoginComponent } from '../frontend/theme/metro/login/login.component'
import { StageComponent } from '../frontend/theme/metro/main/stage/stage.component'
import { RegisterComponent } from '../frontend/theme/metro/register/register.component'
import { TilesComponent } from '../frontend/theme/metro/main/pages/tiles/tiles.component'
import { PatientWizardComponent } from '../frontend/theme/metro/main/pages/patient-wizard/patient-wizard.component'
import { GridComponent } from '../frontend/theme/metro/main/pages/grid/grid.component'
import { PivotComponent } from '../frontend/theme/metro/main/pages/pivot/pivot.component'
import { FormComponent } from '../frontend/theme/metro/main/pages/form/form.component'


const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'stage',
    component: StageComponent,
    children: [
      {
        path: 'tiles',
        component: TilesComponent
      },
      {
        path: 'wizard',
        component: PatientWizardComponent
      },
      {
        path: 'pivot',
        component: PivotComponent
      },
      {
        path: 'grid',
        component: GridComponent
      },
      {
        path: 'form',
        component: FormComponent
      }
    ]
  }

]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class RoutingModule { }