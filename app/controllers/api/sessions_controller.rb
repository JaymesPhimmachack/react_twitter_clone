module Api
  class SessionsController < ApplicationController
    def create
      @user = User.find_by(username: params[:user][:username])
  
      if @user and @user.password == params[:user][:password]
        session = @user.sessions.create
        cookies.permanent.signed[:twitter_session_token] = {
          value: session.token,
          httponly: true
        }
        render 'create'
      else
        render json: {
          success: false
        }
      end
    end 
  
    def authenticated
      token = cookies.signed[:twitter_session_token]
      session = Session.find_by(token: token)
  
      if session
        @user = session.user
        render 'authenticated'
      else
        render json: {
          authenticated: false
        }
      end
    end
  
    def destroy
      token = cookies.signed[:twitter_session_token]
      session = Session.find_by(token: token)
  
      if session and session.destroy
        render json: {
          success: true
        }
      end
    end   
  end
end
