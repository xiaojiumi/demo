<template>
    <f7-page>
        <f7-navbar back-link="Back">
            <f7-nav-title>参观详细</f7-nav-title>
        </f7-navbar>
        <f7-list>
            <f7-list-item title="参观大学">{{visitPublish.school}}</f7-list-item>
            <f7-list-item title="人数">{{visitPublish.visitPeopleNumber}}</f7-list-item>
            <f7-list-item title="日期">{{visitPublish.visitDate}}</f7-list-item>
            <f7-list-item title="开始时间">{{visitPublish.visitTime}}</f7-list-item>
            <f7-list-item title="参观方式">{{visitPublish.visitVehicle}}</f7-list-item>
            <f7-list-item title="联系人">{{visitPublish.visitContact}}</f7-list-item>
            <f7-list-item title="联系电话">{{visitPublish.visitContactNumber}}</f7-list-item>
            <f7-list-item title="附加要求">{{visitPublish.additionalRequirements}}</f7-list-item>
        </f7-list>
        <f7-block>
            <f7-row tag="p">
                <f7-button small type="submit" class="col" @click="submit1" style="width: 50px;left: 270px" outline color="blue">接单</f7-button>
                <a href="#" class="back">
                    <f7-button small type="reset"  class="col" style="width: 50px;float: right" outline color="blue">放弃</f7-button>
                </a>

            </f7-row>
        </f7-block>
    </f7-page>
</template>

<script>
    export default {
        data() {
            return {
                visitPublish: {
                    school: '清华大学',
                    visitPeopleNumber: '1人',
                    visitDate: '2019-09-01',
                    visitTime: '9:00',
                    visitVehicle: '自行车',
                    visitContact: 'a',
                    visitContactNumber: '1111111111',
                    additionalRequirements: 'qwertyuopzxcv',
                },
            }
        },
        methods:{
            submit(){
                const f7=this.$f7
                f7.dialog.confirm('确认要接单吗？', '系统提示',function () {
                 f7.dialog.alert(1)

                },function () {
                    return
                });
            },
            submit1(){
               this.$f7router.back()
            },
        }
    }
</script>

