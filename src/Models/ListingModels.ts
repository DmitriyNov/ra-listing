export interface Item {
    listing_id: number
    url: string
    MainImage: any //Слишком сложно копаться в этом объекте, я не стал ещё один интерфейс делать для одного свойства
    title: string
    currency_code: string
    price: string
    quantity: number
}