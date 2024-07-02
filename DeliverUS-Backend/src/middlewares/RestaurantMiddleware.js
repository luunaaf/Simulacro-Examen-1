import { Restaurant, RestaurantCategory, Order } from '../models/models.js'

const checkRestaurantOwnership = async (req, res, next) => {
  try {
    const restaurant = await Restaurant.findByPk(req.params.restaurantId)
    if (req.user.id === restaurant.userId) {
      return next()
    }
    return res.status(403).send('Not enough privileges. This entity does not belong to you')
  } catch (err) {
    return res.status(500).send(err)
  }
}
const restaurantHasNoOrders = async (req, res, next) => {
  try {
    const numberOfRestaurantOrders = await Order.count({
      where: { restaurantId: req.params.restaurantId }
    })
    if (numberOfRestaurantOrders === 0) {
      return next()
    }
    return res.status(409).send('Some orders belong to this restaurant.')
  } catch (err) {
    return res.status(500).send(err.message)
  }
}

const checkCategoryExists = async ( req,res,next) => {
  try{
    const category = await RestaurantCategory.findOne({where:{name:req.body.name}})
   if(category){
    
    
  return res.status(403).send('This category already exists')
}
  return next()
}catch(err) {
  return res.status(500).send('Error')
}
}

export { checkRestaurantOwnership, restaurantHasNoOrders , checkCategoryExists}
