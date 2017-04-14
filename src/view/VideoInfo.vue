<template>
    <div>
        <mu-flexbox>
            <mu-flexbox-item order="0" class="app-bar">
                <mu-appbar :title="state.viewVideo.title" class="fixed-bar">
                    <mu-icon-button icon="chevron_left" slot="left" @click="back" />
                </mu-appbar>
            </mu-flexbox-item>
        </mu-flexbox>

        <mu-flexbox>
            <mu-flexbox-item style="padding-right:5px;">
                <mu-text-field hintText="FTP连接" type="text" icon="link" fullWidth />
            </mu-flexbox-item>
        </mu-flexbox>

        <mu-flexbox>
            <mu-flexbox-item>
                <mu-paper class="cssImageWarp" :zDepth="1">
                    <img :src="state.viewVideo.image" class="cssImage"/>
                </mu-paper>
            </mu-flexbox-item>
        </mu-flexbox>
    </div>
</template>

<style>
    .cssImage{
        width: 100%;
    }
    .cssImageWarp{
        width: 98%;
    }
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
                state
            }
        },
        methods: {
            back(){
                router.go(-1);
            }
        }
    }

</script>