import React, { createContext, useReducer, useContext } from "react";

const TodosContext = createContext();

export const TodosProvider = ({ children }) => {
  const initialState = [];

  const todosReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TODO":
        return [
          ...state,
          { id: Date.now(), text: action.payload, completed: false },
        ];
      case "REMOVE_TODO":
        return state.filter((todo) => todo.id !== action.payload);
      case "TOGGLE_TODO":
        return state.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        );
      default:
        return state;
    }
  };

  const [todos, dispatch] = useReducer(todosReducer, initialState);

  return (
    <TodosContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodosContext.Provider>
  );
};

export const useTodos = () => {
  const context = useContext(TodosContext);
  if (context === undefined) {
    throw new Error("useTodos must be used within a TodosProvider");
  }
  return context;
};
