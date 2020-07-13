class CreateProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :products do |t|
      t.string :name
      t.string :barcode
      t.string :sh
      t.integer :category_id
      t.integer :brand_id
      t.string :status
      t.boolean :composite

      t.timestamps
    end
  end
end
