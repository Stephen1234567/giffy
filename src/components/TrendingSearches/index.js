import React, { Suspense } from "react";
import useNearScreen from "hooks/useNearScreen";
import Spinner from "components/Spinner";

const Category = React.lazy(() => import("components/Category"));

export default function LazyTranding() {
  const { show, elementRef } = useNearScreen();

  return (
    <div ref={elementRef}>
      <Suspense fallback={<Spinner />}>
        {show ? <Category name="Panda" options={["panda"]} /> : <Spinner />}
      </Suspense>
    </div>
  );
}
