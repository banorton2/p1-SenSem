class SayController < ApplicationController
  def hello
    time_now
  end

  def goodbye
    time_now
  end
  
  def filenames
    time_now
    @files = Dir.glob("*").sort
    return @files
  end
  
  private
  
  def time_now
    @time = Time.now
  end
end
