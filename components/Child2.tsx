import React, { forwardRef, useImperativeHandle, useRef } from "react";

import Child3 from "./Child3";

const Child2 = forwardRef((props, ref) => {
  const child3Ref = useRef<{
    sayHello: () => void;
  }>();

  useImperativeHandle(ref, () => ({
    sayHello: () => {
      alert("Hello from child 2");

      child3Ref.current!.sayHello();
    },
  }));

  return (
    <div>
      This is child 1
      <Child3 ref={child3Ref} />
    </div>
  );
});

Child2.displayName = "Child2";

export default Child2;
