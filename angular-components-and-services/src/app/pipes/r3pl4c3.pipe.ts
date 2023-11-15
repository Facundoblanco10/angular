import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'r3pl4c3',
  standalone: true,
})
export class R3pl4c3Pipe implements PipeTransform {
  transform(value: string): string {
    const replacements: { [key: string]: string } = { 'a': '4', 'e': '3', 'i': '1', 'o': '0', 'A': '4', 'E': '3', 'I': '1', 'O': '0' };
    return value.replace(/[aeioAEIO]/g, match => replacements[match]);
  }
}
