<template>
    <f7-page name="settings">
        <f7-navbar back-link="Back">

            <f7-nav-title>发布新增</f7-nav-title>
        </f7-navbar>

<!--        <f7-swiper >-->
<!--            <f7-swiper-slide zoom>-->
<!--                -->
<!--            </f7-swiper-slide>-->
<!--        </f7-swiper>-->
        <f7-list inline-labels no-hairlines-md>
            <f7-list-item title="图片">

                <div class="addImage" @click="">

                    <f7-input type="file" class="uploadImg" @change=""></f7-input>
                </div>
            </f7-list-item>
            <f7-list-input
                    label="分类"
                    type="select"
                    placeholder="..."
            >

                <option v-for="good in goods" :key="good.id" :label="good.name" :value="good.name" :selected="good.selected"></option>
            </f7-list-input>
            <f7-list-input
                    label="名称"
                    type="select"
                    placeholder="..."
            >
                <option label="请选择" :selected="true"></option>
                <option v-for="good in goodsName" :key="good.gid" :label="good.name" :value="good.name" :selected="good.selected"></option>
            </f7-list-input>
            <f7-list-input type="file" label="图片" multiple accept="image/">

            </f7-list-input>
<!--            <f7-list-item>-->
<!--                <img src="" id="images">-->
<!--            </f7-list-item>-->
            <f7-list-input
                    label="供应商/作者"
                    type="text"
                    placeholder="供应商"
                    validate
                    required
            ></f7-list-input>
          <f7-list-input
                  label="购买日期"
                  type="date"
                  placeholder="Buy day"
                  defaultValue="2014-04-30"
          ></f7-list-input>
            <f7-list-input
                    label="原价"
                    type="number"
                    placeholder="Original-price"
                    required
                    validate
            ></f7-list-input>

            <f7-list-input
                    label="现价"
                    type="number"
                    placeholder="Present-price"
                    required
                    validate
            ></f7-list-input>
            <f7-list-input
                    label="联系电话"
                    type="tel"
                    placeholder="Phone"
                    required
                    validate
                    maxlength="11"
                    minlength="11"
                    clear-button
            ></f7-list-input>
            <f7-list-input
                    label="联系地址"
                    type="text"
                    placeholder="Address"
                    required
                    validate
            ></f7-list-input>
        </f7-list>

        <f7-block>
            <f7-row tag="p">
                <f7-button type="submit" class="col" round fill raised color="green">提交</f7-button>
                <f7-button type="reset" href="redierct:/" @click="refreshPag" class="col" round fill raised color="red">重置</f7-button>
            </f7-row>
        </f7-block>
    </f7-page>
</template>
<script>
export default {
    data(){
        return{
            goods:[
               {id: '1' , name: '家具' , selected:'false'},
               {id: '2' , name: '家电' , selected:'false'},
               {id: '3' , name: '书籍' , selected:'false'}
            ],
            goodsName: [
                {gid:'1' , name: '电视', selected:'false'},
                {gid:'2' , name: '电脑', selected:'false'},
                {gid:'3' , name: '冰箱', selected:'false'}
            ]
        }
    },
    methods:{
        refreshPag(){
            const self = this;
            // self.goods.forEach(e=>(e.selected='false'));
            // self.goodsName.forEach(e=>e.selected='false');
            for (let e of self.goods){
                e.selected='false';
            }
            for (let e of self.goodsName){
                e.selected='false';
            }
        }
    }
}
</script>
<style scoped>
    .addImage {
        height: 100px;
        width: 100px;
        margin: auto;
        cursor: pointer;
        position: relative;
        background: url("../static/pic/people.png") no-repeat;
        -webkit-background-size: cover;
        background-size: 100px 100px;
    }
    .addImage .uploadImg {
        position: absolute;
        right: 0;
        top:0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: pointer;
    }
</style>