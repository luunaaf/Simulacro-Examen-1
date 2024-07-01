import { check } from 'express-validator'
import { RestaurantCategory } from '../../models/models.js'

const checkCategoryExists = async (value, req) => {
  try{
    const category = await RestaurantCategory.findOne({where:{name:value}})
   if(category){
    return Promise.reject(new Error('This category already exists'))
  }
  return Promise.resolve()
}catch(err) {
  return Promise.reject(new Error(err))
}
}
const create = [
  check('name').exists().isString().isLength({ min: 1, max: 255 }).trim(),
  check('name').custom((value, {req}) => {
    return checkCategoryExists(value,req)
  })
]

export { create }