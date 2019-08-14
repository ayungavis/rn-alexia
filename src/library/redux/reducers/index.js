import { combineReducers } from 'redux';

import auth from './auth';
import products from './products';
import collections from './products/collections';
import tops from './products/tops';
import categories from './categories';
import cities from './cities';
import contacts from './contacts';
import countries from './countries';
import orders from './orders';
import payments from './payments';
import shippings from './shippings';
import users from './users';
import wishlists from './wishlists';

const appReducer = combineReducers({
	auth,
	products,
	collections,
	tops,
	categories,
	cities,
	contacts,
	countries,
	orders,
	payments,
	shippings,
	users,
	wishlists
})

export default appReducer;