First page will be loaded as login Page. Where you have to enter some username & password
Once you sign in, it generates a random token, which makes sure that you are signed in and then only can access private pages
After logging in, you will be redirected to overview page, from sidepanel you can go to courses page

I have used Context API to make data global and to access it from anywhere in the code. After taking data from Context API I have loaded it in localStorage

Search functionality works as you type any query, It checks it againts to all the columns and returns you an array loaded with matched objects 