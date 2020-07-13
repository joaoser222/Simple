class CreateStocks < ActiveRecord::Migration[6.0]
  def change
    create_table :stocks do |t|
      t.integer :people_id
      t.integer :payment_method_id
      t.decimal :fee
      t.decimal :discount
      t.decimal :total
      t.boolean :stock_generate
      t.string :type
      t.integer :local_id

      t.timestamps
    end
  end
end
