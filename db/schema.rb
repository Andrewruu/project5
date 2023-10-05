
ActiveRecord::Schema[7.0].define(version: 2023_09_12_231540) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "novels", force: :cascade do |t|
    t.string "name"
    t.string "image"
    t.text "description"
    t.integer "user_id"
    t.integer "publisher_id"
    t.integer "translator_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "publishers", force: :cascade do |t|
    t.string "name"
    t.string "website"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "translators", force: :cascade do |t|
    t.string "name"
    t.string "website"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "display_name"
    t.string "password_digest"
    t.string "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
