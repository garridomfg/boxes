import { gql } from 'apollo-angular';

const CURRENT_UESR = gql`
  query CurrentUser {
    currentUser {
      id
      name
      wallets {
        id
        amount
        currency
      }
    }
  }
`;

const BOX_GRID = gql`
  query BoxGrid {
    boxes(free: true, openable: true, purchasable: true) {
      edges {
        node {
          id
          name
          iconUrl
          cost
        }
      }
    }
  }
`;

export { CURRENT_UESR, BOX_GRID };
