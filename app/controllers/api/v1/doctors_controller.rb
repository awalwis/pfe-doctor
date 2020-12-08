class Api::V1::DoctorsController < ApplicationController
  def index
  end

  def create
  
    doctor = Doctor.create!(doctor_params)
    if doctor
      render json: doctor
    else
      render json: doctor.errors
    end
  end

  def show
  end

  def destroy
  end



  private	

  def doctor_params
    params.permit( :nom, :prenom, :login, :motDePasse)
  end

end
