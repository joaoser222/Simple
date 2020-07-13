class CreateMenus < ActiveRecord::Migration[6.0]
  def change
    create_table :menus do |t|
      t.string :name
      t.string :path
      t.string :icon
      t.integer :parent_id

      t.timestamps
    end
  end
end
