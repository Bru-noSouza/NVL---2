const app = new Vue({
  el: "#usuarios",
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    this.loadUsers();
  },

  methods: {
    async loadUsers() {
      const response = await fetch("https://reqres.in/api/users?per_page=10");
      const data = await response.json();
      this.users = data.data;
    },
  },
});
