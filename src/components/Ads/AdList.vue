<template>
    <v-container>
        <v-row v-if="!loading && myAds.length !== 0">
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb-3">My ads</h1>
                <v-card
                  class="elevation-10 mb-5"
                  v-for="ad in myAds"
                  :key="ad.id"
                  >
                  <v-row class="mr-0">
                    <v-flex xs4>
                      <v-img
                        :src="ad.imageSrc"
                        height="160px"
                      >
                      </v-img>
                    </v-flex>
                    <v-flex xs8>
                      <v-card-text>
                        <h2 class="text--primary">{{ad.title}}</h2>
                        <p>{{ad.description}}</p>
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          class="info"
                          :to="'/ad/' + ad.id"
                          >Open</v-btn>
                      </v-card-actions>
                    </v-flex>
                  </v-row>
                </v-card>
            </v-flex>
        </v-row>
        <v-row v-else-if="!loading && myAds.length === 0">
          <v-flex xs12 class="d-flex justify-sm-center">
            <h1 class="text--primary">You have no ads</h1>
          </v-flex>
        </v-row>
        <v-row v-else>
          <v-flex xs12 class="text-xs-center">
             <v-progress-circular
              :size="100"
              :width="8"
              indeterminate
              color="purple"
            ></v-progress-circular>
          </v-flex>
        </v-row>
    </v-container>
</template>

<script>
export default {
  computed: {
    myAds () {
      return this.$store.getters.myAds
    },
    loading () {
      return this.$store.getters.loading
    }
  }
}
</script>
