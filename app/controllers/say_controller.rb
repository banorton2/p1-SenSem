class SayController < ApplicationController
  before_action :time_now
  
  def hello
  end

  def goodbye
  end
  
  def filenames
    @files = Dir.glob("*").sort
    return @files
  end
  
  private
  
  def time_now
    @time = Time.now
  end
end
