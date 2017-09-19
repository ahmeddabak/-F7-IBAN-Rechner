// Import Vue
import Vue from 'vue';

// Import F7
import Framework7 from 'framework7';

let $$ = window.$$ = Dom7;

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue';

// Import F7 iOS Theme Styles
import Framework7Theme from 'framework7/dist/css/framework7.ios.min.css';
import Framework7ThemeColors from 'framework7/dist/css/framework7.ios.colors.min.css';

// Import App Custom Styles
import AppStyles from './assets/sass/main.scss';


// Import App Component
import App from './main.vue';

// Init F7 Vue Plugin
Vue.use(Framework7Vue);


// Init App
let app = new Vue({
    el: '#app',
    template: '<app/>',
    // Init Framework7 by passing parameters here
    framework7: {
        root: '#app',
        /* Uncomment to enable Material theme: */
        // material: true,
        // routes: Routes
    },
    // Register App Component
    components: {
        app: App
    }
});