<template>
    <section class="workBox">
        <h2 class="mainTitle">{isDone ? "Done" : "Working"}</h2>

        <ul class="listWrap">
            <li class="list">
                <div class="topBox">
                    <span class="btn redOne"></span>
                    <span class="btn yellowOne"></span>
                </div>
                <div class="listContent poor">
                    <p class="conTitle">제목입니당 아마도요</p>
                    <p class="conContent">내용용</p>
                </div>
                <div class="btnBox">
                    <Button>🔎</Button>
                    <!-- <Button>🗑️</Button>
                    <Button>{isDone ?  "↩️" :  "✅"}</Button> -->
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