def square_digits num
  num.to_s.chars.map {|a| a.to_i.**2 }.join.to_i
  # code goes here
end