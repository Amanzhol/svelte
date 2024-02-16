<script>
    let flag = true

    function toggleFlag() {
        flag = !flag
    }

    let units = [
        {
            name:'First',
            title: 'Soldier',
            id: 1
        },
        {
            name: 'Second',
            title: 'Sergeant',
            id: 2
        },
        {
            name: 'Third',
            title: 'Captain',
            id: 3
        }
    ]

    let unit_index = 1

    function destroyUnit() {
        units.splice(unit_index,1)
        units = units
    }
</script>

<div>
    <h1>Features</h1>
    <p>
        {#if flag}
            <strong class="red">Flag = True</strong>
        {:else}
            <strong class="green">Flag = False</strong>
        {/if}
    </p>
    <button on:click={toggleFlag}>Change Flag</button>
</div>

<div>
    <h1>Each Statement</h1>
    <ul>
        {#each units as unit, i(unit.id)}
            <li>{i}: {unit.name}, {unit.title}</li>
        {/each}
    </ul>
    <div>
        <button on:click = {destroyUnit}>Destroy specific element</button>
        <input type="text" bind:value={unit_index}>
        <p>Unit Index: {unit_index} </p>
    </div>

</div>

<style>
    .red {
        color: red;
    }
    .green {
        color: green;
    }
</style>