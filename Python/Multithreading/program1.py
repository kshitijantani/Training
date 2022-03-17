# Share single variable between two continuous loops.
import threading

#global variable count
count = 0

def increament_counter(num):
    """
    function for sharing variable in loops
    """
    i = 2
    while i<50:
        global count 
        count += 5
        print("Thread: ",num,"Sum:",count)
        i += 1

def main():
    """
    main function to execute threads
    """

    #Creating threads
    t1 = threading.Thread(target = increament_counter, args = (0,))
    t2 = threading.Thread(target = increament_counter, args = (1,))

    #starts threads
    t1.start()
    t2.start()

    #Wait until threads finished
    t1.join()
    t2.join()

    print("End of thread.")


if __name__ == "__main__":
        main()
        print("Done")