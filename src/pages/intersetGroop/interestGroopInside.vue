<template>
    <f7-page>
        <f7-navbar back-link="Back">
            <f7-nav-title>xx团队</f7-nav-title>
        </f7-navbar>
        <f7-toolbar tabbar :position="isBottom ? 'bottom' : 'top'">
            <f7-link
                     v-for="(tab, index) in tabs"
                     :key="tab"
                     :tab-link="`#${tab}`"
                     :tab-link-active="index === 0"
            > {{tab}}
            </f7-link>
        </f7-toolbar>
        <f7-tabs>
            <f7-tab
                    v-for="(tab, index) in tabs"
                    :key="tab"
                    :id="`${tab}`"
                    class="page-content"
                    :tab-active="index === 0"
            >
                <f7-block>
                    {{tab}}
                </f7-block>

            </f7-tab>
        </f7-tabs>

    </f7-page>
</template>

<script>
    export default {
        data() {
            return {
                isBottom: false,
                tabs:['风采', '记事', '趣事', '通知', '交流区',]

            };
        }
    }
</script>

<style scoped>

</style>