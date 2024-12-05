const { createStore, applyMiddleware } = require("redux");
const { thunk } = require("redux-thunk");





const store = createStore(, applyMiddleware(thunk))

export default store;