<template>
  <div v-if="!loading">
    <v-container>
      <v-row>
        <v-flex xs12>
          <v-carousel>
            <v-carousel-item v-for="ad in promoAds" :key="ad.id" :src="ad.imageSrc">
              <div class="car-link">
                <v-btn class="error" :to="'/ad/' + ad.id">{{ad.title}}</v-btn>
              </div>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-row>
    </v-container>
    <v-container>
      <v-row class="d-flex justify-space-between">
        <v-col class="v-col" xs12 sm6 md4 v-for="ad of ads" :key="ad.id">
          <v-card max-width="300">
            <v-img height="200px" :src="ad.imageSrc">
            </v-img>
            <v-card-title class="pb-0">{{ad.title}}</v-card-title>
            <v-card-text class="text--primary pb-0">
              <div>{{ad.description}}</div>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text large :to="'/ad/' + ad.id">Open</v-btn>
              <app-buy-modal :ad="ad"></app-buy-modal>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <div v-else>
    <v-container>
      <v-row>
        <v-flex xs12 class="d-flex justify-sm-center pt-10">
          <v-progress-circular
            :size="100"
            :width="8"
            indeterminate
            color="purple"
          ></v-progress-circular>
        </v-flex>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    promoAds () {
      return this.$store.getters.promoAds
    },
    ads () {
      return this.$store.getters.ads
    },
    loading () {
      return this.$store.getters.loading
    }
  }
}

</script>

<style scoped>
  .v-col {
    flex-grow: 0;
  }

  .car-link {
    position: absolute;
    bottom: 50px;
    left: 50%;
    background: rgba(0, 0, 0, .5);
    transform: translate(-50%, 0);
    padding: 5px 15px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;

  }

</style>
