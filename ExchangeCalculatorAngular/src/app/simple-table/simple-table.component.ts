import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.css']
})
export class SimpleTableComponent {
  tableData = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Michael', age: 28 },
    { name: 'Emily', age: 22 }
  ];
}
