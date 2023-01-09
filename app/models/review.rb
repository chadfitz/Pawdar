# == Schema Information
#
# Table name: reviews
#
#  id              :bigint           not null, primary key
#  body            :string           not null
#  user_id         :bigint           not null
#  organization_id :bigint           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class Review < ApplicationRecord
  validates :body, presence: true

  belongs_to :user
  belongs_to :organization
end
