import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { DxPivotGridModule, DxCheckBoxModule, DxDataGridModule } from "devextreme-angular"

import { RoutingModule } from './routing/routing.module'
import { MaterialModule } from './material/material.module'

import { AppComponent } from './app.component'
import { StageComponent } from './frontend/theme/metro/main/stage/stage.component'
import { TaskbarComponent } from './frontend/theme/metro/main/taskbar/taskbar.component'
import { TopbarComponent } from './frontend/theme/metro/main/topbar/topbar.component'
import { MenuComponent } from './frontend/theme/metro/main/menu/menu.component'
import { LoginComponent } from './frontend/theme/metro/login/login.component'
import { RegisterComponent } from './frontend/theme/metro/register/register.component'
import { TilesComponent } from './frontend/theme/metro/main/pages/tiles/tiles.component'
import { PatientWizardComponent } from './frontend/theme/metro/main/pages/patient-wizard/patient-wizard.component'
import { GridComponent } from './frontend/theme/metro/main/pages/grid/grid.component'
import { PivotComponent } from './frontend/theme/metro/main/pages/pivot/pivot.component'
import { FormComponent } from './frontend/theme/metro/main/pages/form/form.component'


@NgModule({
  declarations: [
    AppComponent,
    StageComponent,
    TaskbarComponent,
    TopbarComponent,
    MenuComponent,
    LoginComponent,
    RegisterComponent,
    TilesComponent,
    PatientWizardComponent,
    GridComponent,
    PivotComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    DxCheckBoxModule,
    DxPivotGridModule,
    DxDataGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
