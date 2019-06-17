module Api
  class TweetsController < ApplicationController
    def index
      @tweets = tweet.all.reverse
        render 'tweets/index'
    end
    def create 
      token = cookies.signed[:twitter_session_token]
      session = Session.find_by(token: token)
      
      if sesssion
        user = session.user
        @tweet = user.tweets.new(tweet_params)

        if @tweet.save
          render json: {
            tweet: {
              username: user.username,
              message: @tweet.message
            }
          }
        else
          render json: {
            success: false
          }
        end
      else
        render json: {
          success: false
        }
      end
    
    def destroy
      token = cookies.signed[:twitter_session_token]
      session = Session.find_by(token: token)
      tweet = Tweet.find_by(id: params[:id])
      user = User.find_by(id: params[:id])
      
      if session
        if session.user.username == user.username
          tweet.destroy
          render json: {
            success: true
          }
        else 
          render json: {
            success: false
          }
        end
      else 
        render json: {
          success: false
        } 
      end
    end
    
    private
      def tweet_params
        params.require(:tweet).permit(:message)
      end  
  end
end