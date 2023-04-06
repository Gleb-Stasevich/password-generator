<template>
    <div class="checkboxes">
        <div class="checkboxes__container">
            <div class="checkboxes__content">
                <div class="checkboxes__upper">
                    <div class="checkbox">
                        <input id="1" type="checkbox">
                        <label for="1">Uppercase letters</label>
                    </div>
                    <div class="checkbox">
                        <input id="2" type="checkbox">
                        <label for="2">Lowercase letters</label>
                    </div>
                </div>
                <div class="checkboxes__lower">
                    <div class="checkbox">
                        <input id="3" type="checkbox">
                        <label for="3">Numbers</label>
                    </div>
                    <div class="checkbox last">
                        <input id="4" type="checkbox">
                        <label for="4">Symbols</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>

export default {
    name: 'password-checkbox'
}
</script>
  
<style lang="scss" scoped>
$orange: #f8ef00;
$light: #fafafa;

.checkboxes {

    margin-top: 64px;

    &__container {
        max-width: 512px;
    }

    &__upper,
    &__lower {
        display: flex;
        align-items: center;
    }

    &__upper {
        justify-content: space-between;
    }

    &__lower {
        margin-top: 28px;
    }
}


.checkbox {

    display: flex;

    input {
        display: block;
        cursor: pointer;
        width: 24px;
        height: 24px;
        position: relative;
    }

    input:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: black;
        border: 2px solid $orange;
    }

    input:checked:before {
        background-color: orange;
    }

    label {
        margin-top: 2px;
        display: block;
        cursor: pointer;
        margin-left: 15px;
        font-family: 'Tomorrow';
        line-height: 24px;
        letter-spacing: 0.2em;
        color: $light;
    }
}

.last {
    padding-left: 150px;
}
</style>
  