<b> To clone this repository, run the following script in your terminal window: </b><br>
<ol>
<li><code>git clone --recursive url-here </code><br></li>
<li> <code> npm install </code> separately in both <code> URL-shortening-service/client </code> and <code> URL-shortening-service </code> directories</li>
<li> <code> npm start </code> separately in both <code> URL-shortening-service/client </code> and <code> URL-shortening-service </code> directories</li></li>
</ol>
<b>This project is built on MERN stack. 
Technologies used include Mongoose library, several Node packages well suited for service purposes.</b>
<ul>
  <li>The back-end API shortens urls and records a number of visits to each shortened url.</li>
  <li>The API stores all the initial and shortened URLs to the MongoDB database.</li>
  <li>The API checks whether the URL a user entered is already shortened by our service. Therefore, API doesn't store redundant code to the database.</li>
  <li>Error-handling functionality + nice amount of UI including click events to copy URLs.</li>
</ul>
React app uses custom hooks to create stateful components. Components are separated into their own modules and sub-directories. Code is readable, scalable. 
The project uses CSS Bootstrap library to create responsive web design.

<blockquote>I thought to implement cookies or a proxy server to track and save unique-visitors data, but for the time being I'm still new to these topics. Without deployment I was unable to get <code>req.headers['x-forwarded-for']</code>.</blockquote>

<b>Instead: </b>
<ul>
  <li>App uses a third-party API to retrieve a user's ip address. Then this ip address is stored in a state.</li>
  <li>Unique users are saved directly to the database once a user shortens his/her first url. </li>
  <li>User can't delete himself from database, though he's enabled to remove url-shortening history.</li>
  <li>Even if a user clears browser history including cookies, the project data still isn't removed.</li>
  <li>This is handy when working on much more important data than this one.</li>
</ul>
