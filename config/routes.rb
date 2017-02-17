Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :destroy, :index]
    resource :session, only: [:create, :destroy]
    resources :messages, only: [:create, :show, :index]
  end
end
