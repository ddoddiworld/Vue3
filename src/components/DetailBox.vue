<template>
    <section class="detailBox">
        <div class="topBox">
            <span class="btn redOne"></span>
            <span class="btn yellowOne"></span>
            <span class=todoIdInfo>{{ filteredTodo.id }}</span>
        </div>
        <div class="listContent poor">
            <p class="conTitle">{{ filteredTodo.title }}</p>
            <p class="conContent">{{ filteredTodo.body }}</p>
        </div>
        <div class="btnBox">
            <Button @click="$router.push( `/`)">🏠</Button>
        </div>
    </section>
</template>

<script>
import store from '@/store/store';
import { onMounted, ref, computed } from 'vue';

export default {
    name: 'DetailBox',

    setup(props, { route }){
        const todoId = ref(null);


        onMounted(() => {
            console.log("???")
            todoId.value = route.params.id;

            store.dispatch('fetchTodoDetails', todoId.value);
        });

        const filteredTodo = computed(() => {
            return store.state.todoList.find((item) => item && item.id === todoId.value);
        });

        return {
            filteredTodo,
        }
    }
}
</script>

<style lang="css">
    @import "../styles/style.css";
</style>