<template>
    <HeaderWrap />
    <InputBox />
    <WorkBox/>
</template>

<script>
import HeaderWrap from '@/components/HeaderWrap';
import InputBox from '@/components/InputBox';
import WorkBox from '@/components/WorkBox.vue';

export default {
  name: 'MainPage',

  components: {
    HeaderWrap,
    InputBox,
    WorkBox,
  },
};
</script>