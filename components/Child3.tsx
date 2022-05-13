import React, { forwardRef, useImperativeHandle } from "react";

const Child3 = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    sayHello: () => alert("Hello from child 3"),
  }));

  return <div>This is child 3</div>;
});

Child3.displayName = "Child3";

export default Child3;
