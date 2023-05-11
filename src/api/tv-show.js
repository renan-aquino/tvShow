import axios from "axios";
import { BASE_URL, API_KEY_PARAM, ORIGINAL_LANGUAGE } from "../config";

export class TVShowAPI {
    static async fetchPopulars() {
        const response = await axios.get(`${BASE_URL}tv/top_rated${API_KEY_PARAM}${ORIGINAL_LANGUAGE}`);
        return response.data.results;
    }

    static async fetchRecommendations(tvShowId) {
        const response = await axios.get(`${BASE_URL}tv/${tvShowId}/recommendations${API_KEY_PARAM}`);
        return response.data.results;
    }

    static async fetchByTitle(title) {
        const response = await axios.get(`${BASE_URL}search/tv${API_KEY_PARAM}&query=${title}${ORIGINAL_LANGUAGE}`);
        return response.data.results;
    }
}

