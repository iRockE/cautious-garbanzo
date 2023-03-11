import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {groceryListsReducer} from '../features/groceryList/groceryListsSlice';

const rootReducer = combineReducers({groceryLists: groceryListsReducer});

export const store = configureStore({
  reducer: rootReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
