import {Persona} from "./Persona";

export class Usuario {
  id?: number;
  id_persona: number;
  id_perfil: number;
  login: string;
  contraseña: string;
  estado: boolean;

  //Relacion
  persona?: Persona;
}
