export const state = {
    userinfo: {
        username: '黄小明',
        des: '这个人很懒没写下什么',
        background: require('./assets/images/sun.jpg'),
        face: require('./assets/images/uicon.jpg')
    },
    menus: [
        { id: 1, icon: 'view_list', title: 'All List', color: '', path: '/VideoList' },
        { id: 2, icon: 'favorite', title: 'My Favorite', color: '' },
        { id: 3, icon: 'folder_special', title: 'Favorite List', color: '' },
        { id: 4, icon: 'subdirectory_arrow_left', title: 'Logout', color: '' }
    ],
    videoList: [

    ],
    viewVideo: null,
    pageinfo: {
        pageSize: 10,
        pageIndex: 1,
        needFristLoad: true
    }
};

export const actions = {
    /**
     * 加载视频分页数据
     */
    loadVideoListData() {
        var pageIndex = state.pageinfo.pageIndex;
        var pageSize = state.pageinfo.pageSize;

        for (let i = ((pageIndex - 1) * pageSize); i < pageSize * pageIndex; i++) {
            var title = '主标题' + i;
            var item = { id: i, title: title, date: '2017-01-01', image: require('./assets/images/item2.jpg'), fav: false };
            state.videoList.push(item);
        }
        // 自动下一页
        state.pageinfo.pageIndex++;
    },
    /**
     * 设置已经首次加载
     */
    setIsLoadFristTime() {
        state.pageinfo.needFristLoad = false;
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
    setViewVideo(item) {
        state.viewVideo = item;
    }
};