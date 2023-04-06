<template>
    <div class="input">
        <input value="12345" type="text">
        <div class="input__icons">
            <span class="icon-complexity-0 first-icon"></span>
            <a class="icon-update second-icon"></a>
        </div>
    </div>
</template>
  
<script>

export default {
    name: 'password-input'
}
</script>
  
<style lang="scss" scoped>
$aqua: #00f0ff;
$orange: #f8ef00;

input {
    color: $aqua;
    font-family: "Tomorrow", sans-serif;
    width: 588px;
    height: 64px;
    padding-left: 20px;
    border: 2px solid $aqua;
    background: rgba(0, 240, 255, 0.1);
    outline: none;
    pointer-events: none;

}

.input {
    position: relative;
    margin-top: 64px;

    &__icons {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 20px;

    }
}

.first-icon {
    margin-right: 12px;
}

.second-icon:before {
    transition: all 0.4s ease;
}

.second-icon:hover:before {
    color: $orange;
    transition: all 0.4s ease;
}
</style>
  