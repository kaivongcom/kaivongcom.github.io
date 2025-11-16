#! usr/bin/ python3 # 3.13
#mirror link: https://gist.github.com/kaivongcom/3d70084ebff0313a3cb7adede5a2ab8f

THE_100 = int(100)
ZERO_0 = int(0)

def range_to_based(input):
  repeat_so_this = len(input)
  range_end_point = int(THE_100 / repeat_so_this)
  return range_end_point

def running_script(input):
  end_point = range_to_based(input)
  for i in range(ZERO_0, end_point):
    print(input)


# running_script('❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤')
