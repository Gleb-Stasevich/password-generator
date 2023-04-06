<template>
    <section class="history">
        <div class="history__container">
            <div class="history__content">
                <h2 class="history__title">Password history</h2>
                <div class="history__blocks">
                    <div class="block">
                        <div class="block__data">
                            <span class="password">^d3>~9YDA8s}cWN9L_P^</span>
                            <br>
                            <span class="date">1a4Txe3m*%Qm^vdXs!</span>
                        </div>
                        <div class="block__icon">
                            <a class="icon-copy"></a>
                        </div>
                    </div>

                    <div class="block">
                        <div class="block__data">
                            <span class="password">^d3>~9YDA8s}cWN9L_P^</span>
                            <br>
                            <span class="date">1a4Txe3m*%Qm^vdXs!</span>
                        </div>
                        <div class="block__icon">
                            <a class="icon-copy"></a>
                        </div>
                    </div>

                    <div class="block">
                        <div class="block__data">
                            <span class="password">^d3>~9YDA8s}cWN9L_P^</span>
                            <br>
                            <span class="date">1a4Txe3m*%Qm^vdXs!</span>
                        </div>
                        <div class="block__icon">
                            <a class="icon-copy"></a>
                        </div>
                    </div>

                    <div class="block">
                        <div class="block__data">
                            <span class="password">^d3>~9YDA8s}cWN9L_P^</span>
                            <br>
                            <span class="date">1a4Txe3m*%Qm^vdXs!</span>
                        </div>
                        <div class="block__icon">
                            <a class="icon-copy"></a>
                        </div>
                    </div>

                    <div class="block">
                        <div class="block__data">
                            <span class="password">^d3>~9YDA8s}cWN9L_P^</span>
                            <br>
                            <span class="date">1a4Txe3m*%Qm^vdXs!</span>
                        </div>
                        <div class="block__icon">
                            <a class="icon-copy"></a>
                        </div>
                    </div>

                    <div class="block">
                        <div class="block__data">
                            <span class="password">^d3>~9YDA8s}cWN9L_P^</span>
                            <br>
                            <span class="date">1a4Txe3m*%Qm^vdXs!</span>
                        </div>
                        <div class="block__icon">
                            <a class="icon-copy"></a>
                        </div>
                    </div>
                </div>
                <span class="clear">Clear history</span>
            </div>
        </div>
    </section>
</template>
  
<script>

export default {


}
</script>
  
<style lang="scss">
$orange: #f8ef00;
$light: #fafafa;
$grey: #bbbbbb;
$aqua: #00f0ff;

.history {


    &__container {
        max-width: 390px;
    }

    &__blocks {
        padding-top: 42px;
    }

    &__title {
        font-family: 'Tomorrow';
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        color: $light;
    }
}

.block {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__icon {
        margin-left: 10px;
    }
}

.block:not(:first-child) {
    margin: 20px 0px;
}

.block:last-child {
    margin: 0;
    margin-top: 20px;
    margin-bottom: 24px;
}

.password {
    font-family: 'Tomorrow';
    line-height: 24px;
    letter-spacing: 0.2em;
    color: $light;
    opacity: 0.8;
}

.date {
    font-family: 'Barlow';
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: $grey;
    opacity: 0.8;
}

.clear {
    cursor: pointer;
    margin-top: 24px;
    font-family: 'Tomorrow';
    line-height: 24px;
    letter-spacing: 0.2em;
    color: #F8EF00;
    transition: all 0.4s ease;
}

.clear:hover {
    color: $aqua;
    transition: all 0.4s ease;
}

.icon-copy:before {
    color: $light;
    transition: all 0.4s ease;
}

.icon-copy:hover:before {
    color: $orange;
    transition: all 0.4s ease;
}
</style>
  