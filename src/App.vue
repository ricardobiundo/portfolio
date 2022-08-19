<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        Koffiecode
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://linkedin.com/in/ricardobiundo/"
        target="_blank"
        text
      >
        <v-icon>mdi-linkedin</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <CurriculumComponent/>
    </v-main>
  </v-app>
</template>

<script>
import CurriculumComponent from './components/CurriculumComponent';

export default {
  name: 'App',

  components: {
    CurriculumComponent,
  },

  data: () => ({
    //
  }),
};
</script>
