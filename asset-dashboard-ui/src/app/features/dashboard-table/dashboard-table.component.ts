import { Component, OnInit, Input, Output,EventEmitter, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { Asset } from '../assets/asset';

import { MatTableModule, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'dashboard-table',
  templateUrl: './dashboard-table.component.html',
  styleUrls: ['./dashboard-table.component.css']
})
export class DashboardTableComponent implements OnChanges {
    
    @Input() data: Asset[];
    
    dataSource: MatTableDataSource<Asset>;

    @Output()
    selectedAsset: EventEmitter<Asset> = new EventEmitter<Asset>();
    
    riskRatings: {};
    
    displayedColumns: string[] = ['riskColor', 'id', 'type', 'version', 'pressure', 'flowRate', 'temperature'];
    
    @ViewChild(MatSort) sort: MatSort;
    
    tableClick (asset){
        this.selectedAsset.emit(asset);
    }
    
    ngOnInit() {
        this.dataSource = new MatTableDataSource<Asset>(this.data);

        this.dataSource.sort = this.sort;
    }

    ngOnChanges(changes: SimpleChanges) {
        if(changes.dataSource.currentValue) {
          console.log("dashboard-table: "+this.dataSource);
        }
    }
}