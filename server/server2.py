import random
import string
from collections import deque
import cherrypy


class SpotifyQueue(object):


    #opens html file for home page
    @cherrypy.expose
    def index(self):
        return open('../www/app.html')

    #appends user and songURI to the queue
    @cherrypy.expose
    def queue(self, name='user', song = 'spotifyURI'):
        queue.append({'name' : name, 'song' : song})
        return name + ' ' + song

    #test function to check if queue is properly appending
    @cherrypy.expose
    def test(self):
        testvar = queue.popleft()
        return str(testvar)

queue = deque([])
if __name__ == '__main__':
    cherrypy.quickstart(SpotifyQueue())
