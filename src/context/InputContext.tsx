import React, { createContext, useReducer, useEffect } from "react";
import axios from 'axios';

type AppState = typeof initialState;
type Action = { type: "SET_IP_VALUE"; payload: string } | { type: "UPDATE"; payload: { location: string, timezone: string, isp: string }};

interface InputProviderProps {
  children: React.ReactNode;
}

const initialState = {
  ip: '192.212.174.101',
  location: '',
  timezone: '',
  isp: ''
};

const reducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case "SET_IP_VALUE":
      return {
        ...state,
        ip: action.payload,
      };
    case "UPDATE":
      return {
        ...state,
        location: action.payload.location,
        timezone: action.payload.timezone,
        isp: action.payload.isp,
      }
    default:
      return state;
  }
};

const InputContext = createContext<{ state: AppState; dispatch: React.Dispatch<Action> }>({ state: initialState, dispatch: () => {} });

function InputProvider({ children }: InputProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get(`https://geo.ipify.org/api/v2/country?apiKey=at_6FrceOlYhDtHKCISJIVVOTEvBfD7M&ipAddress=${state.ip}`)
    .then(response => {
      const data = response.data;
      dispatch({ type: "UPDATE", payload: {
        location: `${data.location.country}, ${data.location.region}`, 
        timezone: data.location.timezone, 
        isp: data.isp
      }});
    })
  }, [state.ip])

  return (
    <InputContext.Provider value={{ state, dispatch }}>
      {children}
    </InputContext.Provider>
  );
}

export { InputContext, InputProvider };