class Doctor < ApplicationRecord
 validates :nom, presence: true
 validates :prenom, presence: true
 validates :login, presence: true
 validates :motDePasse, presence: true
end
