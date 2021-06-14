import { api } from './api'

api.interceptors.request.use(config => {
    const token = "dfca496b57994b17cd605b1ed8862140"
    config.headers.Authorization = `Bearer ${token}`;

    return config;
})

const apiCalls = {
    async getTrending() {
        const data = await api.get("movie/popular?api_key=dfca496b57994b17cd605b1ed8862140")
        
        return data.data.results;
    },
    async getMovies() {
        const data = await api.post("trending/movie/day?api_key=dfca496b57994b17cd605b1ed8862140")
        
        return data.data.results;
    },
    async getGenres() {
        const data = await api.get("genre/movie/list?api_key=dfca496b57994b17cd605b1ed8862140")

        return data.data.genres
    },
    async search(query: string = '') {
        const data = await api.get(`search/movie?api_key=dfca496b57994b17cd605b1ed8862140&query=${query}22131231231231`)

        return data.data.results
    }
}

export default apiCalls

 

