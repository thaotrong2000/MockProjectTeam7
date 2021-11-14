import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePipe',
})
export class TimePipePipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): unknown {
    var date: Date = new Date(value.toString().slice(0, 10));
    var dateTotal: number = date.getTime();
    console.log(dateTotal);
    var arrTime = [];
    arrTime = value
      .toString()
      .slice(11, value.length - 1)
      .split(':');
    var totalHour: number =
      1000 * (arrTime[0] * 60 * 60 + arrTime[1] * 60 + arrTime[2]);
    console.log(dateTotal + totalHour);

    return value;
  }
}
