<template>
  <v-container>
    <v-card>
      <v-card-title class="grey darken-2">Create contact</v-card-title>
      <v-container grid-list-sm>
        <v-layout wrap>
          <v-flex xs12 align-center justify-space-between>
            <v-layout align-center>
              <v-avatar size="40px" class="mr-4">
                <img src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png" alt />
              </v-avatar>
              <v-text-field placeholder="Name"></v-text-field>
            </v-layout>
          </v-flex>
          <v-flex xs6>
            <v-text-field :prepend-icon="icons.company" placeholder="Company"></v-text-field>
          </v-flex>
          <v-flex xs6>
            <v-text-field placeholder="Job title"></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field :prepend-icon="icons.email" placeholder="Email"></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field type="tel" :prepend-icon="icons.phone" placeholder="(000) 000 - 0000"></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field :prepend-icon="icons.notes" placeholder="Notes"></v-text-field>
          </v-flex>
        </v-layout>
      </v-container>
      <v-card-actions>
        <v-btn text color="primary">More</v-btn>
        <v-spacer></v-spacer>
        <v-btn text color="primary" @click="dialog = false">Cancel</v-btn>
        <v-btn text @click="dialog = false">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>


<script lang='ts'>
import Vue from "vue";
import {
  mdiDomain,
  mdiEmailOutline,
  mdiCellphoneAndroid,
  mdiText
} from "@mdi/js";

export default Vue.extend({
  data: () => ({
    icons: {
      company: mdiDomain,
      email: mdiEmailOutline,
      phone: mdiCellphoneAndroid,
      notes: mdiText
    }
  })
});
</script>

