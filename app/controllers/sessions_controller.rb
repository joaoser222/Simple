class SessionsController < ApplicationController
  def create
    @user = User.find_by(email: params[:email].downcase)
      if @user && @user.authenticate(params[:password])
        sign_in(@user)
        render json: { 'success' => 'Usuário logado com sucesso!', 'token' => session[:token], 'routes' => Menu.all }
      else
        render json: { 'Error' => 'Email ou senha inválidos!' }
      end
  end

  def destroy
    sign_out
  end
end