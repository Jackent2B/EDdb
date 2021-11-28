import sys
import pymongo
import json
class Data:
	def __init__(self, *args):
		if len(args)>4:
			values = []
			for i in args:
				values.append(i)
			self.domain = values[0]
			self.course = values[1]
			self.offeredBy = values[2]
			self.zTo5 = values[3]
			self.fTo10 = values[4]
			self.tTo15 = values[5]
			self.fiTo20 = values[6]
			self.twTo40 = values[7]
			self.gr40 = values[8]
			self.zTo500 = values[9]
			self.fTo1000 = values[10]
			self.thTo2000 = values[11]
			self.twTo5000 = values[12]
			self.gr5000 = values[13]
			self.ratings = values[14]
			self.zTo10 = values[15]
			self.tTo25 = values[16]
			self.twTo50 = values[17]
			self.fiTo100 = values[18]
			self.gr100 = values[19]
		else:
			values = []
			for i in args:
				values.append(i)
			choice = values[0]
			amt = values[1]
			time = values[2]
			assignments = values[3]
			self.domain = choice
			# if choice == 1:
			# 	self.domain = "data structures and algorithms"
			# elif choice == 2:
			# 	self.domain = "web development"
			# else:
			# 	self.domain = "android development"
			if amt >= 0 and amt <= 500:
				self.zTo500 = 1
				self.fTo1000 = 0
				self.thTo2000 = 0
				self.twTo5000 = 0
				self.gr5000 = 0
			elif amt > 500 and amt <= 1000:
				self.zTo500 = 0
				self.fTo1000 = 1
				self.thTo2000 = 0
				self.twTo5000 = 0
				self.gr5000 = 0
			elif amt > 1000 and amt <= 2000:
				self.zTo500 = 0
				self.fTo1000 = 0
				self.thTo2000 = 1
				self.twTo5000 = 0
				self.gr5000 = 0
			elif amt > 2000 and amt <= 5000:
				self.zTo500 = 0
				self.fTo1000 = 0
				self.thTo2000 = 0
				self.twTo5000 = 1
				self.gr5000 = 0
			else:
				self.zTo500 = 0
				self.fTo1000 = 0
				self.thTo2000 = 0
				self.twTo5000 = 0
				self.gr5000 = 1
			if time >= 0 and time <= 5:
				self.zTo5 = 1
				self.fTo10 = 0
				self.tTo15 = 0
				self.fiTo20 = 0
				self.twTo40 = 0
				self.gr40 = 0
			elif time > 5 and time <= 10:
				self.zTo5 = 0
				self.fTo10 = 1
				self.tTo15 = 0
				self.fiTo20 = 0
				self.twTo40 = 0
				self.gr40 = 0
			elif time > 10 and time <= 15:
				self.zTo5 = 0
				self.fTo10 = 0
				self.tTo15 = 1
				self.fiTo20 = 0
				self.twTo40 = 0
				self.gr40 = 0
			elif time > 15 and time <= 20:
				self.zTo5 = 0
				self.fTo10 = 0
				self.tTo15 = 0
				self.fiTo20 = 1
				self.twTo40 = 0
				self.gr40 = 0
			elif time > 20 and time <= 40:
				self.zTo5 = 0
				self.fTo10 = 0
				self.tTo15 = 0
				self.fiTo20 = 0
				self.twTo40 = 1
				self.gr40 = 0
			else:
				self.zTo5 = 0
				self.fTo10 = 0
				self.tTo15 = 0
				self.fiTo20 = 0
				self.twTo40 = 0
				self.gr40 = 1
			if assignments >= 0 and assignments <= 10:
				self.zTo10 = 1
				self.tTo25 = 0
				self.twTo50 = 0
				self.fiTo100 = 0
				self.gr100 = 0
			elif assignments > 10 and assignments <= 25:
				self.zTo10 = 0
				self.tTo25 = 1
				self.twTo50 = 0
				self.fiTo100 = 0
				self.gr100 = 0
			elif assignments > 25 and assignments <= 50:
				self.zTo10 = 0
				self.tTo25 = 0
				self.twTo50 = 1
				self.fiTo100 = 0
				self.gr100 = 0
			elif assignments > 50 and assignments <= 100:
				self.zTo10 = 0
				self.tTo25 = 0
				self.twTo50 = 0
				self.fiTo100 = 1
				self.gr100 = 0
			else:
				self.zTo10 = 0
				self.tTo25 = 0
				self.twTo50 = 0
				self.fiTo100 = 0
				self.gr100 = 1

