export interface Boxes {
  data: Data;
}

export interface Data {
  boxes: Boxes;
}

export interface Boxes {
  edges: Edge[];
}

export interface Edge {
  node: Node;
}

export interface Node {
  id:      string;
  name:    string;
  iconUrl: string;
  cost:    number;
}

export interface OpenBox {
  openBox: OpenBox;
}

export interface OpenBox {
  boxOpenings: BoxOpening[];
  __typename:  string;
}

export interface BoxOpening {
  id:          string;
  itemVariant: ItemVariant;
  __typename:  string;
}

export interface ItemVariant {
  id:         string;
  name:       string;
  value:      number;
  __typename: string;
}
