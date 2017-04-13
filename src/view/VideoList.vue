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
                        <img :src="item.image" />
                        <span slot="title">{{item.title}}</span>
                        <span slot="subTitle"><b>{{item.date}}</b></span>
                        <mu-icon-button icon="star_border" slot="action" />
                    </mu-grid-tile>
                </mu-grid-list>
                <mu-infinite-scroll @load="actions.loadVideoListData"/>
            </mu-flexbox-item>
        </mu-flexbox>

    </div>
</template>
<script>
    import { state, actions } from '@/store'
    export default {
        name: 'video-list',
        data() {
            return {
                title: '所有视频',
                state
            }
        },
        methods: {
            actions
        }
    }

</script>