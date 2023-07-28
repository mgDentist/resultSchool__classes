class Dictionary {
    constructor(name) {
        this.name = name;
        this.words = {};
    }

    add(word, description) {
        this.words[word] = {word, description};
        console.log('add',this.words);
        return this.words;
    }

    remove(key) {
        if (key in this.words) {
            delete this.words[key];
            console.log('remove(true):',`${key} удален из объекта ${this.name}`);
        } else {
            console.log('remove(false):',`Ключ ${key} не найден в объекте ${this.name}`);
        }
    }

    get(key) {
        if (key in this.words) {
            console.log('get(true):', `${key}:`, this.words[key]);
        } else {
            console.log('get(false):', `${key} не найден в объекте ${this.name}`);
        }
    }

    showAllWords() {
        for (const key in this.words) {
            console.log('showAll:', `${key} -`, this.words[key]);
        }
    }
}

const dictionary = new Dictionary('Толковый словарь');
dictionary.add('JavaScript', 'популярный язык программирования');
dictionary.add('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие');
dictionary.get('JavaScript');
dictionary.remove('JavaScript');
dictionary.showAllWords();
