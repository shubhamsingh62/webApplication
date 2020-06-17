import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {

  transform(data: any, types?: string): any {
    console.log(data)
    return data.filter(category => (category.type === types));
  }

}
