import json
output = []
f = open('data.txt');
data = f.readlines()
count = 0;
for i in data:
    output.append({"id":count,"course":i})
    count+=1

filename = input("Enter filename : ")
with open(filename, 'w') as fp:
    json.dump(output, fp)
f.close()
