const configureStore = require("@reduxjs/toolkit").configureStore;
const cakeReducer = require("../features/cake/cakeSlice");
const iceCreamReducer = require("../features/icecream/iceCreamSlice");
const usersReducer = require("../features/users/userSlice");

const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: usersReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;
