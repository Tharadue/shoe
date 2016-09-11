import { Injectable } from '@angular/core';
import { SHOEDATA } from './demo-data';

@Injectable()
export class DemoDataService {
    getDemoData () {
        return SHOEDATA;
    }

    getDemoDataById(id: number) {
        let result = SHOEDATA.filter(function( obj ) {
            return obj.id == id;
            });
            if (result.length >0) {
                return result[0];
            }
            else {
                return null;
            }
     }
}