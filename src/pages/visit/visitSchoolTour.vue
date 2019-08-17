<template>
    <f7-page>
        <f7-navbar back-link="Back">
            <f7-nav-title>校园游</f7-nav-title>
        </f7-navbar>
        <baidu-map class="map"
                   ak="2SYLbm48hVjaFXo5vMeZP5ZqXt3vIVw5"
                   id="container"
                   :center="center" :zoom="zoom"
                   @ready="handler"
        >
            <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
            <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
            <bm-marker :position="{lng: selfLocation.lng,lat: selfLocation.lat}" >
                <bm-label :content="selfLocation.name" :offset="{width: -1, height: 30}" :label-style="{border:'0px'}"/>
            </bm-marker>
            <bm-marker v-for="friend in friendLocations" :key="friend.id"
                       :position="{lng: friend.lng,lat: friend.lat}"
                       :icon="{url: '/static/pic/people.png', size: {width: 150, height: 84}}"
            >
                <bm-label :content="friend.name" :offset="{width: 5, height: 30}" :label-style="{border:'0px'}"></bm-label>
            </bm-marker>
        </baidu-map>
        <f7-list media-list>

            <f7-list-item v-for="good in goods" :key="good.goodId" >
                <f7-row style="font-size: smaller" no-gap="">
                    <f7-col>
                        <form class="good.school">{{good.school}}</form>
                        <form class="good.visitDate">{{good.visitDate}} {{good.visitTime}}</form>
                        <form class="good.visitPeopleNumber">{{good.visitPeopleNumber}}</form>
                        <form class="good.additionalRequirements">{{good.additionalRequirements}}</form>
                    </f7-col>
                    <f7-col >
                        <f7-icon f7="chat_bubble" style="left:110px"></f7-icon>
                        <f7-icon f7="phone" style="float: right" @click="makeCall"></f7-icon><br><br>
                        <f7-button  @click="deleteGood(good.goodId)"  style="float: right">结束</f7-button>

                    </f7-col>
                </f7-row>
            </f7-list-item>
        </f7-list>
    </f7-page>
</template>
<script>
    import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
    import BmNavigation from 'vue-baidu-map/components/controls/Navigation'
    import BmGeolocation from 'vue-baidu-map/components/controls/Geolocation'
    import BmMarker from 'vue-baidu-map/components/overlays/Marker'
    import BmLabel from 'vue-baidu-map/components/overlays/Label'
    export default {
        components: {
            BaiduMap,
            BmNavigation,
            BmGeolocation,
            BmMarker,
            BmLabel,
        },
        data () {
            return {
                center: {
                    lng: 0,
                    lat: 0,
                },
                selfLocation:{
                    id:9832,
                    lng: 120.120,
                    lat: 30.160,
                    name:'me',
                },
                friendLocations:[
                    {id:0,lng: 120.150, lat: 30.160,name:'aaa',iconUrl:''},
                    {id:1,lng: 120.90, lat: 30.180,name:'bbb',iconUrl:''},
                    {id:2,lng: 120.120, lat: 30.140,name:'cc',iconUrl:''},
                    {id:3,lng: 120.110, lat: 30.167,name:'d',iconUrl:''},
                    {id:4,lng: 120.132, lat: 30.141,name:'qqqq',iconUrl:''},

                ],
                zoom: 3,
                goods:[
                    {
                        goodId:2,
                        school:'浙江大学',
                        visitDate:'2019-9-2',
                        visitTime:'11:00',
                        visitPeopleNumber:'5人',
                        status:'待完成',
                        statusId:'4',
                        additionalRequirements:'qqqqqqq',
                        visitContactNumber:'123456',
                    },
                ],
            }
        },
        methods:{
            handler({BMap,Map}){
                this.center.lng = this.selfLocation.lng
                this.center.lat = this.selfLocation.lat
                this.zoom = 15
            },
            deleteGood: function(id) {
                const f7=this.$f7
                f7.dialog.confirm('确认要结束吗？', '系统提示',function () {
                    f7.dialog.alert(id)
                    //TODO  数据库删除
                },function () {
                    return
                });
            },
            makeCall() {
                window.location.href = `tel:${this.goods.visitContactNumber}`
            }
        }
    }
</script>
<style>
    .map {
        width: 100%;
        height: 400px;
    }
</style>