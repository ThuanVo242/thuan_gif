secret_word = 'Ruby On Rail'
guess = ''
guess_count = 0
guess_limit = 3
guess_out = false

while guess != secret_word and !guess_out
    if guess_count < guess_limit
      puts "Enter your guess"
      guess = gets.chomp
      guess_count += 1
    else
      guess_out = true
    end
end

if guess_out
  puts "You lose"
else
  puts "You win"
end
