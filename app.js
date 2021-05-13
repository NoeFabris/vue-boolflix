new Vue ({
    el: '#root',
    data: {
        search: null,
        searchResults: [],
        apiKey: '3daf6c4288b91bf41cfa792106caf635',

    },
    computed: {

    },
    methods: {

        searchElements() {
            if (!this.search) {
                return alert('Inserisci qualcosa nella ricerca')

            } else {
                
                axios.get('https://api.themoviedb.org/3/search/movie', {
                    params: {
                        api_key: this.apiKey,
                        query: this.search,
                        language: 'it-IT'
                    }
                })
                    .then((resp) => {
                    this.searchResults = resp.data.results
                })
            }
        }

    },
    mounted() {

    }
})