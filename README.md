# _PROJECT NAME_

Haiku Checker

#### _SHORT DESCR_

_This is an application to check Haiku rules, 6.25.20_

#### By _**YOUR NAME HERE**_

Noel Kirkland and Taylor Phillips

## Description

_This web application will take a user's inputted haiku and make sure that it follows all of the standard haiku rules_

### Specs

| Behavior  | Input | Output  |
| :-------: | :---: | :-----: |
| 1. User inputs a haiku poem to be validated as valid or invalid format   |  Valid Poem     |   Valid      |
| 2. If user inputs a poem with an invalid Haiku format then it is returned "invalid"       |  Ivalid Haiku     |   "Invalid"      |
| 3.        |       |         |
| 4.        |       |         |

### Technical Specs

* Validate that there are no numbers or special character in poem

| Input | Output  |
| :---: | :-----: |
| "Age ain't nothing but a #" | "Please enter only letters"|

* Count syllables from words with only one vowel but with no diphthongs or silent e's
  * "him", "her", "dug"
* Count syllables from words with multiple vowels but with no diphthongs or silent e's
  * "hello", "Coding"
* Count syllables from words with only one vowel as well as a silent e but no dipthongs
  * "Code"
* Count syllables from words with multiple vowels as well as a silent e but no dipthongs
  * "ratable", "complete"
* Count syllables from words with a diphthong, no other vowels, and no silent e's
  * "boil", "deer", "stairs"
* Count syllables from words with multiple dipthongs, no other vowels, and no silent e's
  * "sourdough", 
* Count syllables from words with a dipthong, one other vowel, but no silent e
  * "although", "Haiku", "goodnight", "today", "sau-er-kraut"
* Count syllables from words with a dipthong, multiple other vowels, but no silent e
  * "audubon", "Player", 
* Count syllables from words with a dipthong, one other vowel, and a silent e
  * "goodbye"
* Count syllables from words with a dipthong, multiple other vowels, and a silent e
  * "Europe"

* Validate that there are five syllables in line one

| Input | Output  |
| :---: | :-----: |
| "I like sour" | "Please enter only letters"


## Setup/Installation Requirements

* _Install Git Bash_
* _Using a Terminal on desktop, user will need to type git init_
* _go to this repository and clone then Open in Desktop_
* _Will likely need Git for Desktop which can be found here: https://help.github.com/en/desktop/getting-started-with-github-desktop/installing-github-desktop_
* _Clone file to desktop from repo on github_
* _run index.html with web browser_
* _Other option is to go to Repository on git hub and download zip_
* _Retrieve zip file in downloads on computer and double click to unpack_
* _Find the project folder on desktop or downloads folder_
* _Run index.html with web browserThis is a great place_

## Known Bugs

_No Known bugs_

## Support and contact details

_Contact me at...._

## Technologies Used

_HTML, CSS, JavaScript, Jquery, Jest, Webpack_

### License

*GPL license distribution*

Copyright (c) 2020 **_Noel Kirkland and Taylor Phillips_**
