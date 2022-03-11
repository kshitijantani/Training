# importing required modules
import gdown, os, glob, random, string, shutil
from zipfile import ZipFile


#-------------------------------Download Folder from GDrive-----------------------
url = "https://drive.google.com/file/d/1Aeh4GIjLwyiuWGd6AGxM8Q3WgiffLfIu/view"

output = "/home/woc/Kshitij_Antani/Training/Python/Exam_11_03_2022/"
gdown.download(url=url, output=output, quiet=False, fuzzy=True)


#--------------------------------Extraction of all file----------------------------
# specifying the zip file name
file_name = "Exam.zip"

# opening the zip file in READ mode
with ZipFile(file_name, 'r') as zip:

	# printing all the contents of the zip file
	zip.printdir()  

	# extracting all the files
	print('Extracting all the files')
	zip.extractall()

#-------------------------------------Get path printed in text file-----------------
  
# returns a list of names in list files.
exam_folder = glob.glob('/home/woc/Kshitij_Antani/Training/Python/Exam_11_03_2022/Exam/**/*.txt', 
                   recursive = True)

# paths of folders
path_output_folder = "/home/woc/Kshitij_Antani/Training/Python/Exam_11_03_2022/" + "Output/"
path_text_file = path_output_folder + "paths.txt"

# create file to add paths of text files
with open(path_text_file,'w+') as path:
    for file in exam_folder:
        path.writelines(file)
        path.write("\n")

# #-------------------------------------Create random names ----------------------------- 

# create a function
def random_string():
    """
    function that creates random string
    """
    result = ""
    for i in range(5):
        res = ''.join(random.choice(string.ascii_uppercase))
        result += res
    
    return "Random name: {}".format(result)

# open path files to read paths of text.txt files
# and open file to writerandom string in text.txt files
with open(path_text_file,'r') as file:

    path_list = file.readlines()
    
    # to remove "\n" from the path when reading lines
    path = [a[ : -1] for a in path_list]
    count = 0

    # loop to get paths from text file
    for path_of_text_files in path:
        count += 1
        f_open = open(path_of_text_files,"w")
        f_open.write(random_string())
        f_open.close()

        # create variable for source and destination file rename
        source_file = path_of_text_files
        path_in_string  = path_of_text_files.split("Exam")[2]
        dest_file = path_of_text_files.split("text.txt")[0] +str(count) + path_in_string.replace("/","_")

        os.rename(source_file, dest_file)

# variable for destination folder of renamed files
dest_path = path_output_folder + "all_text_files/"

# 
try:
    # created folder in given path
    os.mkdir(dest_path)
except:
    pass
finally:
    # loop for fetching file from main folder to destined folder
    for path_of_file in path:
        source = path_of_file.split('text.txt')[0]
        destination = dest_path

        # list of all files with thier path
        all_files = os.listdir(source)

        # move files to destination folder
        for files in all_files:
            if '.txt' in files:
                s = source + files
                d = destination + files
                shutil.move(s,d)
        
