<template>
    <v-dialog width="400px" v-model="dialog">
      <template v-slot:activator="{ on }">
        <v-btn class="warning" text v-on="on">Edit</v-btn>
      </template>
      <v-card>
        <v-container>
           <v-row>
               <v-flex xs12>
                 <v-card-title>
                   <h1 class="text--primary">Edit ad</h1>
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
                    label="Title"
                    name="title"
                    type="text"
                    v-model="editedTitle"
                  />
                 </v-card-text>
                 <v-card-text>
                   <v-textarea
                    label="Description"
                    name="description"
                    type="text"
                    aria-multiline=""
                    v-model="editedDescription"
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
                   <v-btn text @click="onCancel">Cancel</v-btn>
                   <v-btn class="success" @click="onSave">Save</v-btn>
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
      editedDescription: this.ad.description,
      editedTitle: this.ad.title
    }
  },
  methods: {
    onCancel () {
      this.editedDescription = this.ad.description
      this.editedTitle = this.ad.title
      this.dialog = false
    },
    onSave () {
      if (this.editedDescription !== '' && this.editedTitle !== '') {
        this.$store.dispatch('apdateAd', {
          title: this.editedTitle,
          description: this.editedDescription,
          id: this.ad.id
        })
        this.dialog = false
      }
    }
  }
}
</script>
