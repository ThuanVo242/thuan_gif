class Quiz
  attr_accessor :quest, :ans

  def initialize(quest, ans)
    @quest = quest
    @ans = ans
  end
end

q1 = "What color apple\n(a)red\n(b)yellow\n(c)green"
q2 = "What color orange\n(a)blue\n(b)orange\n(c)gray"
q3 = "What color peanut\n(a)pink\n(b)brown\n(c)green"

questions = [
  Quiz.new(q1, 'a'),
  Quiz.new(q2, 'b'),
  Quiz.new(q3, 'c')
]

def runQuiz(questions)
  answer = ''
  score = 0
  questions.each do |question|
    puts question.quest
    answer = gets.chomp
    score += 1 if answer == question.ans
  end
  puts('You score : ' + score.to_s + '/' + questions.length.to_s)
end

runQuiz(questions)
