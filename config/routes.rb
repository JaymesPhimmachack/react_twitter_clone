Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    get '/twitter'         => 'twitter#index'

    # USERS
    post '/users'          => 'users#create'

    # SESSIONS 
    post 'sessions'        => 'sessions/create'
    get 'authenticated'    => 'sessions/#authenticated'
    delete '/sessions'     => 'sessions#destroy'

    # TWEETS
    post '/tweets'         => 'tweets#create'
    delete '/tweets/:id'   => 'tweets#destroy'
    get '/tweets'          => 'tweets#index'
  end  
  root 'homepage#index'  
  # Redirect all other paths to index page
  get '*path'              => 'homepage#index'
end
