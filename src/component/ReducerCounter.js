import React, { useReducer } from 'react';

// 定义 reducer 函数
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    case 'SET':
      return { count: action.payload };
    default:
      return state;
  }
};

// 初始状态
const initialState = { count: 0 };

const ReducerCounter = () => {
  // 使用 useReducer 钩子
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Reducer Counter
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

export default ReducerCounter;