# set
The pattern-matching game set, as a networked browser-based multiplayer game

## Updates / Notes
##### (_These are like little eenie weenie release notes_)
##### 2019-12-13
* Added "Board".
    * it has a `deck` and a face-up card `zone`
    * it has a helper method to attempt to fill its zone with cards: `ensureXManyCardsInZone` 
* Added functionality to "Deck"
    * now has the `hit` method which is more helpful than just directly calling `Array.prototype.pop` because `hit` will "fail" differently; eg, it'll always return an array no matter what, and it'll only return as many `card`s as it's able to.
* Added [tslint](https://palantir.github.io/tslint/) and [husky](https://www.npmjs.com/package/husky)
    * Ran `npx tslint 'src/**/*.ts' --fix`  
    
##### 2019-12-12
* Added two folders: `game` and `client`.
    * Eventually there will be a `server` folder as well (which will likely contain a RESTful web service), but that can wait until at least the `game` library is finished. It can probably also wait until a solitaire-esque front end is finished, too.
* `client` is just the output of [Vue CLI](https://cli.vuejs.org/)'s generator. As I plan to tackle the `game` implementation first, `client` may just get replaced in the future with a new Vue CLI generator call.
* `game` is in [Typescript](https://www.typescriptlang.org/). Why Typescript? Because I'm very comfortable with Javascript & Typescript and I don't want to write a game library in a dynamically typed language. Having interfaces, tests, strong typing and better [Intellisense](https://en.wikipedia.org/wiki/Intelligent_code_completion) support for my IDE is going to save me so much pain in the long run. Very worth, much value.

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
