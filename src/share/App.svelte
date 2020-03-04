<script>
    import { Router, Route, navigate } from "svelte-routing";
    import FileTransfer from "./views/FileTransfer.svelte";
    import Rooms from "./views/Rooms.svelte";
    import NewUser from "./views/NewUser.svelte";
    import { onMount } from "svelte";
    import io from "socket.io-client";

    let data = JSON.parse(localStorage.getItem("blaze")) || { user: null };
    let client = {
        ...data.user
    };
    const P2P = require("socket.io-p2p");

    let socket;
    let registered = Boolean(window.localStorage.getItem("blaze"));

    function handleOffline() {
        if (navigator.onLine) return;

        // Redirect user to home page when user goes offline
        navigate("/app", { replace: true });
    }

    let worker = new Worker("/worker.js");

    const onClickme = () => {
        console.info("Console --- LCICK");

        worker.postMessage("test");
        socket.emit("test", { test: 52 });
    };

    function socketConnect(room, username) {
        return io("http://localhost:3030", {
            query: `room=${room}&user=${username}`
        });
    }

    onMount(() => {
        //
        //
        worker.addEventListener("test", evt => {
            /**
             * Pre file transfer DOM changes are made here
             * Set the sender in visualizer
             */
            console.info("Console --- ev", evt);
        });

        /**
         * Error from the worker
         */
        worker.addEventListener("error", err => {
            console.log("Error in compressing the files", err);
        });
        socket = new P2P(
            socketConnect("5252", client.name),
            {
                peerOpts: {
                    config: {
                        iceServers: [
                            { urls: "stun:stun.l.google.com:19302" },
                            { urls: "stun:global.stun.twilio.com:3478?transport=udp" },
                            { urls: "stun:stun.services.mozilla.com" },
                            {
                                urls: "turn:numb.viagenie.ca",
                                username: "akash.hamirwasia@gmail.com",
                                credential: "6NfWZz9kUCPmNbe"
                            }
                        ]
                    }
                }
            },
            () => {
                /**
                 * Connection upgrded to WebRTC
                 */
                console.info("Console --- CWTAWTATPO");
            }
        );

        /**
         * A user joins the room
         */
        socket.on("test", users => {
            /**
             * Online users list is rendered
             */
            console.info("Console --- ", users);
        });
        /**
         * Component being unmounted
         */
        // return () => {
        //     socket.disconnect();
        // };
    });
</script>

<svelte:window on:offline="{handleOffline}" />
<div>
    <div on:click="{onClickme}">TEST</div>
    <Router>
        {#if !registered}
            <NewUser on:registered="{() => (registered = true)}" />
        {:else}
            <Rooms />
        {/if}
        <!-- /app/t/:room-name - Joined a room -->
        <Route path="/app/t/:room">
            {#if !registered}
                <NewUser on:registered="{() => (registered = true)}" />
            {:else}
                <FileTransfer />
            {/if}
        </Route>

    </Router>
</div>
