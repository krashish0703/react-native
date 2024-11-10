class Author {
    constructor({
        url = '', 
        name = '', 
        gender = '', 
        culture = '', 
        born = '', 
        died = '', 
        titles = [], 
        aliases = [], 
        father =  '', 
        mother = '', 
        spouse = '', 
        allegiances = [], 
        books = [], 
        povBooks =  [], 
        tvSeries = [], 
        playedBy = []
    }) {
        this.url = url,
        this.name = name,
        this.gender = gender,
        this.culture = culture,
        this.born = born,
        this.died = died,
        this.titles = titles,
        this.aliases = aliases,
        this.father = father,
        this.mother = mother,
        this.spouse = spouse,
        this.allegiances = allegiances,
        this.books = books,
        this.povBooks = povBooks,
        this.tvSeries = tvSeries,
        this.playedBy = playedBy
    }

    // getUserInfo() {
    //     return {
    //         name: this.name,
    //         gnder: this.gender,
    //         born: this.born,
    //         died: this.died,
    //         father: this.father,
    //         mother: this.mother
    //     };
    // }

    // getTitles() { return this.titles; }
    // getAliases() { return this.aliases; }
}

export default Author;