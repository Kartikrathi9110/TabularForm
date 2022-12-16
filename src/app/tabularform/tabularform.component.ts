import { Component, OnInit } from '@angular/core';
import { TradedetailService } from '../tradedetail.service';

@Component({
  selector: 'app-tabularform',
  templateUrl: './tabularform.component.html',
  styleUrls: ['./tabularform.component.scss']
})
export class TabularformComponent implements OnInit{

  tradedetail:any;
  data = 'Time Series (5min)';
  time = '2022-12-14 15:45:00';
constructor(private tradeSVG:TradedetailService){}

ngOnInit() {
  this.gettrade()
}


gettrade(){
  
  this.tradeSVG.gettradedetail().subscribe((Response:any)=>{
    console.log(Response);
    let data= Response["Time Series (5min)"];
    let dates=Object.keys(data);
    let dataArray=[];
    for(let date of dates){
      data[date].date=date;
      dataArray.push(data[date]);      
    }
    console.log(dataArray);        

this.tradedetail = dataArray
// Time Series (5min).2022-12-14 15:45:00
  })

}

}