client = pymongo.MongoClient("mongodb+srv://test_user1:Btp#2021@eddb.g0abl.mongodb.net/EDdb?retryWrites=true&w=majority", tls = True, tlsAllowInvalidCertificates=True)
db = client["eddb"]
col = db["courses"]
x = col.find()
# for data in x:
	# print(data)
dataset = []
predicted = 0



def equal(record, constraint):
	if record.domain == constraint.domain:
		if record.zTo5 == constraint.zTo5 and record.fTo10 == constraint.fTo10 and record.tTo15 == constraint.tTo15 and record.fiTo20 == constraint.fiTo20 and record.twTo40 == constraint.twTo40 and record.gr40 == constraint.gr40:
			if record.zTo500 == constraint.zTo500 and record.fTo1000 == constraint.fTo1000 and record.thTo2000 == constraint.thTo2000 and record.twTo5000 == constraint.twTo5000 and record.gr5000 == constraint.gr5000:
				if record.zTo10 == constraint.zTo10 and record.tTo25 == constraint.tTo25 and record.twTo50 == constraint.twTo50 and record.fiTo100 == constraint.fiTo100 and record.gr100 == constraint.gr100:
					return True

	return False

def kSimilar(constraint):
	ans = [];
	for data in dataset:
		if equal(data, constraint):
			ans.append(data)
	return ans;

def bestInDomain(ans):
	maxRatingSoFar = 0;
	for data in ans:
		if data.ratings > maxRatingSoFar:
			maxRatingSoFar = data.ratings

	# print("Please find the list of courses recommended based on your choices")
	res = list()
	for data in ans:
		if data.ratings == maxRatingSoFar:
			# print("Domain: %s" %data.domain)
			# print("Course Name: %s" %data.course)
			# print("Offered By: %s" %data.offeredBy)
			# print("Predicted Rating: %d" %maxRatingSoFar)
			res.append(
				{
					"domain": data.domain,
					"coursename": data.course,
					"offeredby": data.offeredBy
				}
			)

	return res, maxRatingSoFar

def differenceDuration(record, constraint):
	# valRecord, valFilter
	if record.zTo5 != 0:
		valRecord = 5

	elif record.fTo10 != 0:
		valRecord = 10

	elif record.tTo15 != 0:
		valRecord = 15

	elif record.fiTo20 != 0:
		valRecord = 20

	elif record.twTo40 != 0:
		valRecord = 40

	else:
		valRecord = 100

	if constraint.zTo5 != 0:
		valFilter = 5

	elif constraint.fTo10 != 0:
		valFilter = 10

	elif constraint.tTo15 != 0:
		valFilter = 15

	elif constraint.fiTo20 != 0:
		valFilter = 20

	elif constraint.twTo40 != 0:
		valFilter = 40

	else:
		valFilter = 100

	if valRecord < valFilter:
		return 0

	else:
		return valRecord - valFilter

def differenceCost(record, constraint):
	# valRecord, valFilter
	if record.zTo500 != 0:
		valRecord = 500

	elif record.fTo1000 != 0:
		valRecord = 1000

	elif record.thTo2000 != 0:
		valRecord = 2000

	elif record.twTo5000 != 0:
		valRecord = 5000

	else:
		valRecord = 10000

	if constraint.zTo500 != 0:
		valFilter = 500

	elif constraint.fTo1000 != 0:
		valFilter = 1000

	elif constraint.thTo2000 != 0:
		valFilter = 2000

	elif constraint.twTo5000 != 0:
		valFilter = 5000

	else:
		valFilter = 10000

	if valRecord < valFilter:
		return 0

	else:
		return valRecord - valFilter

