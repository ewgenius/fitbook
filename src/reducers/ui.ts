export interface UiState {
  welcomeShowed: boolean;
}

const initialState: UiState = {
  welcomeShowed: false
};

export function ui(state = initialState, action: any) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
