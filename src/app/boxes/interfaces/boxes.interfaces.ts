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
