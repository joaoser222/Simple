class CreateCashes < ActiveRecord::Migration[6.0]
  def change
    create_table :cashes do |t|
      t.integer :people_id
      t.integer :invoice_id
      t.decimal :value
      t.string :type
      t.integer :account_id

      t.timestamps
    end
  end
end
