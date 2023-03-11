import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {v4 as uuidv4} from 'uuid';

import type {RootState} from '../../app/store';
import ItemData from '../../interfaces/ItemData';

interface GroceryListState {
  list: ItemData[];
}

const initialState: GroceryListState = {
  list: [
    {
      id: '1',
      title: 'ice cream',
    },
    {
      id: '2',
      title: 'milk',
    },
  ],
};

export const groceryListSlice = createSlice({
  name: 'groceryList',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<string>) => {
      const item: ItemData = {
        id: uuidv4(),
        title: action.payload,
      };
      action.payload;
      state.list.push(item);
    },
  },
});

export const {addItem} = groceryListSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectList = (state: RootState) => state.groceryList.list;

export const groceryListReducer = groceryListSlice.reducer;
