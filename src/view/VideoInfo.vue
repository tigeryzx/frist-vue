<template>
    <div>
        <mu-flexbox>
            <mu-flexbox-item order="0" class="app-bar">
                <mu-appbar :title="视频信息" class="fixed-bar">
                    <mu-icon-button icon="chevron_left" slot="left" @click="back" />
                </mu-appbar>
            </mu-flexbox-item>
        </mu-flexbox>

        <mu-flexbox>
            <mu-flexbox-item>
                {{state.viewVideo==null?"1":"2"}}
                <mu-text-field hintText="电话号码" type="number" icon="phone" />
            </mu-flexbox-item>
        </mu-flexbox>
    </div>
</template>
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