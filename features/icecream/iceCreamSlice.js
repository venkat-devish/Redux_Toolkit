const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numOfIcreCreams: 10,
};
const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIcreCreams--;
    },
    restoked: (state, action) => {
      state.numOfIcreCreams += action.payload;
    },
  },
});

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;
