<script>
    // import Counter from "./Counter.svelte";
    // import Features from "./Features.svelte";
    import "./../css/reset.css"
    import "./../css/style.css"

    let todoTitle = ''
    let todoId = 0;

    let todos = [
        {
            id: 1,
            title: "Finish Svelte screencast",
            isComplete: false,
            isEditing: false,
        },
        {
            id: 2,
            title: "Go shopping",
            isComplete: true,
            isEditing: false,
        },
        {
            id: 3,
            title: "Take over world",
            isComplete: false,
            isEditing: false,
        },
    ];

    $: remainingTodos = todos.filter((todo) => !todo.isComplete).length

    function addTodo(e) {
        e.preventDefault()
        todoId = todos.length + 1
        todos = [
            ...todos,
            {
                id: todoId,
                title: todoTitle,
                isComplete: false,
                isEditing: false,
            }
        ]

        todoTitle = ''
    }

    function deleteTodo(id) {
        todos = todos.filter((todo) => todo.id !== id)
    }
</script>


<div class="todo-app-container">
    <div class="todo-app">
        <h2>Todo App</h2>
        <form action="#" on:submit={addTodo}>
            <input
                    type="text"
                    class="todo-input"
                    placeholder="What do you need to do?"
                    bind:value = {todoTitle}
            />
        </form>
        <ul class="todo-list">
            {#each todos as todo, index(todo.id)}
                <li class="todo-item-container">
                    <div class="todo-item">
                        <input type="checkbox" bind:checked={todo.isComplete} />
                        <span class="todo-item-label" class:line-through={todo.isComplete}>{todo.title}</span>
                        <!-- <input
                          type="text"
                          class="todo-item-input"
                          value="Finish Svelte Series"
                        /> -->
                    </div>
                    <button class="x-button" on:click={deleteTodo(todo.id)}>
                        <svg
                                class="x-button-icon"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                        >
                            <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </li>

                {/each}


        </ul>
        <div class="check-all-container">
            <div>
                <div class="button">Check All</div>
            </div>
            <span>{remainingTodos} items remaining</span>
        </div>

        <div class="other-buttons-container">
            <div>
                <button class="button filter-button filter-button-active"> All </button>
                <button class="button filter-button">Active</button>
                <button class="button filter-button">Completed</button>
            </div>
            <div>
                <button class="button">Clear completed</button>
            </div>
        </div>
    </div>
</div>

