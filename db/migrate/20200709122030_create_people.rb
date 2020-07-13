class CreatePeople < ActiveRecord::Migration[6.0]
  def change
    create_table :people do |t|
      t.string :name
      t.string :document
      t.string :primary_phone
      t.string :secondary_phone
      t.string :email
      t.integer :state
      t.string :city
      t.string :district
      t.string :street
      t.string :number
      t.string :complement
      t.date :origin_date
      t.string :avatar

      t.timestamps
    end
  end
end
