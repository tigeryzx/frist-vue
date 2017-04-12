<template>
     <mu-flexbox orient="vertical">
        <mu-flexbox-item order="0">
            <mu-appbar titleClass="cssCenter" :title="homeTitle">
            </mu-appbar>
        </mu-flexbox-item>
        <mu-flexbox-item order="1">
            <mu-card>
                <mu-card-header :title="userinfo.username" subTitle="这个人很懒没写下什么">
                    <mu-avatar src="../assets/images/uicon.jpg" slot="avatar"/>
                </mu-card-header>
            </mu-card>
        </mu-flexbox-item>
        
        <mu-flexbox-item order="2">
            <mu-list v-for="item in menus" :key="item.id">
                <mu-list-item :title="item.title">
                    <mu-icon slot="left" :value="item.icon"/>
                </mu-list-item>
            </mu-list>
        </mu-flexbox-item>
     </mu-flexbox>
</template>

<style>
    .cssCenter{
        text-align: center;
    }
</style>

<script>
    import { state,actions } from '@/store'
    export default{
        name:'home',
        data () {
            return {
                userinfo:state.userinfo,
                menus:state.menus
            }
        },
        computed: {
            homeTitle:function(){
                return state.userinfo.username + '的小窝';
            }
        }
    }
</script>