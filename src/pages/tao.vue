<template>
    <f7-page :page-content="false" @page:beforeremove="onPageBeforeRemove">
        <f7-navbar title="淘一淘" back-link="Back">
            <f7-nav-right class="nav-right" >
                <f7-searchbar
                        inline
                        custom-search
                        :disable-button="true"
                ></f7-searchbar>
                <f7-button class="search-button" color="blue">查询</f7-button>
            </f7-nav-right>
        </f7-navbar>
        <f7-toolbar tabbar scrollable :position="isBottom ? 'bottom' : 'top'">
            <f7-link class="pSort"
                    v-for="(tab, index) in tabs"
                    :key="tab"
                    :tab-link="`#${tab}`"
                    :tab-link-active="index === 0"
            > {{tab}}
            </f7-link>
        </f7-toolbar>
            <f7-tabs>
                <f7-tab
                        v-for="(tab, index) in tabs"
                        :key="tab"
                        :id="`${tab}`"
                        class="page-content"
                        :tab-active="index === 0"
                >
                    <f7-block class="mainBlock">
<!--                        <f7-block-title align="center">
                            广告位，虚位以待
                        </f7-block-title>-->
                        <f7-row no-gap>
                            <f7-col width="25" class="left" v-for="(subSort,sIndex) in subSorts" :key="sIndex" v-if="sIndex === index">
                                <f7-list simple-list class="leftSort" v-for="(sort,sort1) in subSort" :key="sort1">
                                    <f7-list-item>{{sort}}</f7-list-item>
                                </f7-list>
                                <!--<f7-list>
                                    <f7-list-item title="家用电器"></f7-list-item>
                                </f7-list>-->
                            </f7-col>

                            <f7-col width="70" class="right">
                                <div class="infinite-scroll">
                                <f7-list class="rightItem" v-for="(item,item1) in itemList" :key="item1">
                                    <f7-list-item class="dItem"
                                            accordion-item
                                            link="#">
                                        <f7-row no-gap>
                                            <f7-col width="40">
                                               <!-- <div data-pagination='{"el": ".swiper-pagination"}' data-zoom='{"enabled": true}' data-navigation='{"nextEl": ".swiper-button-next", "prevEl": ".swiper-button-prev"}' class="swiper-container swiper-init demo-swiper">
                                                    <div class="swiper-wrapper">
                                                        <div class="swiper-slide">
                                                            <div class="swiper-zoom-container"><img width="90" class="lazy lazy-fadeIn demo-lazy" :src="item.img"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>-->
                                                <img id="image" width="90" class="lazy lazy-fadeIn demo-lazy" :src="item.img"/>
                                            </f7-col>
                                            <f7-col width="60">
                                                作者:{{item.Iauthor}}<br>
                                                原价:{{item.price}}<br>
                                                现价:{{item.realPrice}}<br>
                                                购物日期:{{item.cDate}}
                                            </f7-col>
                                        </f7-row>
<!--                                        <f7-skeleton-text>现价：$9</f7-skeleton-text>-->
                                        <f7-accordion-content>
                                            <f7-block>
                                                {{item.introduction}}
                                            </f7-block>
                                        </f7-accordion-content>
                                    </f7-list-item>
                                    <!--<f7-list-item
                                            link="#"
                                            title="作者：Jean"
                                            after="$16"
                                            subtitle="原价：$15"
                                            text="现价：$9"
                                    >
                                        <img slot="media"
                                             src="https://cdn.framework7.io/placeholder/people-160x160-3.jpg"
                                             width="80"/>
                                    </f7-list-item>-->
                                </f7-list>
                                    <!--<f7-popup class="demo-popup">
                                        <f7-page>
                                            <f7-navbar title="Popup Title">
                                                <f7-nav-right>
                                                    <f7-link popup-close>Close</f7-link>
                                                </f7-nav-right>
                                            </f7-navbar>
                                            <f7-block>
                                                <img width="90"  src="https://cdn.framework7.io/placeholder/people-160x160-1.jpg"/>
                                            </f7-block>
                                        </f7-page>
                                    </f7-popup>-->
                                </div>
                                <div class="infinite-scroll-preloader">
                                    <div class="preloader"></div>
                                </div>
                            </f7-col>
                        </f7-row>
                    </f7-block>
                </f7-tab>
            </f7-tabs>
        <f7-toolbar class="bar-bottom" bottom>
            <f7-icon material="shopping_cart" class="cart">
                <f7-badge color="red">5</f7-badge>
            </f7-icon>
            <!--<f7-button large  class="cart" color="blue">购物车
            </f7-button>-->
            <f7-button Fill large small class="submit" outline color="blue">提交</f7-button>
        </f7-toolbar>
    </f7-page>
</template>

