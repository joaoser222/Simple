class ApplicationController < ActionController::API
  include SessionsHelper
  before_action :accept_all_params
  def index
    request = params.except(:controller, :action)
    if request
      render json: controller_name.classify.constantize.where(request)
    else
      render json: controller_name.classify.constantize.all
    end
  end

  def create
    controller_name.classify.constantize.create(params)
  end

  def update
    controller_name.classify.constantize.find(params[:id]).update(params)
  end
  
  def destroy
    controller_name.classify.constantize.find(params[:id]).destroy
  end

  private
  def accept_all_params
    params.permit!
  end
end
