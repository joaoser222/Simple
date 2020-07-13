class CreatePermissions < ActiveRecord::Migration[6.0]
  def change
    create_table :permissions do |t|
      t.boolean :list
      t.boolean :create
      t.boolean :read
      t.boolean :update
      t.boolean :delete
      t.integer :menu_id

      t.timestamps
    end
  end
end
