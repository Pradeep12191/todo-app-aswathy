import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'dateAgo'
})

export class DateAgoPipe implements PipeTransform {
    transform(date: string) {
        const inputDate = new Date(date);
        const todayDate = new Date();
        todayDate.setHours(0, 0, 0, 0);
        if (inputDate.getTime() === todayDate.getTime()) {
            return 'Today'
        }
        else {
            return 'yesterday'
        }


    }
}