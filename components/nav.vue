<template>
  <div>

  </div>
</template>
<script>
  export default{
    data() {
      return {
          radio: '1',
          activeIndex: 'index'
        };
    },
    methods:{
      handleSelect(key, keyPath) {
          console.log(key, keyPath);
          this.$router.push('/detail')
      }
    }
  }
</script>
<style lang="less" scoped>
</style>
