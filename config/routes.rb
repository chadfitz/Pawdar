Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:show, :create] do
      resources :meet_and_greets, only: [:index, :show, :destroy]
      resources :reviews, only: :destroy
    end
    resources :organizations, only: [:index, :show] do
      resources :reviews, only: [:index, :show]
    end
    resources :animals, only: [:index, :show] do
      collection do
        # get 'animals/search/:query', :to => 'animals#index'
        # get '/search/:query', :to => 'animals#index'
        # get '/search/:query', :to => 'animals#index', as "search"
        # get '/search/:query', to: 'animals#search'
        get '/search/:query', to: 'animals#search', :as => "search"
      end
    end
    resources :meet_and_greets, only: [:create, :update]
    resources :reviews, only: [:create, :update]
    resource :session, only: [:show, :create, :destroy]
  end

  get '*path', to: "static_pages#frontend"
end
