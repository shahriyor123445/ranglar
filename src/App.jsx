import React, { useReducer } from "react";
import { COLOR_ACTIONS } from "./constants/colortype";

const initialState = {
  red: 0,
  green: 0,
  blue: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case COLOR_ACTIONS.INCREMENT.RED:
      return {
        ...state,
        red: Math.min(state.red + 1, 255),
      };
    case COLOR_ACTIONS.DECREMENT.RED:
      return {
        ...state,
        red: Math.max(state.red - 1, 0),
      };
    case COLOR_ACTIONS.INCREMENT.GREEN:
      return {
        ...state,
        green: Math.min(state.green + 1, 255),
      };
    case COLOR_ACTIONS.DECREMENT.GREEN:
      return {
        ...state,
        green: Math.max(state.green - 1, 0),
      };
    case COLOR_ACTIONS.INCREMENT.BLUE:
      return {
        ...state,
        blue: Math.min(state.blue + 1, 255),
      };
    case COLOR_ACTIONS.DECREMENT.BLUE:
      return {
        ...state,
        blue: Math.max(state.blue - 1, 0),
      };

    default:
      throw new Error("Unknown color action: " + action.type);
  }
};

const ButtonComponent = ({ children, dispatch, color_type }) => {
  return (
    <div>
      {children}
      <div>
        <button
          className="border bg-neutral-500 py-2 px-4 space-x-4"
          onClick={() =>
            dispatch({
              type: COLOR_ACTIONS.INCREMENT[color_type],
            })
          }
        >
          +1
        </button>
        <button
          className="border bg-neutral-500 py-2 px-4 space-x-4"
          onClick={() =>
            dispatch({
              type: COLOR_ACTIONS.DECREMENT[color_type],
            })
          }
        >
          -1
        </button>
      </div>
    </div>
  );
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { red, green, blue } = state;

  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <div
        className="w-96 h-96"
        style={{
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      ></div>
      <div className="flex space-x-12">
        <ButtonComponent dispatch={dispatch} color_type="RED">
          <p>Red: {red}</p>
        </ButtonComponent>
        <ButtonComponent dispatch={dispatch} color_type="GREEN">
          <p>Green: {green}</p>
        </ButtonComponent>
        <ButtonComponent dispatch={dispatch} color_type="BLUE">
          <p>Blue: {blue}</p>
        </ButtonComponent>
      </div>
    </div>
  );
};

export default App;
