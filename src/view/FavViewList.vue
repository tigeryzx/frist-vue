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
            <mu-flexbox-item>
                <mu-list>
                    <mu-list-item v-for="item,index in state.favList" :to="{path:'/VideoList',query:{type:item.id,name:item.categoryName}}"
                    :key="index" 
                    :title="item.categoryName" 
                    :describeText="'共'+item.videoCount+'个收藏'">
                        <mu-avatar icon="folder" slot="leftAvatar" />
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
        name: 'fav-view-list',
        data() {
            return {
                state
            }
        },
        methods: {
            back() {
                router.go(-1);
            }
        }
    }

</script>