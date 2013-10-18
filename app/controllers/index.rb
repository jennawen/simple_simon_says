require 'json'

get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/color' do

  # Create and return a JSON object with the random cell and color given below.
  @cell= rand(0..8)
  @color= "#" + "%06x" % (rand * 0xffffff)

  cell_color = {:cell => @cell, :color => @color}
  json_object = cell_color.to_json
  json_object

end