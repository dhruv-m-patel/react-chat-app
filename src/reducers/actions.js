import { RSAA } from 'redux-api-middleware';

export function generateRequest({ body, ...options }) {
  return {
    [RSAA]: {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      body: body && JSON.stringify(body),
      ...options,
    },
  };
}
