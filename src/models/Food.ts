class Food {
  id: string
  categoryIds: string[]
  name: string
  image: any
  deliveryTime: string
  star: number
  price: number
  description?: string

  constructor(
    id: string,
    categoryIds: string[],
    name: string,
    image: any,
    deliveryTime: string,
    star: number,
    price: number
  ) {
    this.id = id
    this.categoryIds = categoryIds
    this.name = name
    this.image = image
    this.star = star
    this.price = price
    this.deliveryTime = deliveryTime
    this.description =
      'I travel to unique parts of the world on the hunt for the best food each country'
  }
}

export default Food
