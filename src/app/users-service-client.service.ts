import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './models/User';
@Injectable({
  providedIn: 'root'
})
export class UsersServiceClientService {



  private apiUrl = 'http://localhost:5000/users/api/v1'; // Cambia la URL según tu backend

  constructor(private http: HttpClient) {}

  // Método de autenticación
  login(username: string, password: string): Observable<any> {
    const credentials = { username, password };
    return this.http.post(`${this.apiUrl}/login`, credentials);  // Ajusta la URL según tu backend
  }
  addUser(user: User) {
    return this.http.post<User>(`${this.apiUrl}/signup`, user);
  }

  // Obtener todos los usuarios
  obtenerUsuarios(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  // Obtener un usuario por ID
  obtenerUsuarioPorId(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // Crear un nuevo usuario
  crearUsuario(usuario: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, usuario);
  }

  // Actualizar un usuario existente
  actualizarUsuario(id: number, usuario: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}`, usuario);
  }

  // Eliminar un usuario por ID
  eliminarUsuario(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
