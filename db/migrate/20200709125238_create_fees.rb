class CreateFees < ActiveRecord::Migration[6.0]
  def change
    create_table :fees do |t|
      t.string :name
      t.string :type
      t.decimal :value

      t.timestamps
    end
  end
end
