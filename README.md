# cautious-garbanzo

React Native - grocery list manager

## Dev Notes

#### react-devtools

If `react-devtools` is stuck on "Waiting for React to connect..." after opening the in-app dev menu, run `adb reverse tcp:8097 tcp:8097` in the console and try again.

#### redux usage
Redux Toolkit is the new standard for writing Redux logic. Now using slices instead of separate actions and reducers.

[Redux usage with TypeScript](https://redux.js.org/usage/usage-with-typescript)