import express from "express";
import StaffRolesrouter from "./staff/staffRoleRoutes.js";
import StaffRouter from "./staff/staffRoutes.js";
import TableRouter from "./table/tableRoutes.js";
import bookingRouter from "./booking/bookingRoutes.js";
import customerRoutes from "./customer/customerRoutes.js";
import orderRouter from "./order/orderRoutes.js";
import menuRouter from "./menu/menuRoutes.js";
import menuItemRouter from "./menu/menuItemRoutes.js";
import orderMenuItemRouter from "./menu/orderMenuItemRoutes.js";
import IngredientRouter from "./ingredient/ingredientRoutes.js";
import IngredientTypeRouter from "./ingredient/ingredientTypeRouter.js";
import menuItemIngredientsRoutes from "./ingredient/menuItemIngredientRoutes.js";

const routes = express.Router();

// Staff-related routes
// @route   /api/staffRole   - Manages staff roles
routes.use('/api/staffRole', StaffRolesrouter);
// @route   /api/staff       - Manages staff data
routes.use('/api/staff', StaffRouter);

// Table-related routes
// @route   /api/tables      - Manages table data
routes.use('/api/tables', TableRouter);

// Booking-related routes
// @route   /api/bookings    - Manages bookings
routes.use('/api/bookings', bookingRouter);

// Customer-related routes
// @route   /api/customers   - Manages customer data
routes.use('/api/customers', customerRoutes);

// Order-related routes
// @route   /api/orders      - Manages orders
routes.use('/api/orders', orderRouter);

// Menu-related routes
// @route   /api/menu        - Manages menu items
routes.use('/api/menu', menuRouter);
// @route   /api/menuItem    - Manages specific menu item data
routes.use('/api/menuItem', menuItemRouter);

// Order Menu Item-related routes
// @route   /api/orderMenuItem - Manages order menu items
routes.use('/api/orderMenuItem', orderMenuItemRouter);

// Ingredient-related routes
// @route   /api/ingredients - Manages ingredients
routes.use('/api/ingredients', IngredientRouter);
// @route   /api/ingredientsType - Manages ingredient types
routes.use('/api/ingredientsType', IngredientTypeRouter);

// Menu Item Ingredient-related routes
// @route   /api/menuItemIngredient - Manages menu item ingredients
routes.use('/api/menuItemIngredient', menuItemIngredientsRoutes);

export default routes;
