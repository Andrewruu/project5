Rails.application.routes.draw do
  get 'catch_all/catch_all'
  get 'errors/not_found'

  resources :translators, only: [:index]
  resources :publishers, only: [:index]
  resources :novels, only: [:index, :destroy, :create, :update]
  # resources :users
  
  post "/signup", to: "users#create"
  get "/me", to: "users#show"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get '*path', to: 'catch_all#catch_all', constraints: ->(req) { !req.xhr? && req.format.html? }
end
