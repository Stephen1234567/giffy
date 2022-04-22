import { useState, useEffect, useRef } from "react";

export default function useNearScreen({
  distance = "100px",
  externalRef,
  once = true,
} = {}) {
  const [show, setShow] = useState(false);
  const elementRef = useRef();

  useEffect(function () {
    const element = externalRef ? externalRef.current : elementRef.current;
    const onChange = (entries, observer) => {
      const el = entries[0];
      if (el.isIntersecting) {
        setShow(true);
        once && observer.disconnet();
      } else {
        !once && setShow(false);
      }
    };
    const observer = new IntersectionObserver(onChange, {
      rootMargin: distance,
    });
    if (element) observer.observe(element);

    return () => observer.disconnect();
  });

  return { show, elementRef };
}
