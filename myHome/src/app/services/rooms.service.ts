import { Injectable } from '@angular/core';
import { Room } from '../model/room';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

  
export class RoomsService {
  
  constructor(private httpCli: HttpClient) { }
  
  public obtenerTodos(){
    console.log("aca inicia");
    /*return this.httpCli.get('https://jsonplaceholder.typicode.com/albums');*/
    return this.httpCli.get<Room[]>("http://localhost:5000/todo/api/v1.0/rooms");
  }

  public obtenerPorId(id: string) {
    console.log('inicia cad room')
    return this.httpCli.get<Room>("http://localhost:5000/todo/api/v1.0/rooms/"+id);
  }

  public deletePorId(id: string) {
    console.log('inicia delete room' + id)
    return this.httpCli.delete("http://localhost:5000/todo/api/v1.0/rooms/"+id)
  }

  public agregar( rommy: Room) {
    console.log("agregando")
    return this.httpCli.post("http://localhost:5000/todo/api/v1.0/rooms", rommy )
  }

}
