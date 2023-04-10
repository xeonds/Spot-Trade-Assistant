<template>
  <section class="marquee-wrap">
    <div class="marquee" ref="marquee" :style="{ animationDuration: duration }">
      <span class="text-item" v-for="(item, index) of data" :key="index">{{
        item
      }}</span>
      <span
        class="text-item"
        v-for="(item, index) of data"
        :key="`copy-${index}`"
        >{{ item }}</span
      >
    </div>
  </section>
</template>

<script lang="ts" setup>
let marquee = ref()
let data = reactive(['通知:正式/试用用户、试用到期日为2023年5月21日…'])
let duration = ref('')
let speed = 50
onMounted(() => {
  duration.value = marquee.value.getBoundingClientRect().width / speed + 's'
})
</script>

<style lang="less" scoped>
// 自行使用 px2rem，这部分不讲述

.marquee-wrap {
  position: relative;
  overflow: hidden;

  &::after {
    content: '0';
    opacity: 0;
  }
}

.marquee {
  position: absolute;
  font-size: 0;
  white-space: nowrap;
  animation-name: marquee;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.text-item {
  margin-right: 24px;
  font-size: 2vh;

  /* 解决Font Boosting */
  text-size-adjust: none;
  // max-height: 999px; //如果上面的依然未解决问题就加上这句吧
}

@keyframes marquee {
  to {
    transform: translateX(-50%);
  }
}
</style>
