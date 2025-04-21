import React from 'react';

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
