<template>
   <f7-page>
       <f7-navbar back-link="Back">
           <f7-nav-title>团队发现</f7-nav-title>
           <f7-nav-right style="width: 50%;right: 2px">
               <f7-searchbar
                       inline
                       custom-search
                       :disable-button="true"
                       :value="groupKeyword"
                       @input="groupKeyword = $event.target.value"
               ></f7-searchbar>
               <f7-button  color="blue" style="width: 40%" @click="queryGroupByKeyword">查询</f7-button>
           </f7-nav-right>
       </f7-navbar>
       <f7-list media-list>
           <f7-list-item v-for="group in groups" :key="group.groupId" >
               <f7-row style="font-size: smaller;word-break: break-all" no-gap="">
               <f7-col width="40">
                   <form class="group.groupName">{{group.groupName}}</form>
               </f7-col>
               <f7-col width="60">
                   <f7-row>
                       <form class="group.groupEstablishDate">创建时间:{{group.groupEstablishDate}}</form>
                   </f7-row>
                   <f7-row>
                       <form class="group.groupNumber">总人数:{{group.groupNumber}}人</form>
                   </f7-row>
                   <br>
               </f7-col>
               <form class="group.groupPurpose">目的:   {{group.groupPurpose}}</form>
               <br>
               <form class="group.groupRequirement">要求:   {{group.groupRequirement}}</form>
                   <br>
                   <f7-button small   outline color="blue">申请加入</f7-button>
           </f7-row>
           </f7-list-item>
       </f7-list>
   </f7-page>

</template>

<script>
    export default {
        data(){
            return{
                groups:[
                    {
                        groupId:0,
                        groupName:'aaa团队',
                        groupEstablishDate:'2019-1-2',
                        groupNumber:2,
                        groupPurpose:'bbbbbbbbbbbbbbbbtttttttttttttttttttttttttttttttttttqqqqqq',
                        groupRequirement:'nnnnnnnnnnnnxxxxxxxxxxxxxxttttttttttxxxxxxxxxxxxxxxaaa',
                    },
                    {
                        groupId:1,
                        groupName:'qqqqqqqqqqq团队',
                        groupEstablishDate:'2019-11-2',
                        groupNumber:3333,
                        groupPurpose:'qqqqqqqqqqqqqqqqttttttttttttttttttttttttttttttttttttttqqqqqq',
                        groupRequirement:'aaaaaaaaaaaaaaaaaaaaaaxxxxxxxxxxxxxxxxxxttttttttttxxxxxxxxxxxxxxxaaa',
                    },
                    {
                        groupId:2,
                        groupName:'fffffffffffffffff团队',
                        groupEstablishDate:'2019-3-2',
                        groupNumber:211,
                        groupPurpose:'ooooooooooooooooooooooooooo',
                        groupRequirement:'rrrrrrrrrrrrrrrrrrrxxxxxxxxxxxxxxxxxxttttttttttxxxxxxxxxxxxxxxaaa',
                    },

                ],
                groupKeyword:'',

            }
        },
        methods:{
            queryGroupByKeyword(){
                console.log(this.groupKeyword);
            },
        },
    }
</script>

<style scoped>

</style>