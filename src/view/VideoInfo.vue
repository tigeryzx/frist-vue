<template>
    <div>
        <mu-flexbox>
            <mu-flexbox-item order="0" class="app-bar">
                <mu-appbar :title="state.viewVideo.title" class="fixed-bar">
                    <mu-icon-button icon="chevron_left" slot="left" @click="back" />
                    <mu-icon-button :icon="state.viewVideo.fav?'star':'star_border'" slot="right" @click="openBottomSheet" />
                </mu-appbar>
            </mu-flexbox-item>
        </mu-flexbox>

        <mu-flexbox>
            <mu-flexbox-item style="padding:5px;">
                <mu-text-field hintText="FTP连接" type="text" icon="link" fullWidth />
            </mu-flexbox-item>
        </mu-flexbox>

        <mu-flexbox>
            <mu-flexbox-item>
                <mu-paper class="cssImageWarp" :zDepth="1">
                    <img :src="state.viewVideo.image" class="cssImage" />
                    <div class="cssCorveBtn">
                        <mu-icon-button icon="photo_album" style="color:white;opacity: 0.8" />
                    </div>
                </mu-paper>
            </mu-flexbox-item>
        </mu-flexbox>

        <mu-flexbox>
            <mu-flexbox-item style="padding:5px;">
                <mu-raised-button label="删除视频" class="demo-raised-button" secondary fullWidth/>
            </mu-flexbox-item>
        </mu-flexbox>

        <mu-bottom-sheet :open="bottomSheet" @close="closeBottomSheet">
            <mu-list style="max-height: 300px;">
                <mu-list-item title="添加新收藏" @click="open">
                    <mu-icon slot="left" value="favorite" color="red" />
                </mu-list-item>
                <mu-list-item v-for="item,index in state.favList" :key="index" :title="item.categoryName" @click="closeBottomSheet">
                    <mu-icon slot="left" value="star_border" />
                </mu-list-item>
            </mu-list>
        </mu-bottom-sheet>

        <mu-dialog :open="dialog" title="添加收藏夹" @close="close">
            <mu-flexbox>
                <mu-flexbox-item style="padding:5px;">
                    <mu-text-field fullWidth hintText="请输入收藏夹名称" v-model="inputFavName" />
                </mu-flexbox-item>
            </mu-flexbox>
            <mu-flat-button slot="actions" @click="close" primary label="取消" />
            <mu-flat-button slot="actions" primary @click="saveFav" label="确定" />
        </mu-dialog>
    </div>
</template>

<style>
    .cssImage {
        width: 100%;
        padding: 5px;
    }


    .cssCorveBtn {
        width: 48px;
        height: 48px;
        position: absolute;
        left: 0px;
        top: 0px;
        z-index: 100;
        margin: 5px;
    }

    .cssImageWarp {
        position: relative;
        width: 95%;
        margin: 10px;
    }
</style>
<script>
    import { state, actions } from '@/store'
    import router from '@/router/index'

    export default {
        name: 'video-list',
        data() {
            actions.setViewVideo(this.$route.query.vid);
            return {
                state,
                bottomSheet: false,
                dialog: false,
                inputFavName: ''
            }
        },
        methods: {
            back() {
                router.go(-1);
            },
            closeBottomSheet() {
                this.bottomSheet = false
            },
            openBottomSheet() {
                this.bottomSheet = true
            },
            open() {
                this.dialog = true
            },
            close() {
                this.dialog = false
            },
            saveFav() {
                actions.saveFav(this.inputFavName);
                this.inputFavName = "";
                this.dialog = false;
            }
        }
    }

</script>