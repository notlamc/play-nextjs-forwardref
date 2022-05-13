import type { NextPage } from "next";

import { useRef } from "react";

import Child1 from "../components/Child1";

const HomePage: NextPage = () => {
  const child1Ref = useRef<{
    sayHello: () => void;
  }>();

  return (
    <div>
      <Child1 ref={child1Ref} />

      <button onClick={() => child1Ref.current!.sayHello()}>Invoke</button>
    </div>
  );
};

export default HomePage;
