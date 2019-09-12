<template>
    <f7-page>
        <f7-navbar back-link="Back">
            <f7-nav-title>成员审核</f7-nav-title>
        </f7-navbar>
        <f7-list media-list>
<!--            <f7-list-item v-for="applicant in applicants" :key="applicant.applicantId" >-->
<!--                <f7-row style="font-size: smaller" no-gap="" >-->
<!--                    <f7-col width="50">-->
<!--                        <form class="applicant.applicantName">{{applicant.applicantName}}</form>-->
<!--                    </f7-col>-->
<!--                    <f7-col width="50">-->
<!--                        <form class="applicant.applicantInformation">{{applicant.applicantInformation}}</form>-->
<!--                        <form class="applicant.applicantInformation1">{{applicant.applicantInformation1}}</form>-->
<!--                        <f7-block>-->
<!--                            <f7-col>-->
<!--                                <f7-button small   style="width: 50px;float: right" outline color="blue" >同意</f7-button>-->
<!--                            </f7-col>-->
<!--                            <f7-col>-->
<!--                                <f7-button small   style="width: 50px;float: right" outline color="blue" >拒绝</f7-button>-->
<!--                            </f7-col>-->
<!--                        </f7-block>-->
<!--                    </f7-col>-->
<!--                </f7-row>-->
<!--            </f7-list-item>-->
            <f7-list-item v-for="applicant in applicants" :key="applicant.applicantId" >
                    <f7-row style="font-size: smaller" no-gap>
                        <f7-col width="25">
                            <form class="applicant.applicantName">{{applicant.applicantName}}</form>
                        </f7-col>
                        <f7-col width="50">
                            <form class="applicant.applicantInformation">{{applicant.applicantInformation}}</form>
                            <form class="applicant.applicantInformation1">{{applicant.applicantInformation1}}</form>
                        </f7-col>
                        <f7-col width="25">
                            <f7-row>
                                <f7-button small   style="left: 40px" outline color="blue" >同意</f7-button>
                            </f7-row>
                            <br>
                            <f7-row>
                                <f7-button small   style="left: 40px" outline color="blue" >拒绝</f7-button>
                            </f7-row>
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
                applicants:[
                    {
                        applicantId:0,
                        applicantName:'zhangsan',
                        applicantInformation:'aaaaaaaaaa',
                        applicantInformation1:'wwwwwwwwwww你你你你你你你你',
                    },
                    {
                        applicantId:1,
                        applicantName:'lisiaaaaaa',
                        applicantInformation:'吾问无为谓',
                        applicantInformation1:'你你你你你你你你你你你你',
                    },
                    {
                        applicantId:2,
                        applicantName:'张三',
                        applicantInformation:'aaaaaaaaaa',
                        applicantInformation1:'www',
                    }
                ],
            }
        }
    }
</script>

<style scoped>

</style>