import React from 'react';

// 参考：https://qiita.com/johnmackay150/items/88654e5064290c24a32a
export function createCtx<T>() {
  const ctx = React.createContext<T | undefined>(undefined);
  const useCtx = () => {
    const context = React.useContext(ctx);
    if (!context) {
      throw new Error('useCtx must be used within a Provider');
    }
    return context;
  };
  return [useCtx, ctx.Provider] as const;
}
