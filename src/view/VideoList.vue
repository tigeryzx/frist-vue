<template>
    <div>
        <mu-flexbox>
            <mu-flexbox-item order="0" class="app-bar">
                <mu-appbar :title="title" class="fixed-bar">
                    <mu-icon-button icon="chevron_left" slot="left" to="/" />
                </mu-appbar>
            </mu-flexbox-item>
        </mu-flexbox>

        <mu-flexbox>
            <mu-flexbox-item>
                <mu-grid-list>
                    <mu-grid-tile v-for="item,index in state.videoList" :key="index" :cols="2">
                            <img :src="item.image" @click="openVideoInfo(item)"/>
                        <span slot="title">{{item.title}}</span>
                        <span slot="subTitle"><b>{{item.date}}</b></span>
                        <mu-icon-button :icon="item.fav?'star':'star_border'" :touch="true" slot="action" @click="fav(item)" />
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

    if (state.pageinfo.needFristLoad) {
        actions.loadVideoListData();
    }

    export default {
        name: 'video-list',
        data() {
            return {
                title: '所有视频',
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
                actions.setViewVideo(item);
                // https://router.vuejs.org/zh-cn/essentials/navigation.html
                router.push({ name: 'videoInfo' ,params: { vid: item.id }});
            }
        }
    }

</script>