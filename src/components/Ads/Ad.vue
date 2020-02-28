<template>
    <v-container>
        <v-row>
            <v-flex xs12>
                <v-card
                  v-if="!loading"
                  class="mx-auto"
                  max-width="1000">
                  <v-img
                    :src="ad.imageSrc"
                  ></v-img>
                  <v-card-text>
                    <h1 class="text--primary mb-3">{{ad.title}}</h1>
                    <p>{{ad.description}}</p>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <addEditAdModal :ad="ad" v-if="isOwner"></addEditAdModal>
                   <app-buy-modal :ad="ad"></app-buy-modal>
                  </v-card-actions>
                </v-card>
                <div v-else class="text-xs-center">
                  <v-flex xs12 class="d-flex justify-sm-center pt-10">
                  <v-progress-circular
                    :size="100"
                    :width="8"
                    indeterminate
                    color="purple"
                  ></v-progress-circular>
                  </v-flex>
                </div>
            </v-flex>
        </v-row>
    </v-container>
</template>

<script>
import EditAdModal from './EditAdModal'
export default {
  props: ['id'],
  computed: {
    ad () {
      const id = this.id
      return this.$store.getters.adById(id)
    },
    loading () {
      return this.$store.getters.loading
    },
    isOwner () {
      return this.ad.ownerId === this.$store.getters.user.id
    }
  },
  components: {
    addEditAdModal: EditAdModal
  }
}
</script>
