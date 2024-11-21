import { Article } from './interfaces/article';
import { ArticleValidator } from './services/articleValidator';
import { ArticleOperations } from './services/articleOperations';


const article: Article = {
    id: '1',
    createdAt: new Date(),
    updatedAt: new Date(),
    status: 'Чорновик',
    title: 'Заголовок статті',
    content: 'Текст статті',
    authorId: 'author1',
    tags: ['новини', 'ІТ'],
};

const validator = new ArticleValidator();
const validation = validator.validate(article);

if (validation.isValid) {
    console.log('Стаття валідна');
} else {
    console.error('Помилки валідації:', validation.errors);
}

const articleOps = new ArticleOperations();
articleOps.create(article).then((created: Article) => {
    console.log('Створено статтю:', created);
});