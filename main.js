import App from "./src/App.svelte";

const app = new App({
    target: document.body,
    props: {
        name: "world"
    }
});

/**
 * Register service worker in the /app scope
 */
if (navigator.serviceWorker) {
    navigator.serviceWorker.register("/sw.js", { scope: "/app" }).then(() => {
        console.log("SW registered");
    });
}

window.app = app;

export default app;
