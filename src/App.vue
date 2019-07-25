<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" app>
      <NavigationDrawer/>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="blue darken-3" dark dense>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4 hidden-sm-and-down">
        <span class="title">CloudWatch Logs</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-layout align-center style="max-width: 200px">
        <v-select
          :prepend-icon-cb="() => {}"
          :prepend-icon="icons.aws"
          :items="awsRegions"
          v-model="currentAwsRegion"
          required
          single-line
          color="white"
          hide-details
          class="pl-4"
          label="Region"
        ></v-select>
      </v-layout>

      <v-menu
        v-model="menu"
        :close-on-content-click="false"
        :nudge-width="200"
        class="pl-4"
        offset-y
        offset-x
      >
        <template v-slot:activator="{ on }">
          <v-btn dark text v-on="on">Login</v-btn>
        </template>

        <v-card>
          <v-card-title class="accent white--text" dark>Login to AWS</v-card-title>
          <v-container grid-list-sm>
            <v-form ref="form" v-model="signinform.valid" lazy-validation>
              <v-layout wrap>
                <v-flex xs12>
                  <v-text-field
                    :prepend-icon="icons.awsAccessKey"
                    placeholder="AWS Access Key"
                    :rules="signinform.awsAccessKeyRules"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                    :prepend-icon="icons.awsSecretKey"
                    placeholder="AWS Secret Key"
                    :rules="signinform.awsSecretKeyRules"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                    :prepend-icon="icons.awsSessionToken"
                    placeholder="AWS Session Token"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-form>
          </v-container>
          <v-card-actions>
            <!-- TODO: change form if using combined creds -->
            <v-btn text>Use Combined Creds</v-btn>
            <v-spacer></v-spacer>
            <v-btn text @click="cancelButtonActions">Cancel</v-btn>
            <v-btn color="primary" text @click="submitButtonActions">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>
    </v-app-bar>

    <v-content>
      <v-container fluid fill-height>
        <v-layout align-start justify-start>
          <HelloWorld/>
        </v-layout>
      </v-container>
    </v-content>

    <v-btn bottom color="pink" dark fab fixed right @click="dialog = !dialog">
      <v-icon>{{ icons.add }}</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" width="800px">
      <CreateContact/>
    </v-dialog>

    <v-footer color="primary" app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script lang='ts'>
import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
import NavigationDrawer from '@/components/layout/NavigationDrawer.vue'
import CreateContact from '@/components/contacts/CreateContact.vue'

import {
  // top nav bar
  mdiMagnify,
  // auth details
  mdiAws,
  mdiLoginVariant,
  mdiShieldOffOutline,
  mdiShieldCheckOutline,
  mdiShieldAccountOutline,
  mdiShieldKeyOutline,
  mdiShieldLockOutline,
  // other
  mdiPlus
} from '@mdi/js'

export default Vue.extend({
  name: 'App',
  components: {
    HelloWorld,
    NavigationDrawer,
    CreateContact
  },
  props: {},
  data: () => ({
    isLoggedIn: false, // from store
    currentAwsRegion: 'eu-west-1', // from store
    awsRegions: ['eu-west-1', 'eu-central-1'], // from store
    dialog: false,
    drawer: null,
    menu: false,
    icons: {
      search: mdiShieldAccountOutline,
      add: mdiPlus,
      aws: mdiAws,
      loggedIn: mdiShieldCheckOutline,
      loggedOut: mdiLoginVariant,
      awsAccessKey: mdiShieldAccountOutline,
      awsSecretKey: mdiShieldKeyOutline,
      awsSessionToken: mdiShieldLockOutline
    },
    signinform: {
      valid: false,
      awsAccessKeyRules: [(v: string) => !!v || 'AWS Access Key is required'],
      awsSecretKeyRules: [(v: string) => !!v || 'AWS Secret Key is required']
    }
  }),
  methods: {
    submitButtonActions() {
      if (this.$refs.form.validate()) {
        this.$refs.form.reset()
        this.menu = false
      }
    },
    cancelButtonActions() {
      this.$refs.form.reset()
      this.$refs.form.resetValidation()
      this.menu = false
    }
  }
})
</script>
