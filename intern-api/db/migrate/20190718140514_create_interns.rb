class CreateInterns < ActiveRecord::Migration[5.2]
  def change
    create_table :interns do |t|
      t.string :name
      t.integer :age
      t.string :location_gps
      t.string :location_address
      t.string :supervisor
      t.integer :hours_worked
      t.integer :hours_allowed
      t.string :job

      t.timestamps
    end
  end
end
