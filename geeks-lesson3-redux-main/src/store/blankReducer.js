const initialState = {
  names: []
}

export const BlankReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BLANK':
      return { names: [...state.names, action.payload] }
  }
  return state
}

export const addBlunk = payload => ({ type: 'ADD_BLANK', payload })
