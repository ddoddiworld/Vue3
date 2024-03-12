<template>
    <section class="workBox">
        <h2 class="mainTitle">Working</h2>
        <ul class="listWrap">
            <li v-for="todo in $store.state.todoList" :key="todo.id" class="list">
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
                    <Button>✅</Button>
                </div>
            </li>
        </ul>
    </section>

    <section class="workBox">
        <h2 class="mainTitle">Done</h2>
        <ul class="listWrap">
            <li v-for="todo in $store.state.todoList" :key="todo.id" class="list">
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
                    <Button>↩️</Button>
                </div>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    name: 'WorkBox'
}
</script>

<style lang="css">
@import "../styles/style.css";
</style>