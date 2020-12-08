class CreateDoctors < ActiveRecord::Migration[5.2]
  def change
    create_table :doctors do |t|
      t.string :nom
      t.string :prenom
      t.string :login
      t.string :motDePasse
      
      t.string :nom, null: false
      t.text :prenom,null: false
      t.text :login, null: false
      t.text :motDePassse, null: false

      t.timestamps
    end
  end
end
