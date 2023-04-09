<template>
    <div class="checkboxes">
        <div class="checkboxes__container">
            <div class="checkboxes__content">
                <div class="checkboxes__upper">
                    <div class="checkbox">
                        <input @change="updateCheckbox" id="upperCase" type="checkbox">
                        <label for="upperCase">Uppercase letters</label>
                    </div>
                    <div class="checkbox">
                        <input @change="updateCheckbox" checked id="lowerCase" type="checkbox">
                        <label for="lowerCase">Lowercase letters</label>
                    </div>
                </div>
                <div class="checkboxes__lower">
                    <div class="checkbox">
                        <input @change="updateCheckbox" checked id="number" type="checkbox">
                        <label for="number">Numbers</label>
                    </div>
                    <div class="checkbox last">
                        <input @change="updateCheckbox" id="symbol" type="checkbox">
                        <label for="symbol">Symbols</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>

export default {
    name: 'password-checkbox',
    methods: {
        updateCheckbox(e) {
            let checkbox = e.target;
            if (!checkbox.checked) {
                this.$store.state.password.checked[checkbox.id] = false;
            } else {
                this.$store.state.password.checked[checkbox.id] = true;
            }
        }
    }
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

@media (max-width: 1115px) {
    .checkboxes__container {
        margin: auto;
    }
}

@media (max-width: 560px) {
    .checkboxes {

        &__upper,
        &__lower {
            flex-direction: column;
        }

        .last {
            padding: 20px 6px 0px 0px;
        }

        .checkbox:nth-child(2) {
            padding-left: 2px;
            padding-top: 20px;
        }
    }
}
</style>
  