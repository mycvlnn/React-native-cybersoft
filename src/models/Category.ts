class Category {
  id: string
  name: string
  icon: any

  constructor(name: string, icon: any, id: string) {
    this.name = name
    this.id = id
    this.icon = icon
  }
}

export default Category
