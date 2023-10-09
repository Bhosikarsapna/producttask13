import {
    Component,
    ElementRef,
    OnInit,
    ViewChild
} from '@angular/core';
import {
    Iproducts
} from './models/std';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = '13stutask';

    productsArray: Array < Iproducts > = [{
            productTitle: 'samsung',
            proDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
            pCategory: 'Product'
        },

        {
            productTitle: 'iphone',
            proDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
            pCategory: 'Catlog'
        }
    ]


    @ViewChild('productTitle') productTitle!: ElementRef;

    @ViewChild('proDescription') proDescription!: ElementRef;



    addAsProduct() {
        let obj: Iproducts = {
            productTitle: this.productTitle.nativeElement.value,
            proDescription: this.proDescription.nativeElement.value,
            pCategory: 'Product'
        }

        this.productTitle.nativeElement.value = '';
        this.proDescription.nativeElement.value = ''

        this.productsArray.push(obj)
    }

    addAsCatlog() {
        let obj: Iproducts = {
            productTitle: this.productTitle.nativeElement.value,
            proDescription: this.proDescription.nativeElement.value,
            pCategory: 'Catlog'
        }

        this.productTitle.nativeElement.value = '';
        this.proDescription.nativeElement.value = ''

        this.productsArray.push(obj)

    }


    addProdInfo(catg: "Product" | "Catlog") {
        if (this.productTitle.nativeElement.value.length > 0 && this.proDescription.nativeElement.value.length > 0) {
            let obj: Iproducts = {
                productTitle: this.productTitle.nativeElement.value,
                proDescription: this.proDescription.nativeElement.value,
                pCategory: catg
            }
            this.productTitle.nativeElement.value = '';
            this.proDescription.nativeElement.value = ''

            this.productsArray.push(obj)
        } else {
            return
        }
    }
    constructor() {

    }

    ngOnInit(): void {

    }
}