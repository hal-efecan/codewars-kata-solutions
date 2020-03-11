# TITLE: 1. Persistent Bugger.
# DESCRIPTION: # Write a function, persistence, that takes in a positive parameter num and returns its multiplicative 
# persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

# EXAMPLE:

#  persistence(39) => 3  # Because 3*9 = 27, 2*7 = 14, 1*4=4
#                        # and 4 has only one digit.

#  persistence(999) => 4 # Because 9*9*9 = 729, 7*2*9 = 126,
#                        # 1*2*6 = 12, and finally 1*2 = 2.

#  persistence(4) => 0   # Because 4 is already a one-digit number.

# SOLUTION:

num = '2322'

int_list = []
for i in num:
    int_list.append(i)
print(int_list)

for i in int_list:
    j in i:
    print(j)

def persistence(n):
    array = []
    n = str(n)
    n.split()
    array.append(n)
    return print(array)

# persistence(432)

# Test.it("Basic tests")
# Test.assert_equals(persistence(39), 3)
# Test.assert_equals(persistence(4), 0)
# Test.assert_equals(persistence(25), 2)
# Test.assert_equals(persistence(999), 4)