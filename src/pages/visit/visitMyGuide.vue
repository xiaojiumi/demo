<template>
    <f7-page>
        <f7-navbar back-link="Back">
            <f7-nav-title>我的导游</f7-nav-title>
        </f7-navbar>
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
                        <form class="good.status" style="float: right">{{good.status}}</form><br/><br>
                        <f7-button small @click="deleteGood(good.goodId)"  style="float: right;margin-left: 5px;" outline color="blue">取消</f7-button>
                        <f7-button small @click="startTour" style="float: right" outline color="blue">开始</f7-button>
                    </f7-col>
                </f7-row>
            </f7-list-item>
        </f7-list>

    </f7-page>
</template>

<script>
    export default {
        data(){
            return{
                goods:[
                    // {
                    //     goodId:0,
                    //     school:'清华大学',
                    //     visitDate:'2019-1-2',
                    //     visitTime:'9:00',
                    //     visitPeopleNumber:'2人',
                    //     status:'已结束',
                    //     statusId:'0',
                    //     additionalRequirements:'不知道',
                    // },
                    // {
                    //     goodId:1,
                    //     school:'北京大学',
                    //     visitDate:'2019-1-3',
                    //     visitTime:'19:00',
                    //     visitPeopleNumber:'3人',
                    //     status:'已受理',
                    //     statusId:'1',
                    //     additionalRequirements:'参观实验室',
                    // },
                    {
                        goodId:2,
                        school:'浙江大学',
                        visitDate:'2019-9-2',
                        visitTime:'11:00',
                        visitPeopleNumber:'5人',
                        status:'待完成',
                        statusId:'4',
                        additionalRequirements:'qqqqqqq',
                    },
                ]
            }
        },
        methods:{
            deleteGood: function(id) {
                const f7=this.$f7
                f7.dialog.confirm('确认要取消吗？', '系统提示',function () {
                    f7.dialog.alert(id)
                    //TODO  数据库删除
                },function () {
                    return
                });
            },
            startTour(){
                console.log(new Date())
                this.$f7router.navigate("visitSchoolTour/")
            },
        },
    }
</script>
