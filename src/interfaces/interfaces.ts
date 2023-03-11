// DATA

export interface ItemData {
  id: string;
  title: string;
  quantity: number;
}

export interface GroceryListData {
  id: string;
  title: string;
  items: ItemData[];
}

// STATES

export interface GroceryListsState {
  groceryLists: GroceryListData[];
}

// ACTION PAYLOADS

export interface AddItemPayload {
  listId: string;
  title: string;
}
