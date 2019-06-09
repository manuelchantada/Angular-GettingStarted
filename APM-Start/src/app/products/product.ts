export interface IProduct {
  Stock: IStock;
  Id: number;
  Nombre: string;
  Codigo: string;
  Descripcion: string;
  Talle: string;
  Variante: string;
}

export interface IStock {
  Id: number,
  Cantidad: number;
}
