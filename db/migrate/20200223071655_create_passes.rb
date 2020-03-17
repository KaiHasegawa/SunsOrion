class CreatePasses < ActiveRecord::Migration[5.2]
  def change
    create_table :passes do |t|
    	t.string :passcode

      t.timestamps
    end
  end
end
