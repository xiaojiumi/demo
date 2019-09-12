<template>
    <f7-page>
        <f7-navbar back-link="Back">
            <f7-nav-title>我参加的团队</f7-nav-title>
        </f7-navbar>
        <f7-list media-list>
            <f7-list-item v-for="group in groups" :key="group.groupId" >
                <f7-row style="font-size: small" no-gap="">
                    <f7-col>
                        <img
                                :src="group.groupLogo"
                                width="80" />
                    </f7-col>
                    <f7-col>
                        <form class="group.groupName">{{group.groupName}}</form>
                        <form class="group.groupNumber">人数：{{group.groupNumber}}</form>

                        <form class="group.unreadMessageNumber"  style="word-break: break-all">[{{group.unreadMessageNumber}}条]{{group.latestMessage}}</form>
                    </f7-col>
                    <f7-col >
                        <form class="group.latestTime" style="float: right;">{{group.latestTime}}</form><br><br>
                        <f7-link href="interestGroopInside/" style="float: right;">
                            <f7-icon f7="chevron_right" ></f7-icon>
                        </f7-link>
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
                groups:[
                    {
                        groupId:'0',
                        groupNumber:123,
                        groupName:'aaa团队',
                        groupLogo:'../../static/pic/saber.jpg',
                        latestTime:'08:40',
                        unreadMessageNumber:5,
                        latestMessage:'xxxxxxxxxxxxxxxxxxxxx',
                    },
                    {
                        groupId:'1',
                        groupNumber:33,
                        groupName:'bbb团队',
                        groupLogo:'../../static/pic/saber.jpg',
                        latestTime:'12:40',
                        unreadMessageNumber:2,
                        latestMessage:'wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww',
                    },
                    {
                        groupId:'3',
                        groupNumber:6667,
                        groupName:'ccc团队',
                        groupLogo:'../../static/pic/saber.jpg',
                        latestTime:'10:40',
                        unreadMessageNumber:2335,
                        latestMessage:'jdsajdklasjdlkasjdklsajdsakdjaskljdklsajdlsajkdlsakldjslad',
                    },
                ]
            }
        },
        methods:{

        },
    }
</script>

<style scoped>

</style>