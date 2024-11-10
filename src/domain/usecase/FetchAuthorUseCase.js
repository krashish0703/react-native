import { creatTable, getDBConnection } from "../../data/database/SQLiteDatabase";
import AuthorRepository from "../../data/repositories/AuthorRepository";
import Author from "../model/Author";

class FetchAuthorUseCase {
    async execute() {
        try {
            const authorData = await AuthorRepository.fetchAuthors();
            const authors = authorData.map(author => new Author({
                url: author.url,
                name: author.name,
                gender: author.gender,
                culture: author.culture,
                born: author.born,
                died: author.died,
                titles: author.titles | [],
                aliases: author.aliases | [],
                father: author.father,
                mother: author.mother,
                spouse: author.spouse,
                allegiances: author.allegiances | [],
                books: author.books | [],
                povBooks: author.povBooks | [],
                tvSeries: author.tvSeries | [],
                playedBy: author.playedBy | []
            }));

            const db = await getDBConnection();
            await creatTable();

            await new Promise((resolve, reject) => {
                db.transaction(tx => {
                    authors.forEach(author => {
                        tx.executeSql(
                            'INSERT OR REPLACE INTO Authors (name,gender) VALUES (?,?)',
                            [author.name, author.gender],
                            () => { },
                            (tx, error) => {
                                reject(error);
                            }
                        );
                    });
                }, reject, resolve);
            });

            return authors;
        } catch (error) {
            console.error("Error in FetchAuthorUsCase: " + error);
            throw error;
        }
    }
}

export default new FetchAuthorUseCase();