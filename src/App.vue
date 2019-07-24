<template>
  <v-app>
    <v-navigation-drawer
        v-model="drawer"
        :clipped="$vuetify.breakpoint.lgAndUp"
        app
    >
      <NavigationDrawer />
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="blue darken-3"
      dark
    >
      <v-toolbar-title
        style="width: 300px"
        class="ml-0 pl-4"
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <span class="hidden-sm-and-down">CloudWatch Logs Viewer</span>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        :prepend-inner-icon=icons.search
        label="Search"
        class="hidden-sm-and-down"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>{{ icons.apps }}</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>{{ icons.notifications }}</v-icon>
      </v-btn>
      <v-btn
        icon
        large
      >
        <v-avatar
          size="32px"
          item
        >
          <v-img
            src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
            alt="Vuetify"
          >
          </v-img></v-avatar>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-container
        fluid
        fill-height
      >
        <v-layout
          align-start
          justify-start
        >
          <HelloWorld />
        </v-layout>
      </v-container>
    </v-content>

    <v-btn
      bottom
      color="pink"
      dark
      fab
      fixed
      right
      @click="dialog = !dialog"
    >
      <v-icon>{{ icons.add }}</v-icon>
    </v-btn>
    <v-dialog
        v-model="dialog"
        width="800px"
    >
      <CreateContact />
    </v-dialog>
  </v-app>
</template>

<script lang='ts'>
import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';
import NavigationDrawer from '@/components/layout/NavigationDrawer.vue'
import CreateContact from '@/components/contacts/CreateContact.vue'
import {
  // top nav bar
  mdiMagnify, mdiApps, mdiBellOutline, 
  // other
  mdiPlus
} from '@mdi/js';

export default Vue.extend({
  name: 'App',
  components: {
    HelloWorld, NavigationDrawer, CreateContact
  },
  props: {
    source: String,
  },
  data: () => ({
    dialog: false,
    drawer: null,
    icons: {
      search: mdiMagnify,
      apps: mdiApps,
      notifications: mdiBellOutline,
      add: mdiPlus
    }
  })
});
</script>
