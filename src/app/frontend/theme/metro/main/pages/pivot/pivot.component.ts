import { Component, OnInit, ViewChild } from '@angular/core'

import { TopbarService } from '../../../services/topbar/topbar.service'
import { PivotService } from '../../../services/pivot/pivot.service'
import { DxPivotGridComponent } from 'devextreme-angular'

@Component({
  selector: 'app-pivot',
  templateUrl: './pivot.component.html',
  styleUrls: ['./pivot.component.scss']
})
export class PivotComponent implements OnInit {

  @ViewChild(DxPivotGridComponent) pivotGrid: DxPivotGridComponent

  pivotGridDataSource: any
  showHide: boolean

  constructor(private service: PivotService, private topbarService: TopbarService) {

    this.showHide = this.topbarService.showHideVal
    this.topbarService.showHideEvent.subscribe(
      () => {
        this.showHide = this.topbarService.showHideVal
        if (this.showHide)
          this.pivotGrid.height = '92vh'
        else
          this.pivotGrid.height = '97vh'
      }
    )
    this.pivotGridDataSource = {
      fields: [{
        caption: "Region",
        dataField: "region",
        expanded: true,
        area: "row"
      }, {
        caption: "Country",
        dataField: "country",
        expanded: true,
        area: "row"
      }, {
        caption: "City",
        dataField: "city",
        area: "row"
      }, {
        dataField: "date",
        dataType: "date",
        area: "column"
      }, {
        caption: "Sales",
        dataField: "amount",
        dataType: "number",
        summaryType: "sum",
        format: "currency",
        area: "data"
      }, {
        caption: "Percent",
        dataField: "amount",
        dataType: "number",
        summaryType: "sum",
        summaryDisplayMode: "percentOfRowGrandTotal",
        area: "data"
      }],
      store: service.getSales(),
    }
  }

  ngOnInit() {
  }

}