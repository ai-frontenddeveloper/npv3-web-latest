import { Component, OnInit, ViewChild } from '@angular/core'
import { GridService, Customer } from '../../../services/grid/grid.service'
import { TopbarService } from '../../../services/topbar/topbar.service'
import { DxDataGridComponent } from 'devextreme-angular'

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent

  customers: Customer[]
  showHide: boolean

  constructor(private topbarService: TopbarService, service: GridService) {
    
    this.showHide = this.topbarService.showHideVal
    this.topbarService.showHideEvent.subscribe(
      () => {
        this.showHide = this.topbarService.showHideVal
        if (this.showHide)
          this.dataGrid.height = '92vh'
        else
          this.dataGrid.height = '97vh'
      }
    )
    this.customers = service.getCustomers()
  }

  ngOnInit() {
  }

}