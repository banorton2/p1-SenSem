Rails.application.routes.draw do
  root 'say#hello'
  
  get 'say/hello'

  get 'say/goodbye'
  
  get 'say/filenames'
  
  get 'say/filesearch'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
