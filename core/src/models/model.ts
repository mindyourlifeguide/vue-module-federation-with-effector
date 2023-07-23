import {createEvent, createStore, sample} from "effector";
import {debug} from "patronum";

export const $counter = createStore(0)
export const incrementEv = createEvent()
export const decrementEv = createEvent()

sample({
    clock: incrementEv,
    source: $counter,
    fn: (counter)=> counter + 1,
    target: $counter
})

sample({
    clock: decrementEv,
    source: $counter,
    fn: (counter)=> counter - 1,
    target: $counter
})

debug({
    $counter,
    incrementEv,
    decrementEv
})

 const counter = {
    $counter,
    incrementEv,
    decrementEv
}
export default counter
