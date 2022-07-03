import createApiClient from './api.service'

class ContactService {
  constructor(baseUrl = "/") {
    this.api = createApiClient(baseUrl)
  }

  async getAll() {
    return (await this.api.get("/api/contacts")).data
  }
  async create(data) {
    return (await this.api.post("/api/contacts", data)).data
  }
  async deleteAll() {
    return (await this.api.delete("/api/contacts")).data
  }
  async get(id) {
    return (await this.api.get(`/api/contacts/${id}`)).data
  }
  async update(id, data) {
    return (await this.api.put(`/api/contacts/${id}`, data)).data
  }
  async delete(id) {
    return (await this.api.delete(`/api/contacts/${id}`)).data
  }
}

export default ContactService