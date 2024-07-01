
import RestaurantCategoryController from '../controllers/RestaurantCategoryController.js'
import RestaurantCategoryValidation from '../controllers/validation/RestaurantCategoryValidation.js'
const loadFileRoutes = function (app) {
  app.route('/restaurantCategories')
    .get(RestaurantCategoryController.index)
    .post(
      RestaurantCategoryValidation.create,
      RestaurantCategoryController.create
    )
  
}
export default loadFileRoutes
