const store = require("../redux_toolkit_main/app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const iceCreamActions =
  require("./features/icecream/iceCreamSlice").iceCreamActions;
const fetchUsers = require("./features/users/userSlice").fetchUsers;

console.log("Initial State", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Updated State ", store.getState());
});

store.dispatch(fetchUsers());

store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restoked(3));

store.dispatch(iceCreamActions.ordered());
store.dispatch(iceCreamActions.ordered());
store.dispatch(iceCreamActions.restoked(2));
unsubscribe();
