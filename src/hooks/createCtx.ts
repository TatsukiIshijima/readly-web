import React from 'react';

export function createCtx<T>() {
  const ctx = React.createContext<T | undefined>(undefined);
  const useCtx = () => {
    const c = React.useContext(ctx);
    if (!c) {
      throw new Error('useCtx must be used within a Provider');
    }
    return c;
  };
  return [useCtx, ctx.Provider] as const;
}
