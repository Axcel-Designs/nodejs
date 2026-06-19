import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
  private todos: Todo[] = [];

  create(createTodoDto: CreateTodoDto) {
    const newtodo: Todo = {
      id: this.todos.length == 0 ? 1 : this.todos[this.todos.length - 1].id + 1,
      ...createTodoDto,
    };
    this.todos.push(newtodo);

    return newtodo;
  }

  findAll() {
    return this.todos;
  }

  findOne(id: number) {
    if (!id) return console.error('id missing');
    const todo = this.todos.find((todo) => todo.id === id);
    if (!todo) return console.error('item not found');

    return todo;
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    if (!id) return console.error('id missing');
    const index = this.todos.findIndex((i) => i.id === id);
    if (index == -1) return console.error(`product not available`);

    this.todos[index] = { ...this.todos[index], ...updateTodoDto };

    return this.todos[index];
  }

  remove(id: number) {
    if (!id) return console.error('id misssing');
    const index = this.todos.findIndex((i) => i.id === id);

    if (index === -1) return console.error('item not found');
    // this.todos.splice(index, 1);

    return this.todos.splice(index, 1)[0];
  }
}
