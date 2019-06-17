class AddMessageToTweets < ActiveRecord::Migration[5.2]
  def change
    add_column :tweets, :message, :string
  end
end
