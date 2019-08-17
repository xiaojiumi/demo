<template>
<f7-page>
  <f7-navbar back-link="Back">
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
          lng: 120.3594413784,
          lat: 30.3197605534,
          name:'me',
        },
        friendLocations:[
          {id:0,lng: 120.150, lat: 30.160,name:'aaa',iconUrl:''},
          {id:1,lng: 120.90, lat: 30.180,name:'bbb',iconUrl:''},
          {id:2,lng: 120.120, lat: 30.140,name:'cc',iconUrl:''},
          {id:3,lng: 120.110, lat: 30.167,name:'d',iconUrl:''},
          {id:4,lng: 120.132, lat: 30.141,name:'qqqq',iconUrl:''},

        ],
        zoom: 3
      }
    },
    methods:{
      handler({BMap,Map}){
        this.center.lng = this.selfLocation.lng
        this.center.lat = this.selfLocation.lat
        this.zoom = 15
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