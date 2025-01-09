<template>
    <div class="container">
        <div class="lore">
            <div class="lore_head">
                <h2 class="title">每日物语</h2>
            </div>
            <div class="lore_content">
                <p>少年不惧岁月长，彼方尚有荣光在。</p>
                <p>少年不惧岁月长，彼方尚有荣光在。</p>
                <p>少年不惧岁月长，彼方尚有荣光在。</p>
                <p>少年不惧岁月长，彼方尚有荣光在。</p>
                <p>少年不惧岁月长，彼方尚有荣光在。</p>
                <p>少年不惧岁月长，彼方尚有荣光在。</p>
                <p>少年不惧岁月长，彼方尚有荣光在。</p>
                <p>少年不惧岁月长，彼方尚有荣光在。</p>
                <p>少年不惧岁月长，彼方尚有荣光在。</p>
                <p>少年不惧岁月长，彼方尚有荣光在。</p>
                <p>少年不惧岁月长，彼方尚有荣光在。</p>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'Lore'
}
</script>

<style lang="less" scoped>
.container {
    width: 80%;
    // background-color: gray;
    border: 1px solid gray;
    margin: 0 auto;
    padding-top: 50px;
    box-sizing: border-box;

    .lore {
        display: flex;
        flex-flow: column;
        align-items: center;
    }

    .lore_head {
        position: relative;
    }

    .lore_head .title {
        font-size: 30px;
    }

    .lore_head .title::after {
        content: "";
        position: absolute;
        left: -50%;
        bottom: -10px;
        width: 250px;
        height: 2px;
        background-color: #000;
        border-bottom: 1px solid #ccc;
    }

    .lore_content {
        margin-top: 30px;
    }
}
</style>
