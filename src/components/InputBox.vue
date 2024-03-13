<template>
    <section class="inputBox">
        <div class="topBox">
            <span class="btn redOne"></span>
            <span class="btn yellowOne"></span>
        </div>

        <div class="bodyBox">
            <div class="inputBoxTitle">
                <p class="mainTitle roboto">Title</p>
                <input v-model="title" type="text" class="inputTitle poor" placeholder="제목을 입력해 주세요.">
            </div>
            <div class="inputBoxContent">
                <p class="miniTitle roboto">Content</p>
                <textarea v-model="body" class="inputTextArea poor" placeholder="내용을 입력해 주세요."></textarea>
            </div>
        </div>

        <div class="btnBox">
            <button @click="onSubmitHandler()">+</button>
        </div>
    </section>
</template>

<script>
import { ref } from 'vue';
import store from "@/store/store";

export default {
    name: 'InPutBox',
    
    setup(){
        // title 값
        const title = ref('');
        // content 값
        const body = ref('');

        // todo 추가 버튼
        const onSubmitHandler = () => {
            if (!title.value || !body.value) {
                alert("앗! 제목과 내용을 모두 입력해 주세요🤔");
                return false;
            } else {
                const newTodo = {
                    id: Math.random().toString(36).substring(2, 16),
                    title: title.value,
                    body: body.value,
                    isDone: false,
                };

                store.commit("addTodo", newTodo);
                
                title.value = '';
                body.value = '';
            }
        }

        return {
            title,
            body,
            onSubmitHandler,
        };
    },
};
</script>

<style lang="css">
    @import "../styles/style.css";
</style>