import { useRef } from 'react';
import { useUnmount } from 'react-use';

import { fetchSilentRefresh } from './fetchSilentRefresh';

export function useRefreshToken() {
  const ref = useRef(null);

  useUnmount(stop);

  function stop() {
    clearTimeout(ref.current);
  }

  function start(timeout) {
    return new Promise(resolve => {
      ref.current = setTimeout(() => resolve(fetchSilentRefresh()), timeout);
    });
  }

  function restart(timeout) {
    stop();
    return start(timeout);
  }

  return { start, stop, restart };
}
