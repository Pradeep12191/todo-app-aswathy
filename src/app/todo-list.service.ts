import { Todo } from './Todo';

export class TodoListService {
    private todolist = [
        {
            task: 'Prepare the invoice',
            createdDate:'Tue Jul 30 2019',
            delivery: '9:00 am',
            status: 'completed',

        },
        {
            task: 'Prepare the invoice',
            createdDate:'Tue Jul 30 2019',
            delivery: '9:00 am',
            status: 'pending',

        },
        {
            task: 'Prepare the invoice',
            createdDate:'Tue Jul 30 2019',
            delivery: '9:00 am',
            status: 'pending',


        },
        {
            task: 'Prepare the invoice',
            createdDate:'Tue Jul 29 2019',
            delivery: '9:00 am',
            status: 'pending',


        }
    ]

    getTodos()
    {
    return this.todolist;
    }

    // getTodo(task:string) {
    //     const tasks = this.todolist.find(
    //       (s) => {
    //         return s.task === task;
    //       }
    //     );
    //     return tasks;
    //   }
    addTodo(Todo:Todo)
    {
this.todolist.push(Todo)
    }



}