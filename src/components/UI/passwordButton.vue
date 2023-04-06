<template>
    <button>
        <div class="button__content">
            <span class="button__text">Copy Password_</span>
            <div class="button__icon">
                <a class="icon-arrow"></a>
            </div>
        </div>
        <hr class="button__line">
        <div class="button__triangle"></div>
    </button>
</template>
  
<script>

export default {
    name: 'password-button'
}
</script>
  
<style lang="scss">
$red: #FF003C;
$orange: #f8ef00;
$aqua: #00f0ff;
$light: #fafafa;

button {
    cursor: pointer;
    border: none;
    position: relative;
    width: 350px;
    height: 64px;
    background: $orange;
    transition: all 0.4s ease;
}

button:hover {
    background: $red;
    color: $light !important;
    transition: all 0.4s ease;
}

.button {
    &__content {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    &__text {
        font-family: 'Tomorrow';
        font-weight: 600;
        line-height: 24px;
        letter-spacing: 0.2em;
        text-transform: uppercase;
    }

    &__line {
        position: absolute;
        right: 0;
        top: 0;
        color: $red;
        border: 2px solid $red;
        height: 100%;
    }

    &__triangle {
        position: absolute;
        bottom: 0;
        width: 0;
        height: 0;
        border: 0 solid transparent;
        border-right-width: 15px;
        border-left-width: 0px;
        border-bottom: 15px solid black
    }
}
</style>
  