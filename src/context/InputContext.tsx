import React, { createContext, useReducer } from "react";

type AppState = typeof initialState;
type Action = { type: "SET_INPUT_VALUE"; payload: string };

interface InputProviderProps {
  children: React.ReactNode;
}

const initialState = {
  inputValue: '',
};

const reducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case "SET_INPUT_VALUE":
      return {
        ...state,
        inputValue: action.payload,
      };
    default:
      return state;
  }
};

const InputContext = createContext<{ state: AppState; dispatch: React.Dispatch<Action> }>({ state: initialState, dispatch: () => {} });

function InputProvider({ children }: InputProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <InputContext.Provider value={{ state, dispatch }}>
      {children}
    </InputContext.Provider>
  );
}

export { InputContext, InputProvider };