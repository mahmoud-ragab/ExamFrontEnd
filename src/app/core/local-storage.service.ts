import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  @Output() onItemChanged = new EventEmitter();

  constructor() { }

  getItem(key: string): string{
    return localStorage.getItem(key);
  }
  setItem(key: string, value: any): void{
    localStorage.setItem(key, value);
  }
  setToken(value: any): void{
    localStorage.setItem('Token', value);
    this.onItemChanged.emit({ key: 'Token', value: value });
  }
  removeToken(value: any): void{
    localStorage.removeItem('Token');
    this.onItemChanged.emit(this.getItem('Token'));
  }
  removeItem(key: string): void{
    localStorage.removeItem(key);
  }
}
