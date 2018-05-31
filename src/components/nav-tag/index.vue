<template>
    <h2 class="nav-tag-title">{{title}}</h2>
</template>

<script>
    export default {
        props:["title"]
    }
</script>

<style scoped>
  .nav-tag-title {
    width: 100%; height: auto; overflow: hidden;
     font-size:22px;  color: #fff;
     background:#32a220; padding:8px 10px; margin-bottom: 8px;
  }
</style>
