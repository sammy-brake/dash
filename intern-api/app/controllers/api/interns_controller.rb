require 'pry'

class Api::InternsController < ApplicationController
    def index
        render json: Intern.all 
    end 

    def create
        intern = Intern.new(intern_params)
        if @intern.save
         render json: intern
        else 
            render json: {message: intern.errors}, status: 400
        end 
    end 

    def show
        intern = Intern.find_by(id: params[:id])
        render json: intern
    end 

    def update 
        binding.pry 
        @intern = Intern.find_by(id: params[:id])
        if @intern.update(intern_params)
            render json: @intern 
        else 
            render json: {message: intern.errors}, status: 400
        end 
    end 



    
    
    private 

    def intern_params 
        params.require(:intern).permit(name, age, location_address, location_gps, supervisor, hours_allowed, hours_worked, job)
    end 

end 
