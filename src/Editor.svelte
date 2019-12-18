<script>
    import { name } from "./store.js";
    import { createEventDispatcher, onDestroy } from "svelte";
    const dispatch = createEventDispatcher();
    const crazy = () => dispatch("crazy");
    let count = 0;
    export let someval;
    let localS = localStorage.getItem("EDIT");
    localS = localS !== null && localS.trim() !== "" ? localS : `<p>AWESOME<b>SAdasd</b></p>`;
    let value = localS;

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
    <div
        style="min-height: 300px; padding: 50px;"
        contenteditable="true"
        autofocus
        on:keyup="{CC => {
            console.info('Console --- CC', CC.target.innerHTML);
            localStorage.setItem('EDIT', CC.target.innerHTML);
        }}"
    >
        {@html value}
    </div>
</div>
