require 'test_helper'

class Api::InventoriesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_inventories_index_url
    assert_response :success
  end

  test "should get show" do
    get api_inventories_show_url
    assert_response :success
  end

  test "should get create" do
    get api_inventories_create_url
    assert_response :success
  end

  test "should get update" do
    get api_inventories_update_url
    assert_response :success
  end

  test "should get destroy" do
    get api_inventories_destroy_url
    assert_response :success
  end

end
