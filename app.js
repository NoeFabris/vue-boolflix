new Vue ({
    el: '#root',
    data: {
        search: null,
        movieResults: [],
        seriesResults: [],
        apiKey: '3daf6c4288b91bf41cfa792106caf635',


    },
    computed: {

    },
    methods: {

        searchElements() {
            if (!this.search) {

                return alert('Inserisci qualcosa nella ricerca')

            } else {

                this.movieSearch()
                this.seriesSearch()
            
            }
        },

        movieSearch() {

            this.movieResults = []
                axios.get('https://api.themoviedb.org/3/search/movie', {
                    params: {
                        api_key: this.apiKey,
                        query: this.search,
                        language: 'it-IT'
                    }
                })
                    .then((resp) => {
                        if ((resp.data.results).length == 0) {

                            alert('Nessun film trovato')
                            
                        } else {

                            this.movieResults = resp.data.results
                        }
                    })
            
        },

        seriesSearch() {
            this.seriesResults = []
                axios.get('https://api.themoviedb.org/3/search/tv', {
                    params: {
                        api_key: this.apiKey,
                        query: this.search,
                        language: 'it-IT'
                    }
                })
                    .then((resp) => {
                        if ((resp.data.results).length == 0) {

                            alert('Nessuna serie trovata')
                            
                        } else {

                            this.seriesResults = resp.data.results
                        }
                    })
        },

        langFlag(lang) {
            console.log(lang)
            const langToFlag = {
                'en': ['gb'],
                'ja': ['jp']
            }

            const fallBackFlag = 'la'
            
            // aggiungere check dei nomi delle bandiere in .svg
            if (Object.keys(langToFlag).includes(lang)) {
                console.log(langToFlag[lang])
                return `flag-icon-${langToFlag[lang]}`
            } else {
                return `flag-icon-${lang}`
            }
        }
    
    },
    mounted() {

    }
})