import { Injectable, Inject } from '@angular/core';
import { knownFolders, path } from '@nativescript/core'

@Injectable()
export class UtilsService {

  public getFilename(path: string) {
    let parts = path.split('/');
    return parts[parts.length - 1];
  }

  public documentsPath(filename: string) {
    return `${knownFolders.documents().path}/${filename}`;
  }
}