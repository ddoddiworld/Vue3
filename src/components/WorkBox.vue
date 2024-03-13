<template>
    <section class="workBox">
        <h2 class="mainTitle">Working</h2>
        <ul class="listWrap">
            <li class="list" v-for="todo in filteredWorkingTodos" :key="todo.id">
                <div class="topBox">
                    <span class="btn redOne"></span>
                    <span class="btn yellowOne"></span>
                </div>
                <div class="listContent poor">
                    <p class="conTitle">{{ todo.title }}</p>
                    <p class="conContent">{{ todo.body }}</p>
                    <P>{{ todo.isDone }}</P>
                </div>
                <div class="btnBox">
                    <Button>🔎</Button>
                    <Button @click="removeTodoHandler(todo)">🗑️</Button>
                    <button @click="statusHandler(todo)">✅</button>
                </div>
            </li>
        </ul>
    </section>

    <section class="workBox">
        <h2 class="mainTitle">Done</h2>
        <ul class="listWrap">
            <li class="list" v-for="todo in filteredDoneTodos" :key="todo.id">
                <div class="topBox">
                    <span class="btn redOne"></span>
                    <span class="btn yellowOne"></span>
                </div>
                <div class="listContent poor">
                    <p class="conTitle">{{ todo.title }}</p>
                    <p class="conContent">{{ todo.body }}</p>
                    <P>{{ todo.isDone }}</P>
                </div>
                <div class="btnBox">
                    <Button>🔎</Button>
                    <Button @click="removeTodoHandler(todo)">🗑️</Button>
                    <button @click="statusHandler(todo)">↩️</button>
                </div>
            </li>
        </ul>
    </section>
</template>

<!-- <template>
    <section class="workBox" v-for="todo in state.arrTodo" :key="todo.id">
        <h2 class="mainTitle">{{ todo.isDone ? "Done" : "Working"}}</h2>

        <ul class="listWrap">
            <li class="list">
                <div class="topBox">
                    <span class="btn redOne"></span>
                    <span class="btn yellowOne"></span>
                </div>
                <div class="listContent poor">
                    <p class="conTitle">{{ todo.title }}</p>
                    <p class="conContent">{{ todo.body }}</p>
                </div>
                <div class="btnBox">
                    <Button>🔎</Button>
                    <Button @click="removeTodoHandler(todo)">🗑️</Button>
                    <button @click="statusHandler(todo)">{{ todo.isDone ? "↩️" : "✅" }}</button>
                </div>
            </li>
        </ul>
    </section>
</template> -->

<script>
import store from '@/store/store';
import { computed, onMounted } from 'vue';

export default {
    name: 'WorkBox',

    setup() {
        onMounted(() => {
            console.log(store.state.todoList);
        })

        const filteredWorkingTodos = computed(() =>
            store.state.todoList.filter((item) => !item.isDone)
        );

        const filteredDoneTodos = computed(() =>
            store.state.todoList.filter((item) => item.isDone)
        );

        const removeTodoHandler = (todo) => {
            store.commit("removeTodo", todo.id);
        };

        const statusHandler = (todo) => {
            store.commit("switchTodo", todo.id);
        };

        return {
            statusHandler,
            removeTodoHandler,
            filteredWorkingTodos,
            filteredDoneTodos
        }
    }
}
</script>

<style lang="css">
@import "../styles/style.css";
</style>