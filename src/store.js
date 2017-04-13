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
    pageinfo: {
        pageSize: 10,
        pageIndex:1
    }
};

export const actions = {
    loadVideoListData() {
        for(let i=((pageIndex-1)*pageSize);i<pageSize*pageIndex;i++){
            var title = '主标题' + i;
            var item = {title: title, date: '2017-01-01', image: require('./assets/images/item.jpg')};
            state.videoList.push(item);
        }
        // 自动下一页
        pageIndex++;
    }
};