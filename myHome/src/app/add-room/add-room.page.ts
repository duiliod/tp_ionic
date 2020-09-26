import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../services/rooms.service';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.page.html',
  styleUrls: ['./add-room.page.scss'],
})
export class AddRoomPage implements OnInit {

  constructor(private roomSrv: RoomsService) { }
  private cantidad;
  private id;
  private description;
  private local;
  private disableButton;
  private rommy ={
    "cantidad": 'none',
    "description": 'none',
    "done": "false",
    "estado": false,
    "id": '0',
    "local": 'nothing'
  }
  
  ngOnInit() {
  }
  public newRoom() {
    this.disableButton = true;
    this.rommy.description = this.description
    this.rommy.cantidad = this.cantidad
    this.rommy.local = this.local
    console.log(this.rommy)
    this.roomSrv.agregar(this.rommy).subscribe();
    console.log(this.local)
  };

    
 

}
