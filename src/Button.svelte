<script>
    import { name } from "./store.js";
    import { createEventDispatcher, onDestroy } from "svelte";
    const dispatch = createEventDispatcher();
    const crazy = () => dispatch("crazy");
    let count = 0;
    export let someval;

    function handleClick() {
        crazy();
        count += 1;
        name.update(n => {
            //n +
            return Date.now();
        });
    }
</script>

<div>
    <div>5 {$name} PASSEDPROP: {someval}</div>
    <button on:click="{handleClick}">Clicked {count} {count === 1 ? 'time' : 'times'}</button>

</div>
