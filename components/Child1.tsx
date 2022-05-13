import React, { forwardRef, useImperativeHandle, useRef } from "react";

import Child2 from "./Child2";

const Child1 = forwardRef((props, ref) => {
  const child2Ref = useRef<{
    sayHello: () => void;
  }>();

  useImperativeHandle(ref, () => ({
    sayHello: () => {
      alert("Hello from child 1");

      child2Ref.current!.sayHello();
    },
  }));

  return (
    <div>
      This is child 1
      <Child2 ref={child2Ref} />
    </div>
  );
});

Child1.displayName = "Child1";

export default Child1;
