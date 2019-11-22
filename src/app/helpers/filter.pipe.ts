import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'filterPipe'
})
export class FilterPipe implements PipeTransform {
    transform(value: any, key: string): any {
        console.log("qweqwe");
        return value.filter((item) => item.text.indexOf(key) !== -1);
    }
}