<template>
    <div>
        <mu-flexbox>
            <mu-flexbox-item order="0" class="app-bar">
                <mu-appbar :title="state.videoFilter.name" class="fixed-bar">
                    <mu-icon-button icon="chevron_left" slot="left" @click="back" />
                </mu-appbar>
            </mu-flexbox-item>
        </mu-flexbox>

        <mu-flexbox>
            <mu-flexbox-item>
                <mu-grid-list>
                    <mu-grid-tile v-for="item,index in state.videoList" :key="index" :cols="2" style="height:280px;padding:5px;">
                        <img style="width:100%" :src="item.image" @click="openVideoInfo(item)" />
                        <span slot="title">{{item.title}}</span>
                        <span slot="subTitle"><b>{{item.date}}</b></span>
                        <mu-icon-button :icon="item.fav?'star':'star_border'" slot="action" />
                    </mu-grid-tile>
                </mu-grid-list>
                <mu-infinite-scroll @load="loadpage" />
            </mu-flexbox-item>
        </mu-flexbox>

    </div>
</template>

<style>
</style>
<script>
    import { state, actions } from '@/store'
    import router from '@/router/index'

    export default {
        name: 'video-list',
        data() {
            actions.setVideoFilter(this.$route.query.type, this.$route.query.name);
            return {
                state
            }
        },
        methods: {
            loadpage() {
                actions.loadVideoListData();
            },
            fav(item) {
                actions.setVideoFav(item);
            },
            openVideoInfo(item) {
                // https://router.vuejs.org/zh-cn/essentials/navigation.html
                router.push({ name: 'videoInfo', query: { vid: item.id } });
            },
            back() {
                router.go(-1);
            }
        }
    }

</script>