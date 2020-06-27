import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  public employees = [
    { "id": 1, "name": "dfandrew", "age": 20 },
    { "id": 2, "name": "anddffrew", "age": 50 },
    { "id": 3, "name": "fdafndrew", "age": 40 },
    { "id": 4, "name": "ffandrew", "age": 60 },
    { "id": 5, "name": "dfdandrew", "age": 40 }
  ];
  constructor() { }

  ngOnInit() {
    //console.log(CHARACTERS);
    //console.log(this.array);
  }
  getEmployees(){
    this.employees=[
      { "id": 1, "name": "dfandrew", "age": 20 },
      { "id": 2, "name": "anddffrew", "age": 50 },
      { "id": 3, "name": "fdafndrew", "age": 40 },
      { "id": 4, "name": "ffandrew", "age": 60 },
      { "id": 5, "name": "dfdandrew", "age": 40 },
      { "id": 6, "name": "fdafndrew", "age": 40 },
      { "id": 7, "name": "ffandrew", "age": 60 },
      { "id": 8, "name": "dfdandrew", "age": 40 }
    ]
  }
  trackbycode(index:number,employees:any):string{
  return employees.id
  }
 
}
