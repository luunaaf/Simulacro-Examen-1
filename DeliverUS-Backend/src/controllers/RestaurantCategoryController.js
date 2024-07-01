import { RestaurantCategory } from '../models/models.js'
const index = async function (req, res) {
  try {
    const restaurantCategories = await RestaurantCategory.findAll()
    res.json(restaurantCategories)
  } catch (err) {
    res.status(500).send(err)
  }
}

const create = async function (req,res){
  
    const newRestaurant = RestaurantCategory.build(req.body)
    try {
    const restaurant = await newRestaurant.save()
    res.json(restaurant)

  }catch(err){
    console.log('El error esta en el método create de RestaurantCategoryController')
    res.status(500).send(err)
  }
}
const RestaurantCategoryController = {
  index
}
export default RestaurantCategoryController
