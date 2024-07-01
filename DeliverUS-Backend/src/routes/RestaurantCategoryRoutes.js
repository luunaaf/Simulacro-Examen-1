
import RestaurantCategoryController from '../controllers/RestaurantCategoryController.js'
import { hasRole, isLoggedIn } from '../middlewares/AuthMiddleware.js'
//import RestaurantCategoryValidation from '../controllers/validation/RestaurantCategoryValidation.js'
const loadFileRoutes = function (app) {
  app.route('/restaurantCategories')
    .get(RestaurantCategoryController.index)
    .post(
      isLoggedIn,
      hasRole('owner'),
      
      //RestaurantCategoryValidation.create,
      RestaurantCategoryController.create
    )
  
}
export default loadFileRoutes
