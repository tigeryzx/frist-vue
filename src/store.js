import router from '@/router/index'

export const state = {
    userinfo: {
        username: '黄小明',
        des: '这个人很懒没写下什么',
        background: require('./assets/images/sun.jpg'),
        face: require('./assets/images/uicon.jpg')
    },
    menus: [
        { id: 1, icon: 'view_list', title: 'All List', color: '', path: '/VideoList?type=all&name=所有视频' },
        { id: 2, icon: 'favorite', title: 'My Favorite', color: '', path: '/FavViewList' },
        { id: 3, icon: 'folder_special', title: 'Favorite List', color: '', path: '/FavList' },
        { id: 4, icon: 'subdirectory_arrow_left', title: 'Logout', color: '' }
    ],
    favList: [
        { id: 1, categoryName: '收藏夹1', videoCount: 12 },
        { id: 2, categoryName: '收藏夹2', videoCount: 20 },
        { id: 3, categoryName: '收藏夹3', videoCount: 30 }
    ],
    editFav: null,
    videoList: [],
    videoFilter: {
        type: '',
        name: ''
    },
    viewVideo: null,
    pageinfo: {
        pageSize: 10,
        pageIndex: 1
    }
};

export const actions = {
    /**
     * 加载视频分页数据
     */
    loadVideoListData() {
        var pageIndex = state.pageinfo.pageIndex;
        var pageSize = state.pageinfo.pageSize;
        // 按类型加载列表
        var type = state.videoFilter;

        for (let i = ((pageIndex - 1) * pageSize); i < pageSize * pageIndex; i++) {
            var title = '主标题' + i;
            var item = { id: i, title: title, date: '2017-01-01', image: require('./assets/images/item.jpg'), fav: false };
            state.videoList.push(item);
        }
        // 自动下一页
        state.pageinfo.pageIndex++;
    },
    /**
     * 设置视频为喜爱
     */
    setVideoFav(item) {
        item.fav = !item.fav;
    },
    /**
     * 设置正在查看的视频
     */
    setViewVideo(vid) {
        for (let i = 0; i < state.videoList.length; i++) {
            var item = state.videoList[i];
            if (item.id == vid) {
                state.viewVideo = item;
            }
        }
    },
    /**
     * 添加收藏项
     */
    setEditFav(item) {
        state.editFav = item;
    },
    /**
     * 删除收藏项
     */
    removeFav(index) {
        state.favList.splice(index, 1);
    },
    /**
     * 保存收藏名称
     */
    saveFav(newName) {
        if (state.editFav != null) {
            state.editFav.categoryName = newName;
            state.editFav = null;

        } else {
            state.favList.push({ id: 1, categoryName: newName, videoCount: 0 });
        }
    },
    /**
     * 设置视频过滤类型
     */
    setVideoFilter(type, name) {
        if (state.videoFilter.type == type) {
            return;
        } else {
            state.videoFilter.type = type;
            state.videoFilter.name = name;
            state.videoList = [];
            state.pageinfo.pageIndex = 1;
            this.loadVideoListData();
        }
    }
};