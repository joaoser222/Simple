class CreatePaymentMethods < ActiveRecord::Migration[6.0]
  def change
    create_table :payment_methods do |t|
      t.string :name
      t.integer :installments
      t.decimal :fee
      t.decimal :discount

      t.timestamps
    end
  end
end
