export class Quote{

    constructor(planid:string, price:number,promoprice:number,promodiscount:number) {
        this.planid=planid;
        this.price=price;
        this.promoprice=promoprice;
        this.promodiscount=promodiscount;        
    }

    planid:string;
    price:number;
    promoprice:number;
    promodiscount:number;

}