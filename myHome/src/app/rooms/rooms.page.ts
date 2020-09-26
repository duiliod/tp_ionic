import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomsService } from '../services/rooms.service';
import { Room } from '../model/room';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.page.html',
  styleUrls: ['./rooms.page.scss'],
})
export class RoomsPage implements OnInit {
  private room = new Room();
  private numbers
  constructor(private activRoute: ActivatedRoute, private roomSrv: RoomsService) { }
  private toggled = true
  private buttonColor: string = "#ffffff";
  ngOnInit() {
    this.activRoute.paramMap.subscribe(
      paramMap => {
        this.roomSrv.obtenerPorId(paramMap.get("id")).subscribe(datos => {this.room = datos;
          });
      });
    console.log('sdfsdfsd' + this.room.local)
    this.numbers = Array(2).fill(0);
  }

  public showMovementReport() {
    if (this.toggled) {
      console.log('turn' + this.room.cantidad);
         this.buttonColor = '#ffee00';
         this.toggled = false;
         this.room.estado = true;
    }
    else{
         this.buttonColor = '#ffffff'; //hex code for previous color
         this.toggled = true;
         this.room.estado = false;
    }
      }

}