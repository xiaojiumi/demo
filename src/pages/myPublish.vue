<template>
  <f7-page name="home">
    <!-- Top Navbar -->
<!--    <f7-navbar title="我的发布" back-link="Back">-->
<!--      <f7-nav-right>-->
<!--        <f7-link >-->
<!--          <f7-icon f7="add_round" ></f7-icon>-->
<!--        </f7-link>-->
<!--      </f7-nav-right>-->
<!--    </f7-navbar>-->
    <f7-navbar back-link="Back">
<!--      <f7-nav-left>-->
<!--        <f7-link icon-material="chevron_left"></f7-link>-->
<!--      </f7-nav-left>-->
<!--      <f7-text>我的发布</f7-text>-->
        我的发布
<!--      <f7-nav-title>我的发布</f7-nav-title>-->
            <f7-nav-right>
<!--              <f7-text>状态：</f7-text>-->
                状态：
              <f7-input
                      type="select"
                      placeholder="请选择"
              >
                <option v-for="stat in status" :key="stat.id" :value="stat.id" :label="stat.msg"></option>
              </f7-input>
              <f7-link >
                <f7-icon f7="add_round" ></f7-icon>
              </f7-link>
            </f7-nav-right>
    </f7-navbar>
    <f7-list media-list>
      <f7-row></f7-row>
      <f7-list-item v-for="good in goods" :key="good.id" >
<!--        <img slot="media" src="https://cdn.framework7.io/placeholder/people-160x160-1.jpg" width="80" />-->
          <f7-row style="font-size: small" no-gap="">
          <f7-col>
              <img
               :src="good.imgUrl"
               width="80" />
          </f7-col>
        <f7-col>
         <form class="good.author">作者：{{good.author}}</form>
          <form class="good.originPrice">原价：{{good.originPrice}}</form>
          <form class="good.presentPrice">现价：{{good.presentPrice}}</form>
          <form class="good.usingTime">使用年限：{{good.usingTime}}</form>
        </f7-col>
        <f7-col >
          <form class="good.status">状态：{{good.status}}</form>
          <form class="good.releaseTime">发布时间：{{good.releaseTime}}</form>
          <f7-button v-if="good.statusId==1" @click="cancelGood(good.id)" style="left: 30px;">撤销</f7-button>
          <f7-button v-else @click="deleteGood(good.id)"  style="left: 30px;">删除</f7-button>
        </f7-col>
        </f7-row>
          <f7-row style="font-size: small;word-break: break-all">
             说明内容：{{good.introduction}}
          </f7-row>
      </f7-list-item>
    </f7-list>
  </f7-page>
</template>
<!--<f7-list class="rightItem" v-for="(item,item1) in itemList" :key="item1">-->
<!--    <f7-list-item class="dItem"-->
<!--                  accordion-item-->
<!--                  link="#">-->
<!--        <f7-row no-gap>-->
<!--            <f7-col width="40">-->
<!--                &lt;!&ndash; <div data-pagination='{"el": ".swiper-pagination"}' data-zoom='{"enabled": true}' data-navigation='{"nextEl": ".swiper-button-next", "prevEl": ".swiper-button-prev"}' class="swiper-container swiper-init demo-swiper">-->
<!--                     <div class="swiper-wrapper">-->
<!--                         <div class="swiper-slide">-->
<!--                             <div class="swiper-zoom-container"><img width="90" class="lazy lazy-fadeIn demo-lazy" :src="item.img"/>-->
<!--                             </div>-->
<!--                         </div>-->
<!--                     </div>-->
<!--                 </div>&ndash;&gt;-->
<!--                <img typeof="button" @click="popupOpened = true" width="90" class="lazy lazy-fadeIn demo-lazy" :src="item.img"/>-->
<!--            </f7-col>-->
<!--            <f7-col width="60">-->
<!--                作者:{{item.Iauthor}}<br>-->
<!--                原价:{{item.price}}<br>-->
<!--                现价:{{item.realPrice}}<br>-->
<!--                购物日期:{{item.cDate}}-->
<!--            </f7-col>-->
<!--        </f7-row>-->
<!--        &lt;!&ndash;                                        <f7-skeleton-text>现价：$9</f7-skeleton-text>&ndash;&gt;-->
<!--        <f7-accordion-content>-->
<!--            <f7-block>-->
<!--                {{item.introduction}}-->
<!--            </f7-block>-->
<!--        </f7-accordion-content>-->
<!--    </f7-list-item>-->
<!--    &lt;!&ndash;<f7-list-item-->
<!--            link="#"-->
<!--            title="作者：Jean"-->
<!--            after="$16"-->
<!--            subtitle="原价：$15"-->
<!--            text="现价：$9"-->
<!--    >-->
<!--        <img slot="media"-->
<!--             src="https://cdn.framework7.io/placeholder/people-160x160-3.jpg"-->
<!--             width="80"/>-->
<!--    </f7-list-item>&ndash;&gt;-->
<!--</f7-list>-->
<script>
    export default {
    data(){
      return{
        status:[
          {id:'0',
          msg:'已发布'},
          {id:'1',
            msg:'已预订'},
          {id:'2',
            msg:'已完成'},
          {id:'3',
            msg:'已撤销'},
          // '已发布',
          // '已预订',
        ],
        goods:[
          {
                id:'0',
                author:'abc',
                originPrice:'28',
                presentPrice:'18',
                usingTime:'1年',
                status:'已发布',
                statusId:'0',
                releaseTime:'07-08-01',
                imgUrl:'https://cdn.framework7.io/placeholder/people-160x160-1.jpg',
              introduction:'aaaaaaaaabbbbbbbbbbcccccccccc',
            },
            {
                id:'1',
                author:'qqq',
                originPrice:'1111',
                presentPrice:'333',
                usingTime:'3年',
                status:'已预订',
                statusId:'1',
                releaseTime:'10-11-12',
                imgUrl:'https://cdn.framework7.io/placeholder/people-160x160-1.jpg',
                introduction:"aaaaaaaaab,bbbbbbbbbcccc,cccccc",
            },
            {
                id:'2',
                author:'zzzzc',
                originPrice:'88888',
                presentPrice:'2345',
                usingTime:'2年',
                status:'已撤销',
                statusId:'3',
                releaseTime:'19-08-01',
                imgUrl:'https://cdn.framework7.io/placeholder/people-160x160-1.jpg',
                introduction:"aaaaaaaaab,bbbbbbbbqwwwwwww,wwwwwwwww,wwwwwwwbccc,ccccccc",
            },
        ]
      }
    },
    methods:{
        deleteGood: function(id) {
            // if(confirm('确认要删除吗？')==true){
            //     this.handleDelete(id)
            // }
            const f7=this.$f7
            f7.dialog.confirm('确认要删除吗？', '系统提示',function () {
                f7.dialog.alert(id)
                //TODO  数据库删除
            },function () {
                return
            });
      },
        cancelGood:function (id) {
            // if(confirm('确认要撤销吗？')==true){
            //     this.handleDelete(id);
            //
            // }
            const f7=this.$f7
            f7.dialog.confirm('确认要撤销吗？', '系统提示',function () {
                f7.dialog.alert(id)
                //TODO  数据库撤销
            },function () {
                return
            });
        },
    },
  }
</script>