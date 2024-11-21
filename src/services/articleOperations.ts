import { Article } from '../interfaces/article';
import { ContentOperations } from './ContentOperations';
import {hasPermission} from './hasPermission';
import { User,Role,Permission } from 'interfaces/user';

export class ArticleOperations implements ContentOperations<Article> {
    async create(user:User,item: Article): Promise<Article> {
        if(!hasPermission(user,"WRITE")){
            throw new Error('Not enough rights');
        }
            return item;
    }

    async read(user:User,id: string): Promise<Article | null> {
        if(!hasPermission(user,"READ")){
            throw new Error('Not enough rights');
        }
        return null;
    }

    async update(user:User,id: string, updates: Partial<Article>): Promise<Article> {
        if(!hasPermission(user,"UPDATE")){
            throw new Error('Not enough rights');
        }
        return { ...updates } as Article;
    }

    async delete(user:User,id: string): Promise<void> {
        if(!hasPermission(user,"DELETE")){
            throw new Error('Not enough rights');
        }
    }

    async list(params?: any): Promise<Article[]> {
        return [];
    }
}