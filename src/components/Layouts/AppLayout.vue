<template>
    <div class="row">
        <div class="col-md-2">
            <header-view></header-view>
        </div>
        <div class="col-md-10">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import HeaderView from '@/components/Common/HeaderView';

    export default {
        name: "AppLayout",
        components: {HeaderView}
    }
</script>

<style lang="scss" scoped>
    .col-md-2{
        padding: 0;
    }
    .col-md-10{
        padding: 0;
    }
</style>
