<template>
    <f7-page >
        <f7-navbar back-link="Back">
            <f7-nav-title>团队创建</f7-nav-title>
        </f7-navbar>
        <f7-list inline-labels no-hairlines-md v-model="groopAll">
            <f7-list-input
                label="名称"
                type="text"
                placeholder="请输入名称"
                required
                validateAdd
                clear-button
                :value="groopAll.groupName"
                @input="groopAll.groupName = $event.target.value"
        ></f7-list-input>
            <f7-list-input
                    label="用途"
                    type="text"
                    placeholder="请输入用途"
                    required
                    validate
                    clear-button
                    :value="groopAll.groupPurpose"
                    @input="groopAll.groupPurpose = $event.target.value"
            ></f7-list-input>
            <f7-list-input
                    label="要求"
                    type="text"
                    placeholder="请输入要求"
                    required
                    validate
                    clear-button
                    :value="groopAll.groupRequirement"
                    @input="groopAll.groupRequirement = $event.target.value"
            ></f7-list-input>
            <f7-list-input type="file"
                           label="图片"
                           accept="image/*"
                           @change="groopAll.groupLogo = $event.target.value"
            >
            </f7-list-input>
            <f7-list-item title="图片预览" v-if="groopAll.groupLogo">
                <img  src="../../static/pic/saber.jpg" width="100px" >
            </f7-list-item>

        </f7-list>
        <f7-block>
            <f7-row tag="p">
                <f7-button small type="submit" class="col" @click="submit" style="width: 50px;left: 260px" outline color="blue">创建</f7-button>
                <f7-button small type="reset"  class="col" @click="reset" style="width: 50px;float: right" outline color="blue">重置</f7-button>
            </f7-row>
        </f7-block>
    </f7-page>
</template>
<script>
    export default {
        data(){
            return{
                groopAll:{
                    groppId:'',
                    groupName:'',
                    groupPurpose:'',
                    groupRequirement:'',
                    groupLogo:'',
                },
            }
        },
        methods:{
            submit(){
                //校验表单是否为空，写入数据库
                console.log(this.groopAll);
                this.$f7router.back()
            },
            reset(){
                this.groopAll={
                    groppId:'',
                    groupName:'',
                    groupPurpose:'',
                    groupRequirement:'',
                    groupLogo:'',
                }
            },

        }
    }
</script>
<style scoped>

</style>