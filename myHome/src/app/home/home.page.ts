import { Component } from '@angular/core';
import { RoomsService } from '../services/rooms.service';
import { Room } from '../model/room';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private rooms;

  constructor(private roomSrv: RoomsService) {
    roomSrv.obtenerTodos().subscribe(datos => {
      this.rooms = datos
    });
  }
  
  public removeItem(id: string) {
    console.log('presiona delete')
    this.roomSrv.deletePorId(id).subscribe()
  }

}
