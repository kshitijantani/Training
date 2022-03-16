# Create while loop which increase counter by one every second.
# Start count from 0
# Stop while loop when counter is grater than 500
# Program must not stop on any keyboard press. (Not even ctrl + c or ctrl + x)

import time
counter = 0

print ('Starts here:')
while True:
    try:
        if counter < 500:
            counter += 1
            time.sleep(1)
            print(counter)
            continue
        else:
            break
    except KeyboardInterrupt:
        pass
 
 