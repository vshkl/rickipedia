import { types } from 'mobx-state-tree'

const Product = types
  .model({
    id: types.number,
    name: types.string,
  })

const Cart = types
  .model({
    products: types.array(Product),
  })
  .actions(self => ({
    addProduct(name) {
      self.products.push(Product.create({ id: Math.floor(Math.random() * 1000000), name }))
    },
    removeProduct(id) {
      self.products.filter(it => it.id !== id)
    },
  }))

export {
  Cart,
}
