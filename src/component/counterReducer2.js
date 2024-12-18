import React, { useReducer } from 'react';
import { produce } from 'immer';

// 使用 Immer 简化 reducer
const counterReducer = produce((draft, action) => {
  switch (action.type) {
    case 'INCREMENT':
      draft.count += 1;
      break;
    case 'DECREMENT':
      draft.count -= 1;
      break;
    case 'RESET':
      draft.count = 0;
      break;
    case 'SET':
      draft.count = action.payload;
      break;
    default:
      break;
  }
}, { count: 0 });

const ImmerReducerCounter = () => {
  // 使用 useReducer 钩子
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Immer Reducer Counter
      </h2>
      <div className="flex items-center justify-center space-x-4">
        <button 
          onClick={() => dispatch({ type: 'DECREMENT' })}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          -
        </button>
        <span className="text-xl font-semibold">{state.count}</span>
        <button 
          onClick={() => dispatch({ type: 'INCREMENT' })}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          +
        </button>
      </div>
      <div className="mt-4 text-center">
        <button 
          onClick={() => dispatch({ type: 'RESET' })}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2"
        >
          重置
        </button>
        <button 
          onClick={() => dispatch({ type: 'SET', payload: 10 })}
          className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
        >
          设置为 10
        </button>
      </div>
    </div>
  );
};

export default ImmerReducerCounter;