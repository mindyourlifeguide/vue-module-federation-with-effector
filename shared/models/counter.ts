import { createEvent, createStore, sample } from "effector";
import { createFactory, invoke } from "@withease/factories";
import { debug } from "patronum";

export const createCounter = createFactory(() => {
  const $counter = createStore(0);

  const incrementEv = createEvent();
  const decrementEv = createEvent();

  sample({
    clock: incrementEv,
    source: $counter,
    fn: (counter) => counter + 1,
    target: $counter,
  });

  sample({
    clock: decrementEv,
    source: $counter,
    fn: (counter) => counter - 1,
    target: $counter,
  });

  debug({
    $counter,
    incrementEv,
    decrementEv,
  });

  return {
    $counter,
    incrementEv,
    decrementEv,
  };
});

export const counter = invoke(createCounter);
