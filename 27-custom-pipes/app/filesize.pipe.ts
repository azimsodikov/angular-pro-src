import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filesize'
})
export class FileSizePipe implements PipeTransform {
  transform(size: number, extension: string = 'MB') {
    // Extension is a just regular default function parameter, we could just write 'MB' instead of extension.
    // To pass the parameter through the pipe we use pipe name and :, like filesize:'megabyte'.
    return (size / (1024 * 1024)).toFixed(2) + extension;
  }
}
