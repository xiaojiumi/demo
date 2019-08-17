<template>
    <f7-page name="home">
        <f7-navbar back-link="Back">
            <f7-nav-title>我的发布</f7-nav-title>
            <f7-nav-right>
                状态：
                <f7-input
                        type="select"
                        placeholder="请选择"
                >
                    <option v-for="stat in status" :key="stat.id" :value="stat.id" :label="stat.msg"></option>
                </f7-input>
                <f7-link href="visitAdd/">
                    <f7-icon f7="add_round" ></f7-icon>
                </f7-link>
            </f7-nav-right>
        </f7-navbar>
        <f7-list media-list>

            <f7-list-item v-for="good in goods" :key="good.goodId" >
                <f7-row style="font-size: smaller" no-gap="">
                    <f7-col>
                        <form class="good.school">{{good.school}}</form>
                        <form class="good.visitDate">{{good.visitDate}} {{good.visitTime}} 起</form>
                        <form class="good.visitPeopleNumber">{{good.visitPeopleNumber}}</form>
                        <form class="good.visitVehicle">{{good.visitVehicle}}</form>
                        <form class="good.additionalRequirements">{{good.additionalRequirements}}</form>
                    </f7-col>
                    <f7-col >
                        <form class="good.status" style="float: right">{{good.status}}</form><br/><br>
                        <f7-button v-if="good.statusId>0" @click="deleteGood(good.goodId)"  style="float: right">删除</f7-button>
<!--                        :href="`visitAdd/${good.goodId}/`"-->
                            <f7-button v-if="good.statusId>0"  style="float: right" :href="`visitModify/${good.goodId}/`">修改</f7-button>

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
                status:[
                    {id:0,
                        msg:'已结束'},
                    {id:1,
                        msg:'已受理'},
                    {id:2,
                        msg:'发布中'},


                ],
                goods:[
                    {
                        goodId:0,
                        school:'清华大学',
                        visitDate:'2019-1-2',
                        visitTime:'9:00',
                        visitPeopleNumber:'2人',
                        visitVehicle:'步行',
                        status:'已结束',
                        statusId:'0',
                        additionalRequirements:'',
                    },
                    {
                        goodId:1,
                        school:'清华大学',
                        visitDate:'2019-1-2',
                        visitTime:'9:00',
                        visitPeopleNumber:'2人',
                        visitVehicle:'自行车',
                        status:'已受理',
                        statusId:'1',
                        additionalRequirements:'参观实验室',
                    },
                    {
                        goodId:2,
                        school:'清华大学',
                        visitDate:'2019-1-2',
                        visitTime:'9:00',
                        visitPeopleNumber:'2人',
                        visitVehicle:'汽车',
                        status:'发布中',
                        statusId:'2',
                        additionalRequirements:'',
                    },
                ]
            }
        },
        methods:{
            deleteGood: function(id) {
                const f7=this.$f7
                f7.dialog.confirm('确认要删除吗？', '系统提示',function () {
                    f7.dialog.alert(id)
                    //TODO  数据库删除
                },function () {
                    return
                });
            },
            // updateGood:function(goodId) {
            //     console.log(goodId)
            //     // this.$f7router.navigate("visitAdd/",{params:{id:goodId}})
            //     this.$f7router.navigate({
            //         name: 'visitAdd',
            //         params: { id: goodId},
            //     })
            // }

        },
    }
</script>