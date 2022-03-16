## Multithreading

#### P1: Share single variable between two continuous loops.
#### Input
```
Created two threads 
```

#### Output
```
Single variable will be shared between loops with threads.
```

#### Explaination:
Import multiprocessing module, define a function for a variable with continous loop, create two threads, start those threads. Logic behind this is on starting threads it will do their job and if that thread waits for some microseconds other thread will start its job. (One can check by using time.sleep() thread for brief idea about threading)