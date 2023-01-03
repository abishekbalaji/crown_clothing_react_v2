export const loggerMiddleware = (store) => (next) => (action) => {
  const { type, payload } = action;
  const firstState = store.getState();
  next(action);
  const nextState = store.getState();
  console.log(type, payload);
  console.log(firstState, nextState);
};
