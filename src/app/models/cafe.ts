export class Cafe {
  id: number;
  nombre: string;
  tipo: string;
  region: string;
  sabor: string;
  altura: number;
  imagen: string;

  constructor(altura: number, id: number, nombre: string, tipo: string, region: string, sabor: string, imagen: string){
    this.altura = altura;
    this.id = id;
    this.nombre = nombre;
    this.tipo = tipo;
    this.region = region;
    this.sabor = sabor;
    this.imagen = imagen;
  }
}
