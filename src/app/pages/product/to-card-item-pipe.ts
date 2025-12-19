import { Pipe, PipeTransform } from '@angular/core';
import { ProductDTO } from '../../core/dto/product.dto';
import { CardItem } from '@dev/qui';

@Pipe({
  name: 'toCardItem'
})
export class ToCardItemPipe implements PipeTransform {

  transform(p: ProductDTO ): CardItem {
    return {
      id: p.id,
      title: p.title as CardItem['title'],
      description: p.description,
      url: p.thumbnail as CardItem['url'],
    };
  }

}
