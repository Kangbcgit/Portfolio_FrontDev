const { configureStore } = require("@reduxjs/toolkit");
const { default: slice } = require("../slice");

const rootReducer = {
  firstSlice: slice.reducer
}

const store = configureStore({
  reducer: rootReducer
})

export default store