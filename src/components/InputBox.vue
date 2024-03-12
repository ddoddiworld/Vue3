<template>
    <section class="inputBox">
        <div class="topBox">
            <span class="btn redOne"></span>
            <span class="btn yellowOne"></span>
        </div>

        <div class="bodyBox">
            <div class="inputBoxTitle">
                <p class="mainTitle roboto">Title</p>
                <input type="text" class="inputTitle poor"  placeholder="제목을 입력해 주세요.">
            </div>
            <div class="inputBoxContent">
                <p class="miniTitle roboto">Content</p>
                <textarea class="inputTextArea poor" placeholder="내용을 입력해 주세요."></textarea>
            </div>
        </div>

        <div class="btnBox">
            <button>
                +
            </button>
        </div>
    </section>
</template>

<script>
export default {
    name: 'InPutBox',
}
</script>

<style lang="css">
    @import "../styles/style.css";
</style>