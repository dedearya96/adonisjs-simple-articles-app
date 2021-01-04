'use strict'

const { route } = require('@adonisjs/framework/src/Route/Manager')

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Route.on('/').render('welcome')
Route.get('/', 'ArticleController.index').as('index')
Route.get('/register', 'AuthController.registrationView').as('register.create')
Route.post('/register-store', 'AuthController.postRegister').as('register.store').validator('Register')
Route.get('/login', 'AuthController.loginView').as('login.create')
Route.post('/login-store', 'AuthController.postLogin').as('login.store')
Route.get('/view-articles/:id', 'ArticleController.show').as('view.articles')

Route.group(()=>{
    Route.get('/create-articles', 'ArticleController.create').as('create.articles')
    Route.post('/store-articles', 'ArticleController.store').as('store.articles')
    Route.get('/edit-articles/:id', 'ArticleController.edit').as('edit.articles')
    Route.post('/update-articles/:id', 'ArticleController.update').as('update.articles')
    Route.get('/delete-articles/:id', 'ArticleController.destroy').as('delete.articles')
    Route.post('/logout', 'AuthController.logout').as('logout')
}).middleware(['auth'])
