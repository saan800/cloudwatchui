<template>
  <v-list dense>
    <template v-for="item in items">
      <v-layout v-if="item.heading" :key="item.heading" align-center>
        <v-flex xs6>
          <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
        </v-flex>
        <v-flex xs6 class="text-center">
          <a href="#!" class="body-2 black--text">EDIT</a>
        </v-flex>
      </v-layout>
      <v-list-group
        v-else-if="item.children"
        :key="item.text"
        v-model="item.model"
        :prepend-icon="item.model ? item.icon : item['icon-alt']"
        append-icon
      >
        <template v-slot:activator>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
        <v-list-item v-for="(child, i) in item.children" :key="i" @click>
          <v-list-item-action v-if="child.icon">
            <v-icon>{{ child.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ child.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
      <v-list-item v-else :key="item.text" @click>
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </template>
  </v-list>
</template>

<script lang='ts'>
import Vue from "vue";
import {
  mdiHomeVariantOutline,
  mdiHistory,
  mdiChevronUp,
  mdiChevronDown,
  mdiApplicationImport,
  mdiApplicationExport,
  mdiSettingsOutline
} from "@mdi/js";

export default Vue.extend({
  data: () => ({
    items: [
      { icon: mdiHomeVariantOutline, text: "Contacts" },
      { icon: mdiHistory, text: "Frequently contacted" },
      {
        icon: mdiChevronUp,
        "icon-alt": mdiChevronDown,
        text: "More",
        model: false,
        children: [
          { icon: mdiApplicationImport, text: "Import" },
          { icon: mdiApplicationExport, text: "Export" },
          { text: "Print" },
          { text: "Undo changes" },
          { text: "Other contacts" }
        ]
      },
      { icon: mdiSettingsOutline, text: "Settings" }
    ]
  })
});
</script>
