class CreatePrices < ActiveRecord::Migration[6.0]
  def change
    create_table :prices do |t|
      t.string :name
      t.decimal :markup

      t.timestamps
    end
  end
end
