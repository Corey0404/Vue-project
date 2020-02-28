<template>
    <v-dialog width="600px" v-model="dialog">
      <template v-slot:activator="{ on }">
        <v-btn class="primary ml-3" text v-on="on">Buy</v-btn>
      </template>
      <v-card>
        <v-container>
           <v-row>
               <v-flex xs12>
                 <v-card-title>
                   <h1 class="text--primary">Do you want to buy it?</h1>
                 </v-card-title>
               </v-flex>
           </v-row>
        </v-container>
        <v-divider></v-divider>
        <v-container>
           <v-row>
               <v-flex xs12>
                 <v-card-text>
                   <v-text-field
                    label="Your name"
                    name="name"
                    type="text"
                    v-model="name"
                  />
                 </v-card-text>
                 <v-card-text>
                   <v-text-field
                    label="Your phone"
                    name="phone"
                    type="text"
                    aria-multiline=""
                    v-model="phone"
                  />
                 </v-card-text>
               </v-flex>
           </v-row>
        </v-container>
        <v-divider></v-divider>
        <v-container>
           <v-row>
               <v-flex xs12>
                 <v-card-actions>
                   <v-spacer></v-spacer>
                   <v-btn
                    text
                    @click="onCancel"
                    :disabled="localLoading"
                    >Close</v-btn>
                   <v-btn
                    class="success"
                    @click="onSave"
                    :disabled="localLoading"
                    :loading="localLoading"
                    >Buy it!</v-btn>
                 </v-card-actions>
               </v-flex>
           </v-row>
        </v-container>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
  props: ['ad'],
  data () {
    return {
      dialog: false,
      name: '',
      phone: '',
      localLoading: false
    }
  },
  methods: {
    onCancel () {
      this.name = ''
      this.phone = ''
      this.dialog = false
    },
    onSave () {
      if (this.name !== '' && this.phone !== '') {
        this.localLoading = true
        this.$store.dispatch('createOrder', {
          name: this.name,
          phone: this.phone,
          adId: this.ad.id,
          ownerId: this.ad.ownerId
        })
          .finally(() => {
            this.name = ''
            this.phone = ''
            this.localLoading = false
            this.dialog = false
          })
      }
    }
  }
}
</script>
