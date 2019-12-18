<style lang="less" type="text/less">
    @green: orange;
    main {
        h1 {
            background: purple;
        }
        background-color: @green;
        font-family: sans-serif;
        text-align: center;
    }
</style>

<script>
    import Button from "./Button.svelte";
    import "./test.less";
    import { name, nameWithTime, elapsed } from "./store.js";
    import { beforeUpdate, afterUpdate } from "svelte";
    let height = 55;
    beforeUpdate(() => {
        height = Math.random() > 0.67 ? 55 : 44;
    });
</script>

<main>
    <h1>Hello CodeSanss52dbox</h1>
    <div class="heightAdjust" style="height:{height}px">{height}</div>
    <h5>ELAPSE:{$elapsed}</h5>
    <h3>GLOBAL {$nameWithTime} -- {$name}</h3>
    <h2>Start editing to see some magic happen!</h2>
    <button
        on:click="{e => {
            e.preventDefault();
            console.log('FUCKYEA');
        }}"
    >
        AWESOME
    </button>
    <a
        href="#"
        on:click="{e => {
            e.preventDefault();
            console.log('FUCKYEA');
        }}"
    >
        AWESOME
    </a>
    <Button
        someval="5252"
        on:crazy="{() => {
            console.log('CRAZY');
        }}"
    />
</main>
