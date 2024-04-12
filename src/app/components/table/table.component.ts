import { Component } from '@angular/core';
import { PaginatorState } from 'primeng/paginator';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
onPageChange2($event: PaginatorState) {
throw new Error('Method not implemented.');
}
// selectedCustomers: any;
// getSeverity(arg0: any) {
// throw new Error('Method not implemented.');
// }
  customers:any
// options: any[]|undefined;
// rows2: any;
// first2: any=5;

  constructor(){
    this.customers=[{
      tickt:'bdf.54 تذكرة رقم ',
      countOfBuy:"50",
      countOfperson:"201",
      cinema:"سينما سيتى ستارز",
      costTicket:"$2000",
      numberticket:"C22",
      user:"احمد محمود",
      id:0


    },{
      tickt:'bdf.54 تذكرة رقم ',
      countOfBuy:"50",
      countOfperson:"201",
      cinema:"سينما سيتى ستارز",
      costTicket:"$2000",
      numberticket:"C22",
      user:"احمد محمود",
      id:1


    },{
      tickt:'bdf.54 تذكرة رقم ',
      countOfBuy:"50",
      countOfperson:"201",
      cinema:"سينما سيتى ستارز",
      costTicket:"$2000",
      numberticket:"C22",
      user:"احمد محمود",
      id:2


    },{
      tickt:'bdf.54 تذكرة رقم ',
      countOfBuy:"50",
      countOfperson:"201",
      cinema:"سينما سيتى ستارز",
      costTicket:"$2000",
      numberticket:"C22",
      user:"احمد محمود",
      id:3


    },{
      tickt:'bdf.54 تذكرة رقم ',
      countOfBuy:"50",
      countOfperson:"201",
      cinema:"سينما سيتى ستارز",
      costTicket:"$2000",
      numberticket:"C22",
      user:"احمد محمود",
      id:4


    },{
      tickt:'bdf.54 تذكرة رقم ',
      countOfBuy:"50",
      countOfperson:"201",
      cinema:"سينما سيتى ستارز",
      costTicket:"$2000",
      numberticket:"C22",
      user:"احمد محمود",
      id:5


    },{
      tickt:'bdf.54 تذكرة رقم ',
      countOfBuy:"50",
      countOfperson:"201",
      cinema:"سينما سيتى ستارز",
      costTicket:"$2000",
      numberticket:"C22",
      user:"احمد محمود",
      id:6


    },{
      tickt:'bdf.54 تذكرة رقم ',
      countOfBuy:"50",
      countOfperson:"201",
      cinema:"سينما سيتى ستارز",
      costTicket:"$2000",
      numberticket:"C22",
      user:"احمد محمود",
      id:7


    },{
      tickt:'bdf.54 تذكرة رقم ',
      countOfBuy:"50",
      countOfperson:"201",
      cinema:"سينما سيتى ستارز",
      costTicket:"$2000",
      numberticket:"C22",
      user:"احمد محمود",
      id:8


    },{
      tickt:'bdf.54 تذكرة رقم ',
      countOfBuy:"50",
      countOfperson:"201",
      cinema:"سينما سيتى ستارز",
      costTicket:"$2000",
      numberticket:"C22",
      user:"احمد محمود",
      id:9


    },{
      tickt:'bdf.54 تذكرة رقم ',
      countOfBuy:"50",
      countOfperson:"201",
      cinema:"سينما سيتى ستارز",
      costTicket:"$2000",
      numberticket:"C22",
      user:"احمد محمود",
      id:10


    },]
  }


}
