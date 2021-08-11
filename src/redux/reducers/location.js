const initialState = {
  pathname: '/',
  type: 'HOME',
  payload: { param: 'url' },
  prev: {
    pathname: '',
    type: '',
    payload: {},
  },
  kind: undefined,
  routesMap: {
    HOME: '/',
    ADMIN: '/admin',
    NOTFOUND: '/404',
  },
};

export default function locationReducer(state = initialState, action = {}) {
  if (state.routesMap[action.type]) {
    return {
      pathname: action.meta.location.current.pathname,
      type: action.type,
      payload: { ...action.payload },
      prev: action.meta.location.prev,
      kind: action.meta.location.kind,
      hasSSR: state.hasSSR,
      routesMap: state.routesMap,
    };
  }

  return state;
}
