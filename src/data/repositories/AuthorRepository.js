import axiosInstance from "../api/AxiosInstance";

class AuthorRepository {
    async fetchAuthors() {
        try {
            const apiCalls = [];
            for(let i = 300; i < 350; i ++) {
                apiCalls.push(axiosInstance.get(`/characters/${i}`));
            }

            const response = await Promise.all(apiCalls);
        return response.map(response => response.data);
        } catch(error) {
            console.error("AuthorRepository: fetchAuthors: " + error);
        }
    };
}

export default new AuthorRepository();