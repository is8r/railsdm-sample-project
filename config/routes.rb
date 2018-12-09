Rails.application.routes.draw do
  devise_for :users
  root to: "static#index"
  get 'input', to: 'static#input'
  get 'notice', to: 'static#notice'
  get 'easing', to: 'static#easing'
  get 'button', to: 'static#button'
  get 'speed', to: 'static#speed'
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
