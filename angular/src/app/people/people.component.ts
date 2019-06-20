import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { delay } from 'q';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  users: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getPersonas().subscribe((nombre)=>{
      this.users = nombre;
    });
  }

  Update(Nombre:string)
  {
    const new_name = prompt("Introduce the new name: ");
    this.data.updatePersona(Nombre,new_name).subscribe(data => {
      window.location.reload();
    },
      error => {
        console.log("Error ", error);

      });;
  }

  Delete(Nombre:string){
    this.data.deletePersona(Nombre).subscribe(data => {
      console.log(data);
      delay(3000);
      window.location.reload();
    },
      error => {
        console.log("Error ", error);
      });;
  }

}
