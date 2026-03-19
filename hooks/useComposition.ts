import { useRef, useCallback } from "react";

export interface UseCompositionReturn<
  T extends HTMLInputElement | HTMLTextAreaElement,
> {
  onCompositionStart: React.CompositionEventHandler<T>;
  onCompositionEnd: React.CompositionEventHandler<T>;
  onKeyDown: React.KeyboardEventHandler<T>;
  isComposing: () => boolean;
}

export interface UseCompositionOptions<
  T extends HTMLInputElement | HTMLTextAreaElement,
> {
  onKeyDown?: React.KeyboardEventHandler<T>;
  onCompositionStart?: React.CompositionEventHandler<T>;
  onCompositionEnd?: React.CompositionEventHandler<T>;
}

export function useComposition<
  T extends HTMLInputElement | HTMLTextAreaElement = HTMLInputElement,
>(options: UseCompositionOptions<T> = {}): UseCompositionReturn<T> {
  const {
    onKeyDown: originalOnKeyDown,
    onCompositionStart: originalOnCompositionStart,
    onCompositionEnd: originalOnCompositionEnd,
  } = options;

  const composingRef = useRef(false);

  const onCompositionStart = useCallback((e: React.CompositionEvent<T>) => {
    composingRef.current = true;
    originalOnCompositionStart?.(e);
  }, [originalOnCompositionStart]);

  const onCompositionEnd = useCallback((e: React.CompositionEvent<T>) => {
    setTimeout(() => {
      composingRef.current = false;
    });
    originalOnCompositionEnd?.(e);
  }, [originalOnCompositionEnd]);

  const onKeyDown = useCallback((e: React.KeyboardEvent<T>) => {
    if (composingRef.current && (e.key === "Escape" || (e.key === "Enter" && !e.shiftKey))) {
      e.stopPropagation();
      return;
    }
    originalOnKeyDown?.(e);
  }, [originalOnKeyDown]);

  const isComposing = useCallback(() => composingRef.current, []);

  return {
    onCompositionStart,
    onCompositionEnd,
    onKeyDown,
    isComposing,
  };
}
