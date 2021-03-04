export type Ordem = {
  id: number;
  endereco: string;
  latitude: number;
  longitude: number;
  momento: string;
  status: string;
  total: number;
  produtos: Produto[];
};

export type Produto = {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  imageUri: string;
};
