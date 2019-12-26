<script>
    let me = "great";
</script>

<svelte:options tag="my-element" />

<div>
    <p>Some content between header and footer</p>
    <h1>Hello</h1>
    <slot name="header">No header was provided</slot>
    <slot name="footer">No header was provided</slot>
</div>
