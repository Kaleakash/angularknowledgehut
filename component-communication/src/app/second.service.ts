import { Injectable } from '@angular/core';

@Injectable()
export class SecondService {
    display2(): string {
        return "Angular Service with DI Features"
    }
}