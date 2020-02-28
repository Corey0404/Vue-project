<template>
    <v-container>
        <v-row>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb3">Create new ad</h1>
                <v-form v-model="valid" ref="form" validation class="mb-6">
                  <v-text-field
                    label="Ad title"
                    name="title"
                    type="text"
                    v-model="title"
                    :rules="[v => !!v || 'Title is required']"
                    required
                  />

                  <v-textarea
                    label="Ad description"
                    name="description"
                    type="text"
                    v-model="description"
                    :rules="[v => !!v || 'Description is required']"
                  />
                </v-form>
                <v-row class="mb-3">
                  <v-flex xs12>
                    <v-btn class="warning" @click="triggerUpload">
                      Upload
                      <v-icon right dark>mdi-cloud-upload</v-icon>
                    </v-btn>
                    <input
                      ref="fileInput"
                      type="file"
                      style="display: none;"
                      accept="image/*"
                      @change="onFileChange"
                      >
                  </v-flex>
                </v-row>
                  <img :src="imageSrc" height="100" v-if="imageSrc">
                <v-flex xs12 class="mb-3">
                  <v-switch
                    v-model="promo"
                    label="Add to promo?"
                  ></v-switch>
                </v-flex>
                <v-flex xs12>
                  <v-spacer></v-spacer>
                  <v-btn
                    :loading="loading"
                    class="success"
                    @click="createAd"
                    :disabled="!valid || !image || loading"
                  >Create ad</v-btn>
                </v-flex>
            </v-flex>
        </v-row>
    </v-container>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      description: '',
      promo: false,
      valid: false,
      image: null,
      imageSrc: ''
    }
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  },
  methods: {
    createAd () {
      if (this.$refs.form.validate() && this.image) {
        // logic
        const ad = {
          title: this.title,
          description: this.description,
          promo: this.promo,
          image: this.image
        }
        this.$store.dispatch('createAd', ad)
          .then(() => {
            this.$router.push('/list')
          })
          .catch(() => {})
      }
    },
    triggerUpload () {
      this.$refs.fileInput.click()
    },
    onFileChange (event) {
      const file = event.target.files[0]
      const reader = new FileReader()
      reader.onload = e => {
        this.imageSrc = reader.result
      }
      reader.readAsDataURL(file)
      this.image = file
    }
  }
}
</script>
