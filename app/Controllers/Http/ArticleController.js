'use strict'
const Article = use('App/Models/Article')

class ArticleController {

  async index({ view }) {
    const articles = await Article.all();
    return view.render('index', {
      articles: articles.toJSON()
    })
  }

  async create({ view }) {
    return view.render('articles.create-articles')
  }

  async store({ request, response, session }){
    const articles = await Article.create({
      title : request.input('title'),
      description : request.input('description')
    });
    session.flash({'successmessage': 'Articles has been created'})
    return response.redirect('/')
  }

  async show ({ params, view}){
    const articles = await Article.find(params.id)
    return view.render('articles.articles', {
      articles: articles.toJSON()
    })
  }

  async edit ({params, view}){
    const articles = await Article.find(params.id)
      return view.render('articles.edit-articles', {
        articles : articles.toJSON()
      })

  }

  async update ({params, request, response, session}){
    const articles = await Article.find(params.id)
    articles.title = request.input('title'),
    articles.description = request.input('description')
    await articles.save()
    session.flash({'successmessage': 'Articles has been updated'})
    return response.redirect('/')
  }

  async destroy ({ params, response, session}){
    const articles = await Article.find(params.id)
    await articles.delete()
    session.flash({'successmessage': 'Articles has been deleted'})
    return response.redirect('/')
  }
}


module.exports = ArticleController
