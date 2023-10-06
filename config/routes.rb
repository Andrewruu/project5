Rails.application.routes.draw do
  get 'errors/not_found'

  resources :translators, only: [:index]
  resources :publishers, only: [:index]
  resources :novels, only: [:index, :destroy, :create, :update]
  # resources :users
  
  post "/signup", to: "users#create"
  get "/me", to: "users#show"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get '*unmatched_route', to: 'errors#not_found'
end
