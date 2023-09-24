# Homework Week 1

See Week1_recipe.md for in this current directory for recipe card homework submission.

-- 

### **[Git Tutorial](http://rogerdudler.github.io/git-guide/) notes:**

    - Git is a widely used version control software which we can access via the command line of our computers. First, lets install Git on our computers.
    - GitHub is a web-based Git repository hosting service. You can use it as a backup of your git repositories, or to collaborate as a team on a project. We will be using it to keep track of our in class, and homework files.
    - In terminal:
    - ls to list current files in current directory (Mac OSX)
    - cd to move in and out of folders, aka “change directory”
    - cd ../ to jump back out of a folder.
    - git clone https://github.com/Kadee80/WebDevF23.git  or other SSH link/url from github repository --- This is a copy of your repository (class examples) on our local machine
    - To update this repository to current version, navigate to this folder from Documents and executing git pull to sync folder with online class repository. If you accidentally edit these files and are no longer able to pull, you can always delete your local copy and clone again.
    - Every week, you will be committing files and folders to your HW repo, and pushing them to your online GitHub repo for me to review. This is how you will submit your HW code.
    - To add edit files:
    - Open my repository in text editor (Visual Studio Code)
    - Next, create a file named README.md in the Hello_World folder. Add anything you’d like
    Back in terminal, navigate to your HW repo folder.
    - Use ls to make sure you are in the correct folder.
    - git status to see a list of files and folders that git is not keeping track of yet. In our case is would be Hello_World/ and the README.md within. To add the current state of this file and folder we use git add + file or folder name.
    - Eg, git add Hello_World  or git add Hello_World/README.md Or if we want to add any and everything new or updated to git: git add *
    - Commit with a message ---- git commit -m "Initial Commit, In class exercise"
    - Lastly, we need to push our local repository changes to the GitHub repository.
    git push and now, our online repository should match our local computer.


### Add github repo link to the class roster google doc

done

### Markdown File Recipe Card

See ![Recipe card](./Week1_recipe.md "Recipe card")