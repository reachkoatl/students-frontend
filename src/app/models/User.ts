export class User {
  _id: string;
  age: number;
  email: string;
  fechaDeCreacion: string;
  lastName: string;
  nameUser: string;
  phone: string;
  role: number;
  username: string;

  constructor(
    _id: string,
    age: number,
    email: string,
    fechaDeCreacion: string,
    lastName: string,
    nameUser: string,
    phone: string,
    role: number,
    username: string
  ) {
    this._id = _id;
    this.age = age;
    this.email = email;
    this.fechaDeCreacion = fechaDeCreacion;
    this.lastName = lastName;
    this.nameUser = nameUser;
    this.phone = phone;
    this.role = role;
    this.username = username;
  }
}
