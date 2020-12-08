Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'doctors/index'
      post 'doctors/create'
      post 'subscribe_doctor'
      get 'doctors/destroy'
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
