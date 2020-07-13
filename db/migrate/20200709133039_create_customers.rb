class CreateCustomers < ActiveRecord::Migration[6.0]
  def change
    create_table :customers do |t|
      t.integer :people_id
      t.integer :price_id
      t.string :status

      t.timestamps
    end
  end
end
