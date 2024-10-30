
// Action type
const PROVIDE_VALUE = 'PROVIDE_VALUE';

// Action creator
export const provideValueAction = (payload) => ({
  type: PROVIDE_VALUE,
  payload,
});

// Initial state
const initial = {
  value: 'initial value',
};

// Reducer
const getValueReducer = (state = initial, action) => {
  if (action.type === PROVIDE_VALUE) {
    console.log(action);
    return {
      ...state,
      value: action.payload.updatedValue,
    };
  }
  return state;
};

export default getValueReducer;