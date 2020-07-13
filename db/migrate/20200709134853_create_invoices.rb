class CreateInvoices < ActiveRecord::Migration[6.0]
  def change
    create_table :invoices do |t|
      t.integer :people_id
      t.string :invoice_code
      t.decimal :fee
      t.decimal :discount
      t.decimal :total
      t.string :type
      t.string :status
      t.date :payment_date

      t.timestamps
    end
  end
end
