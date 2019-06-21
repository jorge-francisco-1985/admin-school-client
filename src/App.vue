<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      temporary
      clipped
      app
      dark
      
      
    >
      
    </v-navigation-drawer >
    <v-toolbar color="primary" dark app fixed clipped-left height="110px">
      <v-toolbar-side-icon  @click="drawer = !drawer"></v-toolbar-side-icon>
      <span class="title ml-3 mr-5">Google&nbsp;<span class="font-weight-light">Keep</span></span>
      <v-text-field
        solo-inverted
        dark
        flat
        hide-details
        label="Buscar"
        prepend-inner-icon="search"
      ></v-text-field>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <v-container >
        <v-card >
          <v-card-title primary-title>
            title
          </v-card-title>
          <v-card-text>
            <router-view></router-view>
          </v-card-text>
        </v-card>
      </v-container>
      
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      dark: true,
      drawer: false,
      primaryDrawer: {
        model: null,
        type: 'default (no property)',
        clipped: false,
        floating: false,
        mini: false
      },
      footer: {
        inset: false
      }
    })
  }
</script>
