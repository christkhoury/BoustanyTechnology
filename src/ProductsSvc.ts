import {HttpClient} from "@angular/common/http"
import { Injectable } from "@angular/core"

@Injectable()
export class ProductsSvc
{
    constructor(private apiCaller : HttpClient,
        ){}

        callApi(){
            return this.apiCaller.get('https://boustany.herokuapp.com/Products')
        }
}