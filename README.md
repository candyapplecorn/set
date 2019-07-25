# set
The pattern-matching game set, as a networked browser-based multiplayer game

## status
Still brainstorming. 

[https://wireframe.cc/f66Fps](https://wireframe.cc/f66Fps)

## architecture
* Choose to trust client - not going to worry about security. It's a SET game, no https/auth needed (although SEO likes https!)
* Since am choosing to trust client, will pass game states around; store game state(s) in cookies vs localstorage? This allows game states to be stored indefinitely by clients with less/no need for game server to store anything long-term
* Not going to do SSR but might still want to use cookies rather than local storage
* TBD: caching (redis, memcached, couchdb, w/e) vs actual database (sqlite3, postgres, realtimedb etc)??
* sockets: definitely
* unique game/lobby URLs for sharing w/ friends
* players identified by color, per game? need a way to identify players

## technologies
* docker: yes. docker swarm mode? maybe.
* Probably Vue.js for the view layer.
* nodejs express server. 
* typescript would be nice
* some kind of socket library
