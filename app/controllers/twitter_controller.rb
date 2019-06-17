module Api
  class TwitterController < ApplicationController
    def home
      render 'home'
    end
    def user
      render 'user'
    end  
  end
end