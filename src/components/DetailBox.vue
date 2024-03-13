<template>
    <section class="detailBox">
        <div class="topBox">
            <span class="btn redOne"></span>
            <span class="btn yellowOne"></span>
            <span class=todoIdInfo>{{ todo.id }}</span>
        </div>
        <div class="listContent poor">
            <p class="conTitle">{{ todo.title }}</p>
            <p class="conContent">{{ todo.body }}</p>
        </div>
        <div class="btnBox">
            <Button @click="$router.push( `/`)">🏠</Button>
        </div>
    </section>
</template>

<script>
import store from '@/store/store';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

export default {
    name: 'DetailBox',

    setup(){
        const todo = ref({});
        const route = useRoute();
        
        onMounted(() => {
            const todoId = route.params.id;
            console.log(`todo id 잘 가져왔니? ${todoId}`)
            todo.value = store.state.todoList.find(item => item.id === todoId);
        });

        return {
            todo
        }
    }
}
</script>

<style lang="css">
    @import "../styles/style.css";
</style>