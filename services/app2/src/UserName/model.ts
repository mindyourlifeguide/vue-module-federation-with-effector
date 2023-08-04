import { createEvent, createStore, sample } from "effector";
// or
import { reset } from "patronum/reset";
import { createFactory, invoke } from "@withease/factories";
import { debug } from "patronum";

export const createUserName = createFactory(() => {
  const $name = createStore("Alex");
  const resetNameEv = createEvent();
  const setNameEv = createEvent<string>();

  sample({
    clock: setNameEv,
    target: $name,
  });

  reset({
    clock: resetNameEv,
    target: $name,
  });

  debug({
    $name,
    setNameEv,
    resetNameEv,
  });

  return {
    $name,
    setNameEv,
    resetNameEv,
  };
});

export const user = invoke(createUserName);
