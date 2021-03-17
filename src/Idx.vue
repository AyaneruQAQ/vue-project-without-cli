<template>
    <div class="d">
        <!-- 双向绑定： -->
        <button @click="$emit('update:pro',pro+1)">update</button>
        <slot name="s1" :user="user">{{user.last}}</slot>
        <slot/>
    </div>
</template>
<script>
export default {
    props:['user','pro']
}
</script>
<style>
.d{
    width: 200px;
    height: 100px;
    background-color: aquamarine;
}
</style>