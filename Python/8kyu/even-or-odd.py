def even_or_odd1(number):
    if number % 2 == 0:
        return "Even"
    else:
        return "Odd"

def even_or_odd2(number):
    return 'Odd' if number % 2 else 'Even'

print(even_or_odd1(2))
print(even_or_odd2(3))