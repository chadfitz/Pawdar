# == Schema Information
#
# Table name: animals
#
#  id              :bigint           not null, primary key
#  type            :string           not null
#  breed           :string
#  size            :string
#  gender          :string
#  age             :string
#  color           :string
#  coat            :string
#  status          :string
#  name            :string
#  description     :string
#  environment     :string
#  organization_id :bigint           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class Animal < ApplicationRecord
  validates :type, presence: true

  belongs_to :organization

  has_many :favorites
  has_many :favorited_by,
    through: :favorites,
    source: :user
end
