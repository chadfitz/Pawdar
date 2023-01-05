# == Schema Information
#
# Table name: animals
#
#  id              :bigint           not null, primary key
#  species         :string           not null
#  breed           :string
#  size            :string
#  gender          :string
#  age             :string
#  color           :string
#  coat            :string
#  status          :string
#  name            :string
#  environment     :string
#  organization_id :bigint           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class Animal < ApplicationRecord
  validates :species, presence: true

  belongs_to :organization

  has_one_attached :photo

  has_many :favorites
  has_many :favorited_by,
    through: :favorites,
    source: :user
end
