<template>
    <div class="d">
        <!-- 双向绑定： -->
        <button @click="$emit('update:pro',pro+1)">update</button>

        <slot name="s1" :user="user">{{user.last}}</slot>
        <div>{{pro}}</div>
        <!-- 父组件传slot到孙子组件 -->
        <my-child><slot/></my-child>
    </div>
</template>
<script>
import myChild from './sunchild.vue'
export default {
    props:['user','pro'],
    components:{
        myChild
    }

}
</script>
<style>
.d{
    width: 200px;
    height: 100px;
    background-color: aquamarine;
}
</style>