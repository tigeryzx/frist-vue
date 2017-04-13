<template>
    <mu-flexbox orient="vertical">
        <mu-flexbox-item order="0">
            <mu-appbar titleClass="cssCenter"
                       :title="title">
            </mu-appbar>
        </mu-flexbox-item>
        <mu-flexbox-item order="1">
            <mu-card>
                <mu-card-media :title="state.userinfo.username"
                               :subTitle="state.userinfo.des">
                    <img :src="state.userinfo.background" />
                </mu-card-media>
            </mu-card>
        </mu-flexbox-item>
    
        <mu-flexbox-item order="2">
            <mu-list>
                <mu-list-item v-for="item in state.menus"
                              :key="item.id"
                              :to="item.path"
                              :title="item.title">
                    <mu-icon slot="left"
                             :value="item.icon" :color="item.color" />
                </mu-list-item>
            </mu-list>
        </mu-flexbox-item>
    </mu-flexbox>
</template>

<style>
.cssCenter {
    text-align: center;
}
</style>

<script>
import { state, actions } from '@/store'
export default {
    name: 'home',
    data() {
        return {
            state, 
            actions,
            title:'我的小窝'
        }
    },
    computed: {
        homeTitle: function () {
            return state.userinfo.username + '的小窝';
        }
    }
}
</script>