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

export interface updateItemTitlePayload {
  listId: string;
  itemId: string;
  itemTitle: string;
}

export interface RemoveItemPayload {
  listId: string;
  itemId: string;
}

export interface UpdateListItemsPayload {
  listId: string;
  items: ItemData[];
}

export interface UpdateListTitlePayload {
  listId: string;
  title: string;
}
