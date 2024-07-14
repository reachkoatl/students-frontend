import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersServiceClientService {



  private apiUrl = 'http://localhost:5000/users/api/v1'; // Cambia la URL según tu backend

  constructor(private http: HttpClient) {}

  // Obtener todos los usuarios
  obtenerUsuarios(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  // Obtener un usuario por ID
  obtenerUsuarioPorId(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // Crear un nuevo usuario
  crearUsuario(usuario: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, usuario);
  }

  // Actualizar un usuario existente
  actualizarUsuario(id: number, usuario: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, usuario);
  }

  // Eliminar un usuario por ID
  eliminarUsuario(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
