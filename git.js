//! git & github
//git - distributed version control system + branching & merging
//github - web-based hosting service for version control using git

//* repository / repo[folder + git history]
// local repo - on your computer
// remote repo - on github

//! git commands
//* config

//? git config --global --list -> list git global config
//? git config --global user.name "your name" -> set git global username
//? git config --global user.email "your email" -> set git global email
//? git config --global core.editor "<editor>" -> set git global editor
//? git config --global core.autocrlf true -> set git global autocrlf
//? git config --global init.defaultBranch main -> set git global default branch
//? git config --global pull.rebase false -> set git global pull rebase



//* initialize empty git repository
//? git init -> initialize empty git repository

//! working flow
//* changes ->staging area [ready state]-> new version
//* working directory -> staging area -> local repository
//! working dirctory -> git add -> staging area -> git commit -m "commit message" -> local repository -> git push -> remote repository
//? git add <file_path> -> add file to staging area
//? git commit -m "commit message" -> commit changes to local repo
//? git status -> check status of files

// git add <file_path> -> add file to staging area
// git add . -> add all files to staging area

//! branch
//? git branch -> list all local branches
//? git branch <branch_name> -> create new branch from current branch
//? git switch <branch_name> -> switch to branch

//! merge
//? git merge <branch_name> -> merge branch into current branch

//* merge methods
//? 1. fast forward - when the current branch has no new commits since the branch was created, git will simply move the current branch pointer to the new branch pointer
// main -> A -> B -> C -> D
// test         B -> C -> D

//? 2. 3-way merge - when the current branch has new commits since the branch was created, git will create a new commit that combines the changes from both branches
// main -> A -> B -> E -> F
// test         B -> C -> D


//* merge conflict - when multiple people are working on the same file and git is unable to automatically merge the changes


//! git hub
//? remote

//? git remote -v -> list all remote repositories
//? git remote add <branch_name> <remote_url> -> add remote repository
//? git remote remove <branch_name> -> remove remote repository

//? git pull origin <branch_name> -> pull changes from remote repository
//? git push origin <branch_name> -> push changes to remote repository
