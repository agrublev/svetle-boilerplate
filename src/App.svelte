<style lang="less" type="text/less">
    @green: orange;
    main {
        h1 {
            background: purple;
        }
        background-color: @green;
        font-family: "Adobe Clean", sans-serif;
    }
</style>

<script>
    import Editor from "./Editor.svelte";
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
    <Editor />
</main>
