#start of dog classifier
class Dog:
 def __init__(self, size, gender, age, pregnant, activity):
  self.size = size #str for breed size
  self.age = age #str fo range
  self.gender= gender #male/female
  self.activity = activity #amount of physical activity
  self.pregnant = 1 if pregnant in ["Yes",'yes','Y','YES','prego','Pregnant','Pregers'] else 0
  self.age_imp = 1.4
  self.size_imp = 1.2
  self.activity_imp = 1.3
  self.pregnant_imp = 0.333

 def food(self): 
  meal = round(self.age_imp * self.age_c() + self.size_imp * self.size_c() + self.activity_imp * self.activity_c() + self.pregnant_imp * self.pregnant, 3)
  open("food.txt", "w").write(meal)
  return meal

 def age_c(self):
  match self.age:
   case 'puppy': return 1/4
   case 'adult': return 1/2
   case 'senior': return 1/3
 
 def size_c(self):
  match self.size:
   case 'toy': return 1/4
   case 'small': return 1/5
   case 'medium': return 3/2
   case 'large': return 16/3

 def activity_c(self):
  match self.activity:
   case 'low': return 1/4
   case 'average': return 1/3
   case 'active': return 1/2

if __name__ == "__main__":
  age = input("age: ")
  size = input("size: ")
  activity = input("activity: ")
  pregnacy = input("pregnacy: ")
  gender = input("gender: ")
  print(Dog(size, gender, age, pregnacy, activity).food())

def classify():
 for k in open("info.txt","r").readlines():
  l = k.split()
  match l:
   case ['low' | 'average' | 'active']:
    activity = l
   case ['toy','small','medium','large']:
    size = l 
   case ['puppy','adult','senior']:
    age = l
 else: Dog(size, gender, age, pregnacy, activity).food()
