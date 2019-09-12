<template>
        <f7-page name="home">
            <f7-navbar back-link="Back">
                <f7-nav-title>团队管理</f7-nav-title>
                <f7-nav-right>
                    <f7-link href="intersetGroupAdd/">
                        <f7-icon f7="add_round" ></f7-icon>
                    </f7-link>
                </f7-nav-right>
            </f7-navbar>
            <f7-list media-list>
                <f7-list-item v-for="group in groups" :key="group.groupId" >
                    <f7-row style="font-size: smaller" no-gap="">
                        <f7-col width="25">
                        <form class="group.groupName">{{group.groupName}}</form>
                        </f7-col>
                        <f7-col width="50">
                            <form class="group.groupEstablishDate">创建时间:{{group.groupEstablishDate}}</form>
                            <form class="group.groupNumber">人数:{{group.groupNumber}}人</form>
                            <form class="group.groupApplyNumber">申请人数:{{group.groupApplyNumber}}人</form>
                        </f7-col>
                        <f7-col width="25">
                            <f7-row>
                                <f7-button small   style="left: 40px" outline color="blue" href="intersetGroopApplicant/">审核</f7-button>
                            </f7-row>
                            <br>
                            <f7-row>
                                <f7-button small   style="left: 40px" outline color="blue" popover-open=".popover-authorization">授权</f7-button>
                            </f7-row>
                        </f7-col>
                    </f7-row>
                </f7-list-item>
            </f7-list>
<!--            <f7-popover class="popover-examine">-->
<!--                <f7-list>-->
<!--                    <f7-list-item v-for="applicant in applicants" :key="applicant.applicantId" >-->
<!--                        <f7-row style="font-size: smaller" no-gap="" >-->
<!--                            <f7-col width="50">-->
<!--                                <form class="applicant.applicantName">{{applicant.applicantName}}</form>-->
<!--                            </f7-col>-->
<!--                            <f7-col width="50">-->
<!--                                <form class="applicant.applicantInformation">{{applicant.applicantInformation}}</form>-->
<!--                                <form class="applicant.applicantInformation1">{{applicant.applicantInformation1}}</form>-->
<!--                                <f7-block>-->
<!--                                    <f7-col>-->
<!--                                        <f7-button small   style="width: 50px;float: right" outline color="blue" >同意</f7-button>-->
<!--                                    </f7-col>-->
<!--                                    <f7-col>-->
<!--                                        <f7-button small   style="width: 50px;float: right" outline color="blue" >拒绝</f7-button>-->
<!--                                    </f7-col>-->
<!--                                </f7-block>-->
<!--                            </f7-col>-->
<!--                        </f7-row>-->
<!--                    </f7-list-item>-->
<!--                </f7-list>-->
<!--            </f7-popover>-->
            <f7-popover class="popover-authorization">
                <f7-list>
                    <f7-list-item  radio
                                   name="president"
                                   v-for="applicant in applicants"
                                   :title="applicant.applicantName"
                                   :value="applicant.applicantId"
                                   :key="applicant.applicantId"
                                   :checked="president === 'banana'"
                                   @change="president = $event.target.value"
                    ></f7-list-item>
                    <f7-block>
                        <f7-row>
                            <f7-col >
                                <f7-button small  popover-close=".popover-authorization" outline color="blue" style="width: 50px;left: 30px" @click="confirmAuthorization">确定</f7-button>
                            </f7-col>
                            <f7-col>
                                <f7-button small  popover-close=".popover-authorization" outline color="blue" style="width: 50px;left: 20px">放弃</f7-button>
                            </f7-col>
                        </f7-row>
                    </f7-block>
                </f7-list>
            </f7-popover>

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
                            groupApplyNumber:3,
                        },
                        {
                            groupId:1,
                            groupName:'bbbqqqq团队',
                            groupEstablishDate:'2019-11-21',
                            groupNumber:200,
                            groupApplyNumber:3123,
                        },
                        {
                            groupId:2,
                            groupName:'ccc团队',
                            groupEstablishDate:'2019-12-22',
                            groupNumber:12,
                            groupApplyNumber:300,
                        },
                    ],
                    president:'',
                    applicants:[
                        {
                            applicantId:23,
                            applicantName:'张三',
                        },
                        {
                            applicantId:111,
                            applicantName:'在三',
                        },
                        {
                            applicantId:672,
                            applicantName:'去三',
                        },
                        {
                            applicantId:345,
                            applicantName:'李三',
                        },
                        {
                            applicantId:324,
                            applicantName:'王三',
                        },
                        {
                            applicantId:511,
                            applicantName:'张五',
                        },
                        {
                            applicantId:996,
                            applicantName:'张四',
                        },
                        {
                            applicantId:667,
                            applicantName:'张二',
                        },
                        {
                            applicantId:448,
                            applicantName:'张三一',
                        }
                    ],
                }
            },
            methods:{
                confirmAuthorization(){
                    console.log(this.president);
                }
            },
        }
    </script>

<style scoped>

</style>