def differenceAssignment(record, constraint):
	# valRecord, valFilter
	if record.zTo10 != 0:
		valRecord = 10

	elif record.tTo25 != 0:
		valRecord = 25

	elif record.twTo50 != 0:
		valRecord = 50

	elif record.fiTo100 != 0:
		valRecord = 100

	else:
		valRecord = 500

	if constraint.zTo10 != 0:
		valFilter = 10

	elif constraint.tTo25 != 0:
		valFilter = 25

	elif constraint.twTo50 != 0:
		valFilter = 50

	elif constraint.fiTo100 != 0:
		valFilter = 100

	else:
		valFilter = 500

	if valRecord < valFilter:
		return 0

	else:
		return valRecord - valFilter

def kSimilarAlpha(constraint, duration, cost, assign):
	# diffD, diffC, diffA
	ans = []
	for data in dataset:
		if constraint.domain == data.domain:
			diffD = differenceDuration(data, constraint)
			diffC = differenceCost(data, constraint)
			diffA = differenceAssignment(data, constraint)

			if diffD <= duration and diffC <= cost and diffA <= assign:
				ans.append(data)

	return ans

def bestInDomainAlpha(ans, constraint, alpha, beta, gamma):
	similar = 0
	similarity = {}
	ratingSimilarity = {}
	for data in ans:
		similar = alpha * (differenceDuration(data, constraint)) + beta * (differenceCost(data, constraint)) + gamma * (differenceAssignment(data, constraint))
		key = (data.domain, data.course, data.offeredBy)
		if key in similarity.keys():
			similarity[ key ] += (1 / (similar+0.01))
			ratingSimilarity[ key ] += (data.ratings * (1 / (similar+0.01)))
		else:
			similarity[ key ] = (1 / (similar + 0.01))
			ratingSimilarity[ key ] = (data.ratings * (1 / (similar + 0.01)))

	maxRatingSoFar = 0
	for key,val in similarity.items():
		maxRatingSoFar = max(maxRatingSoFar, ratingSimilarity[key] / val)
	# print("Please find the list of courses recommended based on your choices")
	res = list()
	for key,val in similarity.items():
		if ratingSimilarity[key] / val == maxRatingSoFar:
			# print("Domain: %s" %key[0])
			# print("Course Name: %s" %key[1])
			# print("Offered By: %s" %key[2])
			# print("Predicted Rating: %f" %maxRatingSoFar)
			res.append(
				{
					"domain": key[0],
					"coursename": key[1],
					"offeredby": key[2]
				}
			)
	return res, maxRatingSoFar


for data in x:
	obj = Data(data["domain"],data["course"], data["offered_by"], data["zero_to_5"], data["five_to_10"], data["ten_to_15"], data["fifteen_to_20"], data["twenty_to_40"], data["greater_than_40"], data["zero_to_500"], data["fivehundred_to_1000"],
		data["thousand_to_2000"], data["twothousand_to_5000"], data["greater_than_5000"], data["ratings"], data["zero_to_10"],
		data["ten_to_25"], data["twentyfive_to_50"], data["fifty_to_100"], data["greater_than_100"])
	dataset.append(obj)

alpha = 10
beta = 10 
gamma = 5
alphaCost  = 500 
alphaDuration = 25 
alphaAssignment = 25
# print("Enter the domain of your course, for which you want recommendations")
#print("Enter 1: for DSA")
#print("Enter 2: for WebDevelopment")
#print("Enter 3: for Graphic Designing")
choice = str(sys.argv[1])
# print("Enter your budget")
amt = int(sys.argv[2])
# print("Enter your time constraints in hrs")
time = int(sys.argv[3])
# print("Enter the minimum number of assignments/projects, you think the course must include")
assign = int(sys.argv[4])
obj = Data(choice, amt, time, assign)
ans = kSimilar(obj)
res = list()
if  len(ans) == 0:
	ans = kSimilarAlpha(obj, alphaDuration, alphaCost, alphaAssignment)
	if len(ans) != 0:
		res, predicted = bestInDomainAlpha(ans, obj, alpha, beta, gamma)

else:
	res, predicted = bestInDomain(ans)

print(len(res))
print(json.dumps(res))
print(predicted)
# print("Can you provide us the rating which you would like to give after pursuing the course")
# stars = int(input())
# print("The percentage error in our system is: ")
# print(abs(predicted-float(stars))*100/predicted, " %")
# print("Thankyou for using our recommendation system")