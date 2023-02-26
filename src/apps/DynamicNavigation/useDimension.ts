import { useCallback, useLayoutEffect, useState } from "react";

export function useDimension<T extends HTMLElement>(
  absolutePositioned = false
): [number, (e: T | null) => void] {
  const [node, setNode] = useState<T | null>(null);
  const [width, setWidth] = useState(0);

  const ref = useCallback<(n: T | null) => void>((node) => {
    setNode(node);
  }, []);

  const layout = useCallback(() => {
    if (node !== null) {
      let totalAbsoluteWidth = 0;
      node.childNodes.forEach((n: any) => {
        return (totalAbsoluteWidth += n.clientWidth);
      });
      setWidth(
        absolutePositioned
          ? totalAbsoluteWidth
          : node.getBoundingClientRect().width
      );
    }
  }, [node]);

  useLayoutEffect(() => {
    layout();
    window.addEventListener("resize", layout);

    return () => {
      window.removeEventListener("resize", layout);
    };
  }, [layout]);

  return [width, ref];
}
