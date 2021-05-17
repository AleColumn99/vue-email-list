const app = new Vue ({

  el: '#app',
  data: {

    emails: []

  },
  mounted() {

    this.callAPI();

  },
  methods: {

    callAPI() {
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then(resp => {
        this.emails.push(resp.data.response);
        if(this.emails.length < 10) this.callAPI();
        console.log(this.emails);
      }).catch(err => {
        console.log(err);
      })
    }

  }

});