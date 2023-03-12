import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

import type {RootState} from '../../app/store';
import {
  AddItemPayload,
  GroceryListsState,
  ItemData,
  RemoveItemPayload,
} from '../../interfaces/interfaces';

const initialState: GroceryListsState = {
  groceryLists: [
    {
      id: '0',
      title: 'staple items',
      items: [
        {
          id: '1',
          title: 'ice cream',
          quantity: 1,
        },
        {
          id: '2',
          title: 'milk',
          quantity: 2,
        },
      ],
    },
  ],
};

export const groceryListsSlice = createSlice({
  name: 'groceryLists',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<AddItemPayload>) => {
      const item: ItemData = {
        id: uuidv4(),
        title: action.payload.title,
        quantity: 1,
      };
      const listIndex = state.groceryLists.findIndex(
        lists => lists.id === action.payload.listId,
      );
      state.groceryLists[listIndex].items.push(item);
    },
    removeItem: (state, action: PayloadAction<RemoveItemPayload>) => {
      const listIndex = state.groceryLists.findIndex(
        lists => lists.id === action.payload.listId,
      );
      state.groceryLists[listIndex].items = state.groceryLists[
        listIndex
      ].items.filter(item => item.id !== action.payload.itemId);
    },
  },
});

export const {addItem, removeItem} = groceryListsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getLists = (state: RootState) => state.groceryLists.groceryLists;

export const groceryListsReducer = groceryListsSlice.reducer;
