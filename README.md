# google-meet-breakouts
Google Apps Script code for your GSuite domain that allows instructors to launch breakout rooms

# Description
This script looks at the users calendar and grabs any events that are currently happening. For each it grabs the invite list. It then displays all those individuals on a page where you can create small groups. Once the groups are set you can launch the google meets calendare invites. Each person in the group has a new event placed on their google calendar and is emailed a notification.

[Here's a video of it in action.](https://www.loom.com/share/8488270ba9ac4d3988b4e1fe9305255f)

# How to use (for anyone on your GSuite domain)
Once it's been installed for one person, they have to publish it making sure it's run as the user accessing the web app. Then just give that URL to people in your domain. When they run it it'll check their calendar.

# Installation
Only one user on the domain has to install it. Here are the steps:

* Make a new google apps script
* Paste in the javascript code in the [code.js](code.js) file in this repository into the code.gs file in the google script (it should come up as the only file in the script).
* Paste in the html code in the [main.html](main.html) file in this repository into a new html file in the script.
  * to make a new html file go under file->New->HTML file
  * Name it "main" (the html gets added but you can put it in your self if you'd like)
* Go under Resources->Advanced Google Services and turn on the Calendar API (I'm using v3)
* Go under Publish->Deploy as Web App... 
  * give this first version a description (I usually just say "first try")
  * set it to Execute the ap as: "User accessing the web app"
  * set it to Who has access to the ap as: "Anyone in your domain" (actually mine says "Anyone at Hamline University")
* copy the url
* share it!
