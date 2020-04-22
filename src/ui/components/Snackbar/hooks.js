import {
  useRef,
  useMemo,
  useState,
  useEffect,
  useCallback,
  useLayoutEffect,
} from 'react';

function usePortrait() {
  const mql = useMemo(() => window.matchMedia('(orientation: portrait)'), []);
  const [isPortrait, setPortrait] = useState(mql.matches);

  const handleChange = useCallback(({ matches }) => setPortrait(matches), []);

  useEffect(() => {
    mql.addEventListener('change', handleChange);
    return () => mql.removeEventListener('change', handleChange);
  }, [handleChange, mql]);

  return isPortrait;
}

function useMultiline() {
  const elementRef = useRef();
  const isPortrait = usePortrait();
  const [isMultiline, setMultiline] = useState(false);

  useLayoutEffect(() => {
    const LINE_HEIGHT = 20;
    const textHeight = elementRef.current.offsetHeight;
    setMultiline(textHeight > LINE_HEIGHT);
  }, [isPortrait]);

  return [isMultiline, elementRef];
}

export { useMultiline };
