import { writable, readable, derived } from "svelte/store";

export const name = writable("ANG");
let word = "TIME IS:";
//
// const unsubscribe = name.subscribe(value => {
//     name_value = value;
// });
//
// export let name_value;

export const nameWithTime = readable(new Date(), function start(set) {
    const interval = setInterval(() => {
        set(word + new Date());
    }, 1000);

    return function stop() {
        clearInterval(interval);
    };
});

export const elapsed = derived(nameWithTime, $name => $name + Date.now());
/**
function createCount() {
	const { subscribe, set, update } = writable(0);

	return {
		subscribe,
		increment: () => update(n => n + 1),
		decrement: () => update(n => n - 1),
		reset: () => set(0)
	};
}

export const count = createCount();*/
