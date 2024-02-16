<script>
    import {onMount} from "svelte";
    export let title = "Look Here"
    let counter = 0;
    let myText = '';

    $: doubled = counter * 2;
    $: {
        console.log('Updated: ' + doubled)
    }

    onMount(function (){
       console.log('Mounted')
    });
    function increment() {
        counter++
    }

    function decrement() {
        counter === 0 ? 0 : counter--;
    }
</script>

<div>
    <input type="text" bind:value={myText}>
    <p><strong>{myText}</strong></p>
</div>

<div>
    <h1>{title}</h1>
    <p>Count: {counter} / Doubled: {doubled}</p>
    <button on:click={increment}>Increment</button>
    <button on:click={decrement}>Decrement</button>
</div>