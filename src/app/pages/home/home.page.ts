import { Component, OnInit } from '@angular/core';

import { Post } from 'src/app/entities/post';
import { Category } from 'src/app/entities/category';
import { Author } from 'src/app/entities/author';
import { getRepository, Repository } from 'typeorm';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  savedPost = false;
  loadedPost: Post = null;

  constructor() { }

  ngOnInit() {
    this.runDemo();
  }

  async runDemo() {
    const category1 = new Category();
    category1.name = 'TypeScript';

    await getRepository(Category).save(category1);

    const category2 = new Category();
    category2.name = 'Programming';

    const author = new Author();
    author.name = 'Person';

    const post = new Post();
    post.title = 'Control flow based type analysis';
    post.text = `TypeScript 2.0 implements a control flow-based type analysis for local variables and parameters.`;
    post.categories = [category1, category2];
    post.author = author;

    const postRepository = getRepository(Post) as Repository<Post>;

    await postRepository.save(post);

    this.savedPost = true;

    const loadedPost = await postRepository.createQueryBuilder('post')
      .innerJoinAndSelect('post.author', 'author')
      .innerJoinAndSelect('post.categories', 'categories')
      .where('post.id = :id', { id: post.id })
      .getOne();

    this.loadedPost = loadedPost;
  }

  getCategories() {
    if (this.loadedPost) {
      return this.loadedPost.categories.map((cat: Category) => cat.name).join(', ');
    }

    return '';
  }

}
