<template>
  help
  <div class="page">
    <h4>Thêm liên hệ</h4>
    <ContactForm :contact="contact" @submit:contact="createContact" />
    <p>{{ message }}</p>
  </div>
</template>
<script>
import ContactService from "@/services/contact.service";
import ContactForm from "../components/ContactForm.vue";
const contactService = new ContactService

export default {
  components: {
    ContactForm,
  },
  props: {
    id: ""
  },
  data() {
    return {
      contact: {},
      message: "",
    };
  },
  methods: {
    async createContact(data) {
      try {
        await contactService.create(this.contact)
        this.message = "Thêm mới thành công"
      } catch (error) {
        console.log(error)
      }
    },
  }
}
</script>