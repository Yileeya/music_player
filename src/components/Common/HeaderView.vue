<template>
    <div style="background-color: #A6808C">
        <nav class="navbar bg-light">
            <ul class="nav navbar-nav">
                <li class="sub-title">
                    <h3>首頁</h3>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">熱門點播</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">排行</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">風格</a>
                </li>
            </ul>
        </nav>

    </div>
</template>

<script>
    export default {
        name: "HeaderView"
    }
</script>

<style scoped>
    .bg-light{
        background-color: #A6808C !important;
        color:            white;
        padding:          20%;
        height: 80vh;
    }
    .sub-title{
        letter-spacing: 1rem;
    }
    a{
        color: white!important;
    }
</style>