<template>
    <!-- todo 진행 중 -->
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
                </div>
                <div class="btnBox">
                    <Button @click="$router.push({ name: 'detail', params: {id: todo.id }})">🔎</Button>
                    <Button @click="removeTodoHandler(todo)">🗑️</Button>
                    <button @click="statusHandler(todo)">✅</button>
                </div>
            </li>
        </ul>
    </section>

    <!-- todo 완료 -->
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
                </div>
                <div class="btnBox">
                    <Button @click="$router.push({ name: 'detail', params: {id: todo.id }})">🔎</Button>
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

        /**
         * * filteredWorkingTodos
         * @description 진행 중인 todo 리스트들의 상태 변화를 감지해서 실시간 반영 할 수 있도록 함 (computed)
         */
        const filteredWorkingTodos = computed(() =>
            store.state.todoList.filter((item) => !item.isDone)
        );

        /**
         * * filteredDoneTodos
         * @description 완료된 todo 리스트들의 상태 변화를 감지해서 실시간 반영 할 수 있도록 함 (computed)
         */
        const filteredDoneTodos = computed(() =>
            store.state.todoList.filter((item) => item.isDone)
        );

        /**
         * * removeTodoHandler
         * @description todo 제거
         */
        const removeTodoHandler = (todo) => {
            if (confirm("[❓] 삭제 할까요?")) {
                store.commit("removeTodo", todo.id);
            } else {
                return false;
            }
        };

        /**
         * * statusHandler
         * @description todo 상태 변경
         */
        const statusHandler = (todo) => {
            if (confirm("[❓] 상태를 변경할까요?")) {
                store.commit("switchTodo", todo.id);
            } else {
                return false;
            }
        };

        return {
            statusHandler,
            removeTodoHandler,
            filteredWorkingTodos,
            filteredDoneTodos,
        }
    }
}
</script>

<style lang="css">
@import "../styles/style.css";
</style>