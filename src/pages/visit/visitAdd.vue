<template>
    <f7-page >
        <f7-navbar back-link="Back">
            <f7-nav-title>发布新增</f7-nav-title>
        </f7-navbar>
        <f7-list inline-labels no-hairlines-md v-model="visitPublish">
            <f7-list-input
                    label="参观大学"
                    type="select"
                    placeholder="请选择参观大学"
                    :value="visitPublish.school"
                    @input="visitPublish.school = $event.target.value"
            >
                <option v-for="university in universitys" :key="university.id" :label="university.name" :value="university.id" ></option>
            </f7-list-input>
            <f7-list-input
                    label="人数"
                    type="number"
                    placeholder="请输入人数"
                    validate
                    required
                    clear-button
                    :value="visitPublish.visitPeopleNumber"
                    @input="visitPublish.visitPeopleNumber = $event.target.value"
            ></f7-list-input>
            <f7-list-input
                    label="日期"
                    type="date"
                    placeholder="请输入日期"
                    :value="visitPublish.visitDate"
                    @input="visitPublish.visitDate = $event.target.value"
            ></f7-list-input>
            <f7-list-input
                    label="开始时间"
                    type="time"
                    placeholder="请输入开始时间"
                    validate
                    required
                    :value="visitPublish.visitTime"
                    @input="visitPublish.visitTime = $event.target.value"
            ></f7-list-input>
            <f7-list-input
                    label="参观方式"
                    type="select"
                    placeholder="请选择参观方式"
                    :value="visitPublish.visitVehicle"
                    @input="visitPublish.visitVehicle = $event.target.value"
            >
                <option v-for="vehicle in vehicles" :key="vehicle.id" :label="vehicle.name" :value="vehicle.id" ></option>
            </f7-list-input>
            <f7-list-input
                    label="联系人"
                    type="text"
                    placeholder="请输入联系人"
                    required
                    validate
                    clear-button
                    :value="visitPublish.visitContact"
                    @input="visitPublish.visitContact = $event.target.value"
            ></f7-list-input>
            <f7-list-input
                    label="联系电话"
                    type="tel"
                    placeholder="请输入联系电话"
                    required
                    validate
                    maxlength="11"
                    minlength="11"
                    clear-button
                    :value="visitPublish.visitContactNumber"
                    @input="visitPublish.visitContactNumber = $event.target.value"
            ></f7-list-input>
            <f7-list-input
                    label="附加要求"
                    type="text"
                    placeholder="请输入附加要求"
                    clear-button
                    :value="visitPublish.additionalRequirements"
                    @input="visitPublish.additionalRequirements = $event.target.value"
            ></f7-list-input>
        </f7-list>
        <f7-block>
            <f7-row tag="p">
                <f7-button type="submit" class="col" @click="submit" style="left: 150px">提交</f7-button>
                <f7-button type="reset"  class="col" @click="reset" style="left: 50px">重置</f7-button>
            </f7-row>
        </f7-block>
    </f7-page>
</template>
<script>
    export default {
        data(){
            return{
                visitPublish:{
                    school:'',
                    visitPeopleNumber:'',
                    visitDate:'',
                    visitTime:'',
                    visitVehicle:'',
                    visitContact:'',
                    visitContactNumber:'',
                    additionalRequirements:'',
                },
                universitys:[
                    {id: '1' , name: '清华大学' },
                    {id: '2' , name: '北京大学' },
                    {id: '3' , name: '浙江理工大学'},
                ],
                vehicles:[
                    {id: '1' , name: '步行' },
                    {id: '2' , name: '自备车辆' },
                    {id: '3' , name: '自行车'},
                ],
            }
        },
        methods:{
            submit(){
                //校验表单是否为空，写入数据库
                console.log(this.visitPublish);
                this.$f7router.back()
            },
            reset(){
                this.visitPublish={
                    school:'',
                    visitPeopleNumber:'',
                    visitDate:'',
                    visitTime:'',
                    visitVehicle:'',
                    visitContact:'',
                    visitContactNumber:'',
                    additionalRequirements:'',
                }
            },

        }
    }
</script>
<style scoped>

</style>