<template>
    <div>
        <mu-flexbox>
            <mu-flexbox-item order="0" class="app-bar">
                <mu-appbar title="收藏列表" class="fixed-bar">
                    <mu-icon-button icon="chevron_left" slot="left" @click="back" />
                </mu-appbar>
            </mu-flexbox-item>
        </mu-flexbox>

        <mu-flexbox>
            <mu-flexbox-item style="padding:5px;">
                <mu-text-field fullWidth hintText="请输入收藏夹名称" v-model="inputFavName" />
                <mu-raised-button label="保存" @click="saveFav" fullWidth primary/>
            </mu-flexbox-item>
        </mu-flexbox>


        <mu-flexbox>
            <mu-flexbox-item>
                <mu-list>
                    <mu-sub-header>已存在的收藏夹</mu-sub-header>
                    <mu-list-item v-for="item,index in state.favList" 
                    :key="index" 
                    :title="item.categoryName" 
                    :describeText="'共'+item.videoCount+'个收藏'">
                        <mu-avatar icon="folder" slot="leftAvatar" />
                        <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
                            <mu-menu-item title="编辑" @click="setEditFav(item)" />
                            <mu-menu-item title="删除" @click="deleteFav(index)" />
                        </mu-icon-menu>
                    </mu-list-item>
                </mu-list>
            </mu-flexbox-item>
        </mu-flexbox>

    </div>
</template>

<script>
    import { state, actions } from '@/store'
    import router from '@/router/index'

    export default {
        name: 'fav-list',
        data() {
            return {
                state,
                inputFavName:''
            }
        },
        methods: {
            back() {
                router.go(-1);
            },
            deleteFav(index){
                actions.removeFav(index);
            },
            setEditFav(item){
                actions.setEditFav(item);
                this.inputFavName = item.categoryName;
            },
            saveFav(){
                actions.saveFav(this.inputFavName);
                this.inputFavName = "";
            }
        }
    }

</script>