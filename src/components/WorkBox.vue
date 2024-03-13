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
                    <P>{{  todo.isDone }}</P>
                </div>
                <div class="btnBox">
                    <Button>🔎</Button>
                    <Button>🗑️</Button>
                    <button @click="statusHandler()">✅</button>
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
                    <P>{{  todo.isDone }}</P>
                </div>
                <div class="btnBox">
                    <Button>🔎</Button>
                    <Button>🗑️</Button>
                    <button @click="statusHandler()">↩️</button>
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
                    <Button>🗑️</Button>
                    <button @click="statusHandler()">{{ todo.isDone ? "↩️" : "✅" }}</button>
                </div>
            </li>
        </ul>
    </section>
</template> -->

<script>
import store from '@/store/store';
import { computed, onMounted, reactive } from 'vue';

export default {
    name: 'WorkBox',

    setup() {
        const state = reactive({
            arrTodo: store.state.todoList,
        })

        onMounted(() => {
            console.log(state.arrTodo);
        })

        const filteredWorkingTodos = computed(() =>
            state.arrTodo.filter((item) => !item.isDone)
        );

        const filteredDoneTodos = computed(() =>
            state.arrTodo.filter((item) => item.isDone)
        );

        const statusHandler = (todo) => {
            //  state.arrTodo 을 돌려서 isDone 값만 출력해보기
            todo.isDone = !todo.isDone;
            alert(`눌렀음: ${todo.isDone}`);
        }

        return {
            state,
            statusHandler,
            filteredWorkingTodos,
            filteredDoneTodos
        }
    }
}
</script>

<style lang="css">
@import "../styles/style.css";
</style>