import { NgModule } from '@angular/core';
import { AuthInterceptor } from './auth.interceptor';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
    ],
})
export class CoreModule { }
