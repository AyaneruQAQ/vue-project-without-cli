<template>
    <div>
        <div id="hello">{{mynum}}</div>
        <test :user="Puser" :pro.sync="mynum">
            <template #s1="{user}">
                <!-- #:v-slot的缩写   =：作用域插槽-->
                {{user.first}}
            </template>
            hello{{we}}
        </test>
    </div>
</template>
<script>
import test from './Idx.vue'
export default {
    data(){
        return {
            we:'hello',
            Puser:{
                last:"luo",
                first:"lizz"
            },
            mynum:1
        }
    },
    components:{
        test
    }
}
</script>
<style>
#hello{
    color: aquamarine;
    font-size: 200px;
}
</style>