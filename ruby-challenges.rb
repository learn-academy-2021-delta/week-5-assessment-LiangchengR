# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

def contains_letter (array, char)

    if(char.class != String || array.class != Array)
        #explicit return if function does not receive expected parameters
        return p 'Something went wrong. Please enter an array and a letter.'
    end

    array_containing = array.select do |value|
        #used .downcase to compare letter accounting for capitalization
        value.downcase.include? char.downcase
    end
    p array_containing
end 

contains_letter(beverages_array, letter_o)
contains_letter(beverages_array, letter_t)

# Edge Cases
# contains_letter(['coffee', 'Tea', 'juice', 'water', 'soda water'], 'T')
# contains_letter(['coffee', 'Tea', 'juice', 'water', 'soda water'], 1)
# contains_letter('words', 'T')



# -------------------2) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

nums_array1 = [42, 7, 27]
# Expected output: 76

nums_array2 = [25, 17, 47, 11]
# Expected output: 100

def sum_of_nums array
    sum = 0

    array.each do |value|
        sum += value
    end
    p sum
end

sum_of_nums(nums_array1)
sum_of_nums(nums_array2)



# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

class Bike
    attr_accessor :model, :wheels, :current_speed
    def initialize(model, wheels = 2, current_speed = 0)
        @model = model
        @wheels = wheels
        @current_speed = current_speed
    end

    def bike_info
        p "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end

    def pedal_faster speed
        @current_speed += speed
        p @current_speed
    end

    def brake speed
        if(@current_speed-speed >= 0 )
            @current_speed -= speed
            p @current_speed
        else
            @current_speed = 0
            p @current_speed
        end
    end


end

my_bike = Bike.new('Trek')

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'
my_bike.bike_info

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(10) => 20
# Expected output example: my_bike.brake(25) => 0

my_bike.pedal_faster(10)
my_bike.pedal_faster(10)
my_bike.brake(25)
