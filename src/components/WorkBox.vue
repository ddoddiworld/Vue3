<template>
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
                    <Button>🗑️</Button>
                    <button @click="statusHandler()">{{ todo.isDone ? "↩️" : "✅" }}</button>
                </div>
            </li>
        </ul>
    </section>
</template>

<script>
import store from '@/store/store';
import { computed, onMounted, reactive } from 'vue';

export default {
    name: 'WorkBox',

    setup() {
        const state = reactive({
            arrTodo: store.state.todoList,
        })


        const filterdTodos = computed(() => 
            state.arrTodo.filter((item) => item.isDone === store.state.isDone)
        );

        onMounted(() => {
            console.log(state.arrTodo);
        })

        const statusHandler = (todo) => {
            alert(`눌렀음: ${todo.isDone}`);
        }

        return {
            state,
            statusHandler,
            filterdTodos
        }
    }
}
</script>










<style lang="css">
@import "../styles/style.css";
</style>