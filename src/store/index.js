import { createStore } from 'vuex';

import { passwordModule } from '@/store/passwordModule.js';

export default createStore({
    modules: {
        password: passwordModule
    }
})