<script>
    import Viewer from 'viewerjs'
    // import 'viewerjs/dist/viewer.css'

    /*const viewer = new Viewer(document.getElementById('image'), {
        inline: true,
        viewed() {
            viewer.zoomTo(1);
        },
    });*/
    export default {
        /*components: {
            Viewer
        },*/
        name: "tao",
        popupOpened: false,
    data() {
            return {
                tabs: ["书籍", "日用品", "运动器械", "电器","书籍1", "日用品1", "运动器械1", "电器1"],
                isBottom: false,
                zoom:true,
                subSorts: [
                    ["专业书籍","小说","电子读物"],["纸品","洗衣清洁","个人护理"],
                    ["健身","球类","其他"],["家用电器","小电器","其他"],
                    ["专业书籍1","小说1","电子读物1"],["纸品1","洗衣清洁1","个人护理1"],
                    ["健身1","球类1","其他1"],["家用电器1","小电器1","其他1"],
                ],
                itemList:[
                    {
                    img:"https://cdn.framework7.io/placeholder/people-160x160-1.jpg",
                    Iauthor:"Submarine",
                    price:"$15",
                    realPrice:"$9",
                    cDate:"08.03",
                    introduction:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum id neque nec commodo.Sed vel justo at turpis laoreet pellentesque quis sed lorem. Integer semper arcu nibh, non mollis arcu tempor vel.",
                },
                 {
                    img:"https://cdn.framework7.io/placeholder/people-160x160-2.jpg",
                    Iauthor:"Now",
                    price:"$15",
                    realPrice:"$9",
                    cDate:"08.03",
                    introduction:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum id neque nec commodo.Sed vel justo at turpis laoreet pellentesque quis sed lorem. Integer semper arcu nibh, non mollis arcu tempor vel.",
                },
                 {
                    img:"https://cdn.framework7.io/placeholder/people-160x160-3.jpg",
                    Iauthor:"Jean",
                    price:"$15",
                    realPrice:"$9",
                    cDate:"08.03",
                    introduction:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum id neque nec commodo.Sed vel justo at turpis laoreet pellentesque quis sed lorem. Integer semper arcu nibh, non mollis arcu tempor vel.",
                },
                    {
                    img:"https://cdn.framework7.io/placeholder/people-160x160-1.jpg",
                    Iauthor:"Submarine",
                    price:"$15",
                    realPrice:"$9",
                    cDate:"08.03",
                    introduction:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum id neque nec commodo.Sed vel justo at turpis laoreet pellentesque quis sed lorem. Integer semper arcu nibh, non mollis arcu tempor vel.",
                },
                 {
                    img:"https://cdn.framework7.io/placeholder/people-160x160-2.jpg",
                    Iauthor:"Now",
                    price:"$15",
                    realPrice:"$9",
                    cDate:"08.03",
                    introduction:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum id neque nec commodo.Sed vel justo at turpis laoreet pellentesque quis sed lorem. Integer semper arcu nibh, non mollis arcu tempor vel.",
                },
                 {
                    img:"https://cdn.framework7.io/placeholder/people-160x160-3.jpg",
                    Iauthor:"Jean",
                    price:"$15",
                    realPrice:"$9",
                    cDate:"08.03",
                    introduction:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum id neque nec commodo.Sed vel justo at turpis laoreet pellentesque quis sed lorem. Integer semper arcu nibh, non mollis arcu tempor vel.",
                },

                ],
            };
        },
        methods:{
            onPageBeforeRemove() {
                const self = this;
                // Destroy popup when page removed
                if (self.popup) self.popup.destroy();
            },
        }
        /*mounted() {
            // 加载flag
            var loading = false;
            // 上次加载的序号
            var lastIndex = $$('.rightItem.dItem').length;
            // 最多可加载的条目
            var maxItems = 3;
            // 每次加载添加多少条目
            var itemsPerLoad = 2;

            // 注册'infinite'事件处理函数
            this.Dom7('.infinite-scroll').on('infinite', function () {
                var $$ = this.Dom7;
                // 如果正在加载，则退出
                if (loading) return;
                // 设置flag
                loading = true;
                // 模拟1s的加载过程
                setTimeout(function () {
                    // 重置加载flag
                    loading = false;
                    if (lastIndex >= maxItems) {
                        // 加载完毕，则注销无限加载事件，以防不必要的加载
                        this.$f7.detachInfiniteScroll($$('.infinite-scroll'));
                        // 删除加载提示符
                        $$('.infinite-scroll-preloader').remove();
                        return;
                    }

                    // 生成新条目的HTML
                    var html = '';
                    for (var i = lastIndex + 1; i <= lastIndex + itemsPerLoad; i++) {
                        html += '<f7-list-item class="dItem" accordion-item link="#"> <f7-row no-gap> <f7-col width="40">'+
                        '<div class="swiper-wrapper"> <div class="swiper-slide"> <div class="swiper-zoom-container"><img width="100" :src="item.img"/>'+
                        '</div> </div> </f7-col> <f7-col width="60">作者:{{item.Iauthor}}<br>原价:{{item.price}}<br>现价:{{item.realPrice}}<br>购物日期:{{item.cDate}}'+
                        '</f7-col> </f7-row> <f7-accordion-content> <f7-block>{{item.introduction}} </f7-block> </f7-accordion-content> </f7-list-item>';
                    }
                    // 添加新条目
                    $$('.rightItem.dItem').append(html);

                    // 更新最后加载的序号
                    lastIndex = $$('.rightItem.dItem').length;
                }, 1000);
            });
        },*/
    }
</script>

<style scoped>
    .nav-right {
        right: 2px;
        width: 50%;
    }
    .search-button {
        width: 40%;
        font-size: 10px;
    }
    .bar-bottom{
        height: 50px;
    }
    .cart{
        left: 300px;
    }
    .submit{
        right: 20px;
    }
    .page-content{
        margin: 0px;
        padding-top: 78px;
    }
    .pSort{
        margin: 0px;
        padding: 0px;
    }
    .left{
        margin: 0px;
        padding: 0px;
        /*border-right-style: solid;
        border-right-width: 1px;
        border-right-color: black;*/
    }
    .leftSort{
        margin: 0px;
        padding: 0px;
        color: blue;
    }
    .right{
        margin: 0px;
        padding: 0px;
    }
    .rightItem{
        margin: 0px;
        padding: 0px;
    }
    .infinite-scroll-preloader {
        margin-top:-20px;
        margin-bottom: 10px;
        text-align: center;
    }
    .infinite-scroll-preloader .preloader {
        width:34px;
        height:34px;
    }
</style>