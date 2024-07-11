import { Pipe, PipeTransform } from "@angular/core";

// hero.canFly | canFly = 'Vuela'
// hero.canFly | canFly = 'No Vuela'

@Pipe({
  name: 'canFly'
})
  export class CanFlyPipe implements PipeTransform{

  transform(value: boolean): 'Vuela' | 'No vuela'{

    return (value)
    ? 'Vuela'
    : 'No vuela';
  }

}
