const { createSlice } = require("@reduxjs/toolkit");

const slice = createSlice({
  name: 'firstSlice',
  initialState: {
    firstData: {}
  },
  reducers: (state, action) => {
    state.firstData = {}
  }
});

export default